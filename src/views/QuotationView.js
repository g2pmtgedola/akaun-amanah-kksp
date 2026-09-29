// Quotation View Component for Akaun Amanah (Secretary Module) with Automatic Numerical Sorting
import { formatCurrency, STATUS_STYLES } from "../data/schema.js";
import { renderModal, showDeleteConfirmation } from "../components/Modal.js";
import { addRecord, updateRecord, deleteRecord } from "../services/api.js";
import { showToast } from "../components/Toast.js";
import { canEdit } from "../services/auth.js";

function extractYearAndMonth(dateStr, fallbackYear = "2026") {
  let targetYear = fallbackYear === "ALL" || !fallbackYear ? "2026" : fallbackYear;
  let targetMonth = "JAN";

  if (dateStr) {
    const yMatch = dateStr.match(/\b(202[4-9])\b/);
    if (yMatch) targetYear = yMatch[1];

    const monthKeys = ["JAN", "FEB", "MAC", "APR", "MEI", "JUN", "JUL", "OGOS", "SEPT", "OKT", "NOV", "DIS"];
    const mNumMatch = dateStr.match(/\/(\d{1,2})\//) || dateStr.match(/-(\d{1,2})-/) || dateStr.match(/^\d{4}-(\d{2})-\d{2}$/);
    if (mNumMatch) {
      const idx = parseInt(mNumMatch[1], 10) - 1;
      if (idx >= 0 && idx < 12) targetMonth = monthKeys[idx];
    } else {
      const upper = dateStr.toUpperCase();
      for (const m of monthKeys) {
        if (upper.includes(m)) {
          targetMonth = m;
          break;
        }
      }
    }
  }

  return { year: targetYear, month: targetMonth };
}

/**
 * Extract Running Number from No. Sebutharga e.g., "KKSP/700-5/3/2 JLD. 5 ( 60)" -> 60
 */
function extractQuotationNoNumber(noStr = "") {
  if (!noStr) return 0;
  const match = noStr.match(/\(\s*(\d+)\s*\)/) || noStr.match(/(\d+)\s*$/);
  if (match) return parseInt(match[1], 10);
  return 0;
}

export function renderQuotationView(db, selectedYear) {
  let records = (db.quotations || []).filter((r) => r.record_status !== "DELETED");

  if (selectedYear !== "ALL") {
    records = records.filter((r) => r.year === selectedYear || (!r.year && selectedYear === "2025"));
  }

  // Automatic numerical sorting by No. Sebutharga running number (58 -> 60 -> 91)
  records.sort((a, b) => {
    const numA = extractQuotationNoNumber(a.quotation_no || a.id);
    const numB = extractQuotationNoNumber(b.quotation_no || b.id);
    if (numA !== numB) return numA - numB;
    return (a.quotation_no || a.id).localeCompare(b.quotation_no || b.id);
  });

  const totalAmt = records.reduce((acc, curr) => acc + (Number(curr.amount) || 0), 0);

  return `
    <div class="space-y-6 animate-fade-in pb-10">
      <!-- Header Bar -->
      <div class="flex flex-wrap items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm no-print">
        <div>
          <h2 class="text-2xl font-extrabold text-slate-900 tracking-tight">MODUL REKOD SEBUTHARGA (SETIAUSAHA)</h2>
          <p class="text-xs font-medium text-slate-500 mt-1">Penjejakan Cadangan Sebutharga & Kelulusan Pelanggan (${selectedYear === "ALL" ? "Semua Tahun" : "Tahun " + selectedYear})</p>
        </div>
        <div class="flex items-center gap-3">
          <span class="text-sm font-bold text-slate-700 bg-purple-50 px-4 py-2 rounded-xl border border-purple-200">
            Nilai Pipeline Sebutharga: <span class="text-purple-700 font-black">${formatCurrency(totalAmt)}</span>
          </span>
          ${
            canEdit()
              ? `<button id="btn-add-quotation" class="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold shadow-sm transition">
                  + Tambah Sebutharga
                </button>`
              : ""
          }
        </div>
      </div>

      <!-- Table Container -->
      <div class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div class="overflow-x-auto">
          <table class="inst-table">
            <thead>
              <tr>
                <th>NO. SEBUTHARGA</th>
                <th>TARIKH</th>
                <th>TAJUK PROGRAM / CADANGAN SEBUTHARGA</th>
                <th>KLIEN / AGENSI / SEKOLAH</th>
                <th class="text-right">JUMLAH ANGGARAN (RM)</th>
                <th>STATUS</th>
                <th class="text-center">TINDAKAN</th>
              </tr>
            </thead>
            <tbody>
              ${
                records.length === 0
                  ? `<tr><td colspan="7" class="text-center py-8 text-slate-400 font-medium">Tiada rekod sebutharga bagi tahun ${selectedYear}.</td></tr>`
                  : records
                      .map(
                        (r) => `
                    <tr class="hover:bg-slate-50">
                      <td class="font-bold text-slate-900 font-mono text-xs">${r.quotation_no || r.id}</td>
                      <td class="font-semibold">${r.quotation_date || r.month + " " + (r.year || "2026")}</td>
                      <td class="font-medium text-slate-800 max-w-xs truncate">${r.description || r.programme || "-"}</td>
                      <td class="text-slate-700 font-semibold">${r.client || "Agensi Pelanggan"}</td>
                      <td class="text-right font-extrabold text-purple-700">${formatCurrency(r.amount)}</td>
                      <td>
                        <span class="status-badge ${STATUS_STYLES[r.status] || STATUS_STYLES.Approved}">
                          ${r.status || "Approved"}
                        </span>
                      </td>
                      <td class="text-center">
                        <div class="flex items-center justify-center gap-1">
                          <button onclick="window.printSingleQuotation('${r.id}')" class="p-1.5 bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-lg border border-purple-200 text-xs font-bold transition flex items-center gap-1" title="Cetak Sebutharga Rasmi">
                            🖨️ Cetak
                          </button>
                          <button onclick="window.viewQuotationRecord('${r.id}')" class="p-1.5 hover:bg-slate-100 rounded-lg text-slate-600" title="Papar rincian">👁️</button>
                          ${
                            canEdit()
                              ? `<button onclick="window.editQuotationRecord('${r.id}')" class="p-1.5 hover:bg-slate-100 rounded-lg text-blue-600" title="Edit">✏️</button>
                                 <button onclick="window.deleteQuotationRecord('${r.id}')" class="p-1.5 hover:bg-slate-100 rounded-lg text-rose-600" title="Padam">🗑️</button>`
                              : ""
                          }
                        </div>
                      </td>
                    </tr>
                  `
                      )
                      .join("")
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

export function openQuotationFormModal(db, record = null, currentSelectedYear = "2026") {
  const isEdit = !!record;
  const nextNo = `KKSP/700-5/3/2 JLD. 5 (${String((db.quotations || []).length + 1).padStart(2, " ")})`;
  const defaultDate = `15/01/${currentSelectedYear === "ALL" ? "2026" : currentSelectedYear}`;

  renderModal({
    title: isEdit ? `Edit Sebutharga (${record.quotation_no || record.id})` : "Daftar Sebutharga Baharu",
    bodyHtml: `
      <form id="quo-form" class="space-y-4">
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block font-bold text-slate-700 mb-1">No. Sebutharga Rasmi</label>
            <input type="text" id="quo-no" value="${record ? record.quotation_no || record.id : nextNo}" class="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-bold font-mono text-xs" required />
          </div>
          <div>
            <label class="block font-bold text-slate-700 mb-1">Tarikh Sebutharga (DD/MM/YYYY)</label>
            <input type="text" id="quo-date" value="${record ? record.quotation_date || defaultDate : defaultDate}" placeholder="15/01/2026" class="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-semibold" required />
          </div>
        </div>

        <div>
          <label class="block font-bold text-slate-700 mb-1">Tajuk Sebutharga / Program</label>
          <input type="text" id="quo-desc" value="${record ? record.description || record.programme || "" : ""}" placeholder="PENINGKATAN KEMAHIRAN GURU-GURU TVET..." class="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-semibold" required />
        </div>

        <div>
          <label class="block font-bold text-slate-700 mb-1">Klien / Agensi / Sekolah</label>
          <input type="text" id="quo-client" value="${record ? record.client || "" : ""}" placeholder="MARITIME WATERFRONTS SUITES SDN. BHD." class="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-semibold" required />
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block font-bold text-slate-700 mb-1">Jumlah Harga (RM)</label>
            <input type="number" step="0.01" id="quo-amount" value="${record ? record.amount || "" : ""}" placeholder="27800.00" class="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-bold text-purple-700" required />
          </div>
          <div>
            <label class="block font-bold text-slate-700 mb-1">Status Sebutharga</label>
            <select id="quo-status" class="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-semibold">
              <option value="Approved" ${record && record.status === "Approved" ? "selected" : ""}>Approved (Diluluskan)</option>
              <option value="Submitted" ${record && record.status === "Submitted" ? "selected" : ""}>Submitted (Disemak)</option>
              <option value="Draft" ${record && record.status === "Draft" ? "selected" : ""}>Draft</option>
              <option value="Converted to PO" ${record && record.status === "Converted to PO" ? "selected" : ""}>Converted to PO</option>
            </select>
          </div>
        </div>
      </form>
    `,
    footerButtons: [
      { label: "Batal", className: "px-4 py-2 border rounded-lg text-slate-700", onClick: (e, c) => c() },
      {
        label: isEdit ? "Kemaskini" : "Simpan Sebutharga",
        className: "px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold shadow-md",
        onClick: async (e, close) => {
          const form = document.getElementById("quo-form");
          if (!form.checkValidity()) {
            form.reportValidity();
            return;
          }

          const dateVal = document.getElementById("quo-date").value;
          const { year, month } = extractYearAndMonth(dateVal, currentSelectedYear);

          const payload = {
            id: isEdit ? record.id : `QUO-${year}-${String((db.quotations || []).length + 1).padStart(4, "0")}`,
            quotation_no: document.getElementById("quo-no").value,
            quotation_date: dateVal,
            month: month,
            year: year,
            programme: document.getElementById("quo-desc").value,
            description: document.getElementById("quo-desc").value,
            client: document.getElementById("quo-client").value,
            amount: parseFloat(document.getElementById("quo-amount").value) || 0,
            status: document.getElementById("quo-status").value,
          };
          if (isEdit) await updateRecord("Quotation", payload);
          else await addRecord("Quotation", payload);
          showToast("✓ Rekod sebutharga berjaya disimpan bagi Tahun " + year);
          close();
          if (window.appRefreshUI) window.appRefreshUI();
          else window.location.reload();
        },
      },
    ],
  });
}

export function attachQuotationEvents(db, selectedYear = "2026") {
  window.openQuotationFormModal = (dbRef, rec) => openQuotationFormModal(dbRef || db, rec, selectedYear);

  const addBtn = document.getElementById("btn-add-quotation");
  if (addBtn) {
    addBtn.onclick = () => openQuotationFormModal(db, null, selectedYear);
  }

  // Printable Official Quotation Document Generator Modal
  window.printSingleQuotation = (id) => {
    const rec = (db.quotations || []).find((r) => r.id === id);
    if (!rec) return;

    const orgName = db.settings ? db.settings.organisation_name || "KOLEJ KOMUNITI SUNGAI PETANI" : "KOLEJ KOMUNITI SUNGAI PETANI";
    const quoNo = rec.quotation_no || rec.id;
    const quoDate = rec.quotation_date || rec.month + " " + (rec.year || "2026");
    const client = rec.client || "MARITIME WATERFRONTS SUITES SDN. BHD.";
    const titleStr = rec.description || rec.programme || "SEBUTHARGA KURSUS LATIHAN PENGENDALIAN MAKANAN";

    renderModal({
      title: `Cetakan Sebutharga Rasmi - ${quoNo}`,
      bodyHtml: `
        <div class="space-y-4">
          <!-- Top Prominent Action Bar -->
          <div class="no-print bg-purple-50 p-3.5 rounded-xl border border-purple-200 flex items-center justify-between gap-3 shadow-sm">
            <div class="flex items-center gap-2 text-purple-900 font-extrabold text-xs">
              <span class="text-lg">🖨️</span>
              <span>Dokumen Sebutharga Rasmi (${quoNo}) Sedia Untuk Dicetak</span>
            </div>
            <button onclick="window.print()" class="px-5 py-2 bg-purple-700 hover:bg-purple-800 text-white font-black rounded-xl shadow-md transition flex items-center gap-1.5 text-xs">
              <span>🖨️</span> CETAK SEBUTHARGA SEKARANG
            </button>
          </div>

          <div id="single-quotation-print" class="bg-white p-6 sm:p-8 rounded-xl text-slate-900 border border-slate-300 font-sans text-xs space-y-6">
            <!-- Institutional Header Bar -->
            <div class="flex items-center justify-between border-b-2 border-slate-900 pb-4">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 bg-slate-900 text-white font-extrabold flex items-center justify-center rounded-xl text-base shadow-sm shrink-0">
                  KKSP
                </div>
                <div>
                  <h1 class="text-sm font-black tracking-tight text-slate-900 uppercase">${orgName}</h1>
                  <p class="text-xs font-bold text-slate-700">KEMENTERIAN PENDIDIKAN TINGGI MALAYSIA</p>
                  <p class="text-[11px] text-slate-500">Unit Akaun Amanah • No. 1, Jalan Teratai, 08000 Sungai Petani, Kedah</p>
                </div>
              </div>
              <div class="text-right">
                <span class="inline-block bg-purple-100 text-purple-900 font-extrabold text-[11px] px-3 py-1 rounded-md border border-purple-300 uppercase tracking-wider mb-1">
                  SEBUTHARGA RASMI
                </span>
                <p class="font-mono text-xs font-extrabold text-slate-900">${quoNo}</p>
                <p class="text-slate-600 text-[11px] font-semibold">Tarikh: ${quoDate}</p>
              </div>
            </div>

            <!-- Client & Quotation Info Grid -->
            <div class="grid grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-300">
              <div>
                <p class="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">DISEDIAKAN UNTUK / KLIEN:</p>
                <p class="font-extrabold text-slate-900 text-sm">${client}</p>
                <p class="text-[11px] text-slate-600 font-medium mt-0.5">Permohonan Cadangan Sebutharga Akaun Amanah</p>
              </div>
              <div class="text-right space-y-1">
                <p class="text-[10px] font-bold text-slate-500 uppercase tracking-wider">STATUS SEBUTHARGA:</p>
                <span class="inline-block font-extrabold text-xs px-2.5 py-1 rounded-md ${STATUS_STYLES[rec.status] || STATUS_STYLES.Approved}">
                  ${rec.status || "Approved"}
                </span>
                <p class="text-[10px] text-slate-500">Sah Sehingga 30 Hari Dari Tarikh Dikeluarkan</p>
              </div>
            </div>

            <!-- Items Table -->
            <div class="border border-slate-300 rounded-lg overflow-hidden">
              <table class="w-full text-left border-collapse">
                <thead>
                  <tr class="bg-slate-900 text-white font-bold border-b border-slate-900 text-xs">
                    <th class="p-3 w-12 border-r border-slate-800 text-center">BIL</th>
                    <th class="p-3 border-r border-slate-800">PERKARA / CADANGAN PROGRAM / SPESIFIKASI</th>
                    <th class="p-3 w-28 text-right">JUMLAH (RM)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-white">
                    <td class="p-3 border-r border-slate-200 text-center font-mono font-bold">1</td>
                    <td class="p-3 border-r border-slate-200">
                      <p class="font-bold text-slate-900 text-xs">${titleStr}</p>
                      <p class="text-[11px] text-slate-500 mt-1 leading-relaxed">Pakej pengendalian latihan khas, penyediaan bahan modul, sijil penyertaan & kebenaran pengurusan Akaun Amanah Kolej Komuniti Sungai Petani.</p>
                    </td>
                    <td class="p-3 text-right font-extrabold text-purple-900 text-sm">${formatCurrency(rec.amount)}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Total Summary Box -->
            <div class="flex justify-end pt-2">
              <div class="w-72 bg-purple-50 p-4 rounded-xl border-2 border-purple-700 text-right shadow-sm">
                <p class="text-xs font-bold text-purple-900">JUMLAH KESELURUHAN SEBUTHARGA:</p>
                <p class="text-2xl font-black text-purple-900 mt-0.5">${formatCurrency(rec.amount)}</p>
              </div>
            </div>

            <!-- Authorization & Signatures Section -->
            <div class="pt-6 border-t border-slate-300 grid grid-cols-2 gap-8 text-xs">
              <div class="space-y-12">
                <div>
                  <p class="font-bold text-slate-800">DISEDIAKAN OLEH (SETIAUSAHA AKAUN AMANAH):</p>
                  <div class="sig-line border-b-2 border-slate-900 h-16 w-48 mt-2"></div>
                  <p class="font-bold text-slate-900 mt-2">NAMA: .....................................................</p>
                  <p class="text-slate-600 text-[11px]">Jawapan / Unit Akaun Amanah KKSP</p>
                  <p class="text-slate-600 text-[11px]">Tarikh: ${quoDate}</p>
                </div>
              </div>

              <div class="space-y-12 text-right">
                <div class="inline-block text-left w-full">
                  <p class="font-bold text-slate-800">DISAHKAN & DILULUSKAN OLEH (COP RASMI):</p>
                  <div class="sig-line border-b-2 border-slate-900 h-16 w-48 mt-2 ml-auto"></div>
                  <p class="font-bold text-slate-900 mt-2 text-right">NAMA: .....................................................</p>
                  <p class="text-slate-600 text-[11px] text-right">Pengarah / Ketua Unit Akaun Amanah</p>
                  <p class="text-slate-600 text-[11px] text-right">Tarikh: .....................................................</p>
                </div>
              </div>
            </div>

            <!-- Footer Disclaimer -->
            <div class="pt-4 border-t border-slate-200 text-[10px] text-slate-500 flex justify-between">
              <p>Cetakan Automatik Sistem Pengurusan Akaun Amanah KKSP • Dokumen Sah Bagi Tujuan Rasmi</p>
              <p>Mukasurat 1 / 1</p>
            </div>
          </div>
        </div>
      `,
      footerButtons: [
        { label: "Tutup", className: "px-4 py-2 border rounded-lg text-slate-700 font-semibold", onClick: (e, c) => c() },
        {
          label: "🖨️ Cetak Sebutharga Sekarang",
          className: "px-5 py-2.5 bg-purple-700 hover:bg-purple-800 text-white rounded-xl font-black shadow-lg transition flex items-center gap-1.5",
          onClick: () => window.print(),
        },
      ],
    });
  };

  window.viewQuotationRecord = (id) => {
    window.printSingleQuotation(id);
  };

  window.editQuotationRecord = (id) => {
    const rec = (db.quotations || []).find((r) => r.id === id);
    if (rec) openQuotationFormModal(db, rec, selectedYear);
  };

  window.deleteQuotationRecord = (id) => {
    const rec = (db.quotations || []).find((r) => r.id === id);
    if (!rec) return;
    showDeleteConfirmation({
      recordId: rec.id,
      description: rec.description || rec.programme,
      amount: formatCurrency(rec.amount),
      onConfirm: async () => {
        await deleteRecord("Quotation", rec.id);
        showToast("✓ Rekod sebutharga dipadam");
        if (window.appRefreshUI) window.appRefreshUI();
        else window.location.reload();
      },
    });
  };
}
