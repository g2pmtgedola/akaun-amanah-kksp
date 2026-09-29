// Invoice View Component for Akaun Amanah (Secretary Module) with Automatic Numerical Sorting
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
 * Extract Running Number from No. Invois e.g., "KKSP/700-5/3/2 JLD. 5 ( 60)" -> 60
 */
function extractInvoiceNoNumber(noStr = "") {
  if (!noStr) return 0;
  const match = noStr.match(/\(\s*(\d+)\s*\)/) || noStr.match(/(\d+)\s*$/);
  if (match) return parseInt(match[1], 10);
  return 0;
}

export function renderInvoiceView(db, selectedYear) {
  let records = (db.invoices || []).filter((r) => r.record_status !== "DELETED");

  if (selectedYear !== "ALL") {
    records = records.filter((r) => r.year === selectedYear || (!r.year && selectedYear === "2025"));
  }

  // Automatic numerical sorting by No. Invois running number (58 -> 60 -> 91)
  records.sort((a, b) => {
    const numA = extractInvoiceNoNumber(a.invoice_no || a.id);
    const numB = extractInvoiceNoNumber(b.invoice_no || b.id);
    if (numA !== numB) return numA - numB;
    return (a.invoice_no || a.id).localeCompare(b.invoice_no || b.id);
  });

  const totalAmt = records.reduce((acc, curr) => acc + (Number(curr.amount) || 0), 0);

  return `
    <div class="space-y-6 animate-fade-in pb-10">
      <!-- Header Bar -->
      <div class="flex flex-wrap items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm no-print">
        <div>
          <h2 class="text-2xl font-extrabold text-slate-900 tracking-tight">MODUL REKOD INVOIS (SETIAUSAHA)</h2>
          <p class="text-xs font-medium text-slate-500 mt-1">Pengurusan Invois Tuntutan Bayaran & Status Tunggakan (${selectedYear === "ALL" ? "Semua Tahun" : "Tahun " + selectedYear})</p>
        </div>
        <div class="flex items-center gap-3">
          <span class="text-sm font-bold text-slate-700 bg-blue-50 px-4 py-2 rounded-xl border border-blue-200">
            Jumlah Invois: <span class="text-blue-700 font-black">${formatCurrency(totalAmt)}</span>
          </span>
          ${
            canEdit()
              ? `<button id="btn-add-invoice" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-sm transition">
                  + Tambah Invois
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
                <th>NO. INVOIS</th>
                <th>TARIKH INVOIS</th>
                <th>PROGRAM / TAJUK INVOIS</th>
                <th>KLIEN / BAYARAN MELALUI</th>
                <th class="text-right">JUMLAH (RM)</th>
                <th>STATUS</th>
                <th class="text-center">TINDAKAN</th>
              </tr>
            </thead>
            <tbody>
              ${
                records.length === 0
                  ? `<tr><td colspan="7" class="text-center py-8 text-slate-400 font-medium">Tiada rekod invois bagi tahun ${selectedYear}.</td></tr>`
                  : records
                      .map((r) => {
                        const isOverdue = r.status === "Overdue";
                        return `
                    <tr class="hover:bg-slate-50">
                      <td class="font-bold text-slate-900 font-mono text-xs">${r.invoice_no || r.id}</td>
                      <td class="font-semibold">${r.invoice_date || r.month + " " + (r.year || "2026")}</td>
                      <td class="font-medium text-slate-800 max-w-xs truncate">${r.description || r.programme || "-"}</td>
                      <td class="text-slate-700 font-semibold">${r.client || "Pelanggan / Agensi"}</td>
                      <td class="text-right font-extrabold text-blue-700">${formatCurrency(r.amount)}</td>
                      <td>
                        <span class="status-badge ${STATUS_STYLES[r.status] || STATUS_STYLES.Paid}">
                          ${r.status || "Paid"}
                        </span>
                        ${isOverdue ? `<span class="block text-[10px] text-rose-600 font-extrabold mt-0.5">OVERDUE - TUNGGAKAN</span>` : ""}
                      </td>
                      <td class="text-center">
                        <div class="flex items-center justify-center gap-1">
                          <button class="p-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg border border-blue-200 text-xs font-bold transition flex items-center gap-1" title="Cetak Invois Rasmi" onclick="window.printSingleInvoice('${r.id}')">
                            🖨️ Cetak
                          </button>
                          <button class="p-1.5 hover:bg-slate-100 rounded-lg text-xs" title="Lihat" onclick="window.viewInvoiceRecord('${r.id}')">👁️</button>
                          ${
                            canEdit()
                              ? `
                                <button class="p-1.5 hover:bg-slate-100 rounded-lg text-xs" title="Edit" onclick="window.editInvoiceRecord('${r.id}')">✏️</button>
                                <button class="p-1.5 hover:bg-rose-50 text-rose-600 rounded-lg text-xs" title="Padam" onclick="window.deleteInvoiceRecord('${r.id}')">🗑️</button>
                              `
                              : ""
                          }
                        </div>
                      </td>
                    </tr>
                  `;
                      })
                      .join("")
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

export function openInvoiceFormModal(db, record = null, currentSelectedYear = "2026") {
  const isEdit = !!record;
  const nextNo = `KKSP/700-5/3/2 JLD. 5 (${String((db.invoices || []).length + 1).padStart(2, " ")})`;
  const defaultDate = `15/01/${currentSelectedYear === "ALL" ? "2026" : currentSelectedYear}`;

  renderModal({
    title: isEdit ? `Edit Invois (${record.invoice_no || record.id})` : "Daftar Invois Baharu",
    bodyHtml: `
      <form id="inv-form" class="space-y-4">
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block font-bold text-slate-700 mb-1">No. Invois Rasmi</label>
            <input type="text" id="inv-no" value="${record ? record.invoice_no || record.id : nextNo}" class="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-bold font-mono text-xs" required />
          </div>
          <div>
            <label class="block font-bold text-slate-700 mb-1">Tarikh Invois (DD/MM/YYYY)</label>
            <input type="text" id="inv-date" value="${record ? record.invoice_date || defaultDate : defaultDate}" placeholder="15/01/2026" class="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-semibold" required />
          </div>
        </div>

        <div>
          <label class="block font-bold text-slate-700 mb-1">Tajuk Program / Invois</label>
          <input type="text" id="inv-desc" value="${record ? record.description || record.programme || "" : ""}" placeholder="PROGRAM LATIHAN KHAS AKADEMIK..." class="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-semibold" required />
        </div>

        <div>
          <label class="block font-bold text-slate-700 mb-1">Klien / Bayaran Melalui</label>
          <input type="text" id="inv-client" value="${record ? record.client || "" : ""}" placeholder="MARITIME WATERFRONTS SUITES SDN. BHD." class="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-semibold" required />
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block font-bold text-slate-700 mb-1">Jumlah Harga (RM)</label>
            <input type="number" step="0.01" id="inv-amount" value="${record ? record.amount || "" : ""}" placeholder="1500.00" class="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-bold text-blue-700" required />
          </div>
          <div>
            <label class="block font-bold text-slate-700 mb-1">Status Pembayaran</label>
            <select id="inv-status" class="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-semibold">
              <option value="Paid" ${record && record.status === "Paid" ? "selected" : ""}>Paid (Lunas / Selesai)</option>
              <option value="Issued" ${record && record.status === "Issued" ? "selected" : ""}>Issued (Dikeluarkan)</option>
              <option value="Overdue" ${record && record.status === "Overdue" ? "selected" : ""}>Overdue (Tunggakan)</option>
            </select>
          </div>
        </div>
      </form>
    `,
    footerButtons: [
      { label: "Batal", className: "px-4 py-2 border rounded-lg text-slate-700", onClick: (e, c) => c() },
      {
        label: isEdit ? "Kemaskini" : "Simpan Invois",
        className: "px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold shadow-md",
        onClick: async (e, close) => {
          const form = document.getElementById("inv-form");
          if (!form.checkValidity()) {
            form.reportValidity();
            return;
          }

          const dateVal = document.getElementById("inv-date").value;
          const { year, month } = extractYearAndMonth(dateVal, currentSelectedYear);

          const payload = {
            id: isEdit ? record.id : `INV-${year}-${String((db.invoices || []).length + 1).padStart(4, "0")}`,
            invoice_no: document.getElementById("inv-no").value,
            invoice_date: dateVal,
            month: month,
            year: year,
            programme: document.getElementById("inv-desc").value,
            description: document.getElementById("inv-desc").value,
            client: document.getElementById("inv-client").value,
            amount: parseFloat(document.getElementById("inv-amount").value) || 0,
            status: document.getElementById("inv-status").value,
          };
          if (isEdit) await updateRecord("Invoice", payload);
          else await addRecord("Invoice", payload);
          showToast("✓ Rekod invois berjaya disimpan bagi Tahun " + year);
          close();
          if (window.appRefreshUI) window.appRefreshUI();
          else window.location.reload();
        },
      },
    ],
  });
}

export function attachInvoiceEvents(db, selectedYear = "2026") {
  window.openInvoiceFormModal = (dbRef, rec) => openInvoiceFormModal(dbRef || db, rec, selectedYear);

  const addBtn = document.getElementById("btn-add-invoice");
  if (addBtn) {
    addBtn.onclick = () => openInvoiceFormModal(db, null, selectedYear);
  }

  // Printable Official Invoice Generator Modal
  window.printSingleInvoice = (id) => {
    const rec = (db.invoices || []).find((r) => r.id === id);
    if (!rec) return;

    const orgName = db.settings ? db.settings.organisation_name || "KOLEJ KOMUNITI SUNGAI PETANI" : "KOLEJ KOMUNITI SUNGAI PETANI";
    const invNo = rec.invoice_no || rec.id;
    const invDate = rec.invoice_date || rec.month + " " + (rec.year || "2026");
    const client = rec.client || "MARITIME WATERFRONTS SUITES SDN. BHD.";
    const titleStr = rec.description || rec.programme || "PROGRAM LATIHAN KHAS AKADEMIK AKAUN AMANAH";

    renderModal({
      title: `Cetakan Invois Rasmi - ${invNo}`,
      bodyHtml: `
        <div class="space-y-4">
          <!-- Top Prominent Action Bar -->
          <div class="no-print bg-blue-50 p-3.5 rounded-xl border border-blue-200 flex items-center justify-between gap-3 shadow-sm">
            <div class="flex items-center gap-2 text-blue-900 font-extrabold text-xs">
              <span class="text-lg">🖨️</span>
              <span>Dokumen Invois Rasmi (${invNo}) Sedia Untuk Dicetak</span>
            </div>
            <button onclick="window.print()" class="px-5 py-2 bg-blue-700 hover:bg-blue-800 text-white font-black rounded-xl shadow-md transition flex items-center gap-1.5 text-xs">
              <span>🖨️</span> CETAK INVOIS SEKARANG
            </button>
          </div>

          <div id="single-invoice-print" class="bg-white p-6 sm:p-8 rounded-xl text-slate-900 border border-slate-300 font-sans text-xs space-y-6">
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
                <span class="inline-block bg-blue-100 text-blue-900 font-extrabold text-[11px] px-3 py-1 rounded-md border border-blue-300 uppercase tracking-wider mb-1">
                  INVOIS RASMI
                </span>
                <p class="font-mono text-xs font-extrabold text-slate-900">${invNo}</p>
                <p class="text-slate-600 text-[11px] font-semibold">Tarikh: ${invDate}</p>
              </div>
            </div>

            <!-- Client & Invoice Info Grid -->
            <div class="grid grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-300">
              <div>
                <p class="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">DISEDIAKAN UNTUK / BAYARAN MELALUI:</p>
                <p class="font-extrabold text-slate-900 text-sm">${client}</p>
                <p class="text-[11px] text-slate-600 font-medium mt-0.5">Tuntutan Bayaran Akaun Amanah KKSP</p>
              </div>
              <div class="text-right space-y-1">
                <p class="text-[10px] font-bold text-slate-500 uppercase tracking-wider">STATUS PEMBAYARAN:</p>
                <span class="inline-block font-extrabold text-xs px-2.5 py-1 rounded-md ${STATUS_STYLES[rec.status] || STATUS_STYLES.Paid}">
                  ${rec.status || "Paid"}
                </span>
                <p class="text-[10px] text-slate-500">Bayaran Dalam Tempoh 30 Hari Dari Tarikh Dikeluarkan</p>
              </div>
            </div>

            <!-- Items Table -->
            <div class="border border-slate-300 rounded-lg overflow-hidden">
              <table class="w-full text-left border-collapse">
                <thead>
                  <tr class="bg-slate-900 text-white font-bold border-b border-slate-900 text-xs">
                    <th class="p-3 w-12 border-r border-slate-800 text-center">BIL</th>
                    <th class="p-3 border-r border-slate-800">KETERANGAN / PROGRAM / TUNTUTAN</th>
                    <th class="p-3 w-28 text-right">JUMLAH (RM)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-white">
                    <td class="p-3 border-r border-slate-200 text-center font-mono font-bold">1</td>
                    <td class="p-3 border-r border-slate-200">
                      <p class="font-bold text-slate-900 text-xs">${titleStr}</p>
                      <p class="text-[11px] text-slate-500 mt-1 leading-relaxed">Tuntutan invois bayaran rasmi bagi perkhidmatan dan pengendalian Akaun Amanah Kolej Komuniti Sungai Petani.</p>
                    </td>
                    <td class="p-3 text-right font-extrabold text-blue-900 text-sm">${formatCurrency(rec.amount)}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Total Summary Box -->
            <div class="flex justify-end pt-2">
              <div class="w-72 bg-blue-50 p-4 rounded-xl border-2 border-blue-700 text-right shadow-sm">
                <p class="text-xs font-bold text-blue-900">JUMLAH KESELURUHAN INVOIS:</p>
                <p class="text-2xl font-black text-blue-900 mt-0.5">${formatCurrency(rec.amount)}</p>
              </div>
            </div>

            <!-- Authorization & Signatures Section -->
            <div class="pt-6 border-t border-slate-300 grid grid-cols-2 gap-8 text-xs">
              <div class="space-y-12">
                <div>
                  <p class="font-bold text-slate-800">DISEDIAKAN OLEH (SETIAUSAHA / BENDAHARI):</p>
                  <div class="sig-line border-b-2 border-slate-900 h-16 w-48 mt-2"></div>
                  <p class="font-bold text-slate-900 mt-2">NAMA: .....................................................</p>
                  <p class="text-slate-600 text-[11px]">Jawapan / Unit Akaun Amanah KKSP</p>
                  <p class="text-slate-600 text-[11px]">Tarikh: ${invDate}</p>
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
          label: "🖨️ Cetak Invois Sekarang",
          className: "px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-xl font-black shadow-lg transition flex items-center gap-1.5",
          onClick: () => window.print(),
        },
      ],
    });
  };

  window.viewInvoiceRecord = (id) => {
    window.printSingleInvoice(id);
  };

  window.editInvoiceRecord = (id) => {
    const rec = (db.invoices || []).find((r) => r.id === id);
    if (rec) openInvoiceFormModal(db, rec, selectedYear);
  };

  window.deleteInvoiceRecord = (id) => {
    const rec = (db.invoices || []).find((r) => r.id === id);
    if (!rec) return;
    showDeleteConfirmation({
      recordId: rec.id,
      description: rec.description || rec.programme,
      amount: formatCurrency(rec.amount),
      onConfirm: async () => {
        await deleteRecord("Invoice", rec.id);
        showToast("✓ Rekod invois dipadam");
        if (window.appRefreshUI) window.appRefreshUI();
        else window.location.reload();
      },
    });
  };
}
