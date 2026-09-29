// Income Module View Component with Dynamic Year & Month Auto-Detection
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

export function renderIncomeView(db, selectedYear) {
  let records = (db.incomes || []).filter((r) => r.record_status !== "DELETED");
  if (selectedYear !== "ALL") {
    records = records.filter((r) => r.year === selectedYear || (!r.year && selectedYear === "2025"));
  }

  const totalIncome = records.reduce((acc, curr) => acc + (Number(curr.amount) || 0), 0);

  return `
    <div class="space-y-6 animate-fade-in pb-10">
      <!-- Header Bar -->
      <div class="flex flex-wrap items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div>
          <h2 class="text-2xl font-extrabold text-slate-900 tracking-tight">MODUL PENDAPATAN & TERIMAAN (RESIT)</h2>
          <p class="text-xs font-medium text-slate-500 mt-1">Pengurusan Rekod Terimaan Yuran, Program & Sumbangan (${selectedYear === "ALL" ? "Semua Tahun" : "Tahun " + selectedYear})</p>
        </div>
        <div class="flex items-center gap-3">
          <span class="text-sm font-bold text-slate-700 bg-emerald-50 px-4 py-2 rounded-xl border border-emerald-200">
            Jumlah Terimaan: <span class="text-emerald-700 font-black">${formatCurrency(totalIncome)}</span>
          </span>
          ${
            canEdit()
              ? `<button id="btn-add-income" class="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-sm transition">
                  + Tambah Pendapatan
                </button>`
              : ""
          }
        </div>
      </div>

      <!-- Data Table Container -->
      <div class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div class="overflow-x-auto">
          <table class="inst-table">
            <thead>
              <tr>
                <th>NO. ID</th>
                <th>UNIT</th>
                <th>TARIKH</th>
                <th>BULAN</th>
                <th>TAJUK / KOD PROGRAM</th>
                <th>PEMBAYAR</th>
                <th>NO. RESIT</th>
                <th class="text-right">JUMLAH (RM)</th>
                <th>STATUS</th>
                <th class="text-center">TINDAKAN</th>
              </tr>
            </thead>
            <tbody>
              ${
                records.length === 0
                  ? `<tr><td colspan="10" class="text-center py-8 text-slate-400 font-medium">Tiada rekod pendapatan bagi tahun ${selectedYear}.</td></tr>`
                  : records
                      .map(
                        (r) => `
                    <tr class="hover:bg-slate-50">
                      <td class="font-bold text-slate-900 font-mono">${r.id}</td>
                      <td><span class="px-2.5 py-1 bg-blue-50 text-blue-800 font-extrabold rounded-lg text-xs border border-blue-200">${r.unit || "PSH"}</span></td>
                      <td class="font-semibold">${r.date || r.month + " " + (r.year || "2026")}</td>
                      <td><span class="px-2 py-0.5 bg-slate-100 text-slate-700 font-extrabold rounded-md text-[11px]">${r.month || "JAN"}</span></td>
                      <td class="font-semibold text-slate-800 max-w-xs truncate">${r.programme}</td>
                      <td class="text-slate-700 font-medium">${r.payer || "Peserta"}</td>
                      <td class="font-mono text-xs text-slate-500">${r.receipt_no || "-"}</td>
                      <td class="text-right font-extrabold text-emerald-700">${formatCurrency(r.amount)}</td>
                      <td>
                        <span class="status-badge ${STATUS_STYLES[r.status] || STATUS_STYLES.Paid}">
                          ${r.status || "Paid"}
                        </span>
                      </td>
                      <td class="text-center">
                        <div class="flex items-center justify-center gap-1">
                          <button class="p-1.5 hover:bg-slate-100 rounded-lg text-xs" title="Lihat" onclick="window.viewIncomeRecord('${r.id}')">👁️</button>
                          ${
                            canEdit()
                              ? `
                                <button class="p-1.5 hover:bg-slate-100 rounded-lg text-xs" title="Edit" onclick="window.editIncomeRecord('${r.id}')">✏️</button>
                                <button class="p-1.5 hover:bg-rose-50 text-rose-600 rounded-lg text-xs" title="Padam" onclick="window.deleteIncomeRecord('${r.id}')">🗑️</button>
                              `
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

export function openIncomeFormModal(db, record = null, currentSelectedYear = "2026") {
  const isEdit = !!record;
  const modalTitle = isEdit ? `Kemaskini Rekod Pendapatan (${record.id})` : "Tambah Rekod Pendapatan Baru";

  const standardUnits = ["PSH", "RUC", "HEP"];
  const currentUnit = record ? record.unit || "PSH" : "PSH";
  const isCustomUnit = record && record.unit && !standardUnits.includes(record.unit);
  const defaultDate = record ? record.date || "" : `15/01/${currentSelectedYear === "ALL" ? "2026" : currentSelectedYear}`;

  renderModal({
    title: modalTitle,
    bodyHtml: `
      <form id="income-form" class="space-y-4 text-xs">
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block font-bold text-slate-700 mb-1">Pilihan Unit</label>
            <select id="inc-unit" class="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-semibold focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600" onchange="window.handleIncomeUnitChange(this.value)">
              <option value="PSH" ${currentUnit === "PSH" ? "selected" : ""}>PSH</option>
              <option value="RUC" ${currentUnit === "RUC" ? "selected" : ""}>RUC</option>
              <option value="HEP" ${currentUnit === "HEP" ? "selected" : ""}>HEP</option>
              <option value="Lain-lain" ${isCustomUnit ? "selected" : ""}>Lain-lain</option>
            </select>
          </div>
          <div id="inc-unit-custom-box" class="${isCustomUnit ? "" : "hidden"}">
            <label class="block font-bold text-slate-700 mb-1">Nyatakan Unit (Lain-lain)</label>
            <input type="text" id="inc-unit-custom" value="${isCustomUnit ? currentUnit : ""}" placeholder="Contoh: Unit Sukan / TVET" class="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-semibold focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600" />
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block font-bold text-slate-700 mb-1">Tarikh (DD/MM/YYYY)</label>
            <input type="text" id="inc-date" value="${defaultDate}" placeholder="15/01/2026" class="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-semibold focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600" required />
          </div>
          <div>
            <label class="block font-bold text-slate-700 mb-1">Bulan</label>
            <select id="inc-month" class="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-semibold focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600">
              ${["JAN", "FEB", "MAC", "APR", "MEI", "JUN", "JUL", "OGOS", "SEPT", "OKT", "NOV", "DIS"]
                .map((m) => `<option value="${m}" ${record && record.month === m ? "selected" : ""}>${m}</option>`)
                .join("")}
            </select>
          </div>
        </div>

        <div>
          <label class="block font-bold text-slate-700 mb-1">Tajuk Program / Kod Program</label>
          <input type="text" id="inc-programme" value="${record ? record.programme || "" : ""}" placeholder="Terimaan Yuran Program / Kod P1001" class="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-semibold focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600" required />
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block font-bold text-slate-700 mb-1">Pembayar / Pelanggan</label>
            <input type="text" id="inc-payer" value="${record ? record.payer || "" : ""}" placeholder="Peserta / Agensi" class="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-semibold focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600" />
          </div>
          <div>
            <label class="block font-bold text-slate-700 mb-1">No. Resit / Rujukan</label>
            <input type="text" id="inc-receipt" value="${record ? record.receipt_no || "" : ""}" placeholder="Terimaan R300001" class="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-semibold focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600" />
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block font-bold text-slate-700 mb-1">Jumlah (RM)</label>
            <input type="number" step="0.01" id="inc-amount" value="${record ? record.amount || "" : ""}" placeholder="450.00" class="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-bold text-emerald-700 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600" required />
          </div>
          <div>
            <label class="block font-bold text-slate-700 mb-1">Status Bayaran</label>
            <select id="inc-status" class="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-semibold focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600">
              <option value="Paid" ${record && record.status === "Paid" ? "selected" : ""}>Paid (Selesai)</option>
              <option value="Pending" ${record && record.status === "Pending" ? "selected" : ""}>Pending</option>
            </select>
          </div>
        </div>
      </form>
    `,
    footerButtons: [
      {
        label: "Batal",
        className: "px-4 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 font-semibold",
        onClick: (e, close) => close(),
      },
      {
        label: isEdit ? "Kemaskini Rekod" : "Simpan Pendapatan",
        className: "px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 font-semibold shadow-md",
        onClick: async (e, close) => {
          const form = document.getElementById("income-form");
          if (!form.checkValidity()) {
            form.reportValidity();
            return;
          }

          const unitSelect = document.getElementById("inc-unit").value;
          const customUnitInput = document.getElementById("inc-unit-custom") ? document.getElementById("inc-unit-custom").value.trim() : "";
          const finalUnit = unitSelect === "Lain-lain" ? (customUnitInput || "Lain-lain") : unitSelect;

          const dateVal = document.getElementById("inc-date").value;
          const { year, month } = extractYearAndMonth(dateVal, currentSelectedYear);

          const payload = {
            id: isEdit ? record.id : `INC-${year}-${String((db.incomes || []).length + 1).padStart(4, "0")}`,
            unit: finalUnit,
            date: dateVal,
            month: document.getElementById("inc-month").value || month,
            year: year,
            programme: document.getElementById("inc-programme").value,
            payer: document.getElementById("inc-payer").value,
            receipt_no: document.getElementById("inc-receipt").value,
            amount: parseFloat(document.getElementById("inc-amount").value) || 0,
            status: document.getElementById("inc-status").value,
          };

          if (isEdit) await updateRecord("Income", payload);
          else await addRecord("Income", payload);

          showToast(isEdit ? "✓ Rekod pendapatan dikemaskini" : "✓ Rekod pendapatan berjaya ditambah bagi Tahun " + year);
          close();
          if (window.appRefreshUI) window.appRefreshUI();
          else window.location.reload();
        },
      },
    ],
  });
}

export function attachIncomeEvents(db, selectedYear = "2026") {
  window.openIncomeFormModal = (dbRef, rec) => openIncomeFormModal(dbRef || db, rec, selectedYear);

  window.handleIncomeUnitChange = (val) => {
    const customBox = document.getElementById("inc-unit-custom-box");
    if (customBox) {
      if (val === "Lain-lain") customBox.classList.remove("hidden");
      else customBox.classList.add("hidden");
    }
  };

  const addBtn = document.getElementById("btn-add-income");
  if (addBtn) {
    addBtn.onclick = () => openIncomeFormModal(db, null, selectedYear);
  }

  window.viewIncomeRecord = (id) => {
    const rec = (db.incomes || []).find((r) => r.id === id);
    if (!rec) return;
    renderModal({
      title: `Butiran Pendapatan - ${rec.id}`,
      bodyHtml: `
        <div class="space-y-3 text-xs">
          <div class="grid grid-cols-2 gap-4 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
            <div><span class="font-bold text-slate-500">ID Pendapatan:</span> <span class="font-bold text-slate-900">${rec.id}</span></div>
            <div><span class="font-bold text-slate-500">Unit:</span> <span class="font-bold text-blue-700">${rec.unit || "PSH"}</span></div>
            <div><span class="font-bold text-slate-500">Tarikh:</span> ${rec.date || rec.month}</div>
            <div><span class="font-bold text-slate-500">No. Resit:</span> ${rec.receipt_no || "-"}</div>
          </div>
          <div><span class="font-bold text-slate-500">Tajuk Program:</span> <p class="text-sm font-bold text-slate-900 mt-0.5">${rec.programme}</p></div>
          <div class="pt-2 border-t border-slate-200 flex justify-between items-center">
            <span class="font-bold text-slate-700">Jumlah Terimaan:</span>
            <span class="text-lg font-black text-emerald-700">${formatCurrency(rec.amount)}</span>
          </div>
        </div>
      `,
      footerButtons: [{ label: "Tutup", className: "px-4 py-2 border rounded-lg text-slate-700", onClick: (e, c) => c() }],
    });
  };

  window.editIncomeRecord = (id) => {
    const rec = (db.incomes || []).find((r) => r.id === id);
    if (rec) openIncomeFormModal(db, rec, selectedYear);
  };

  window.deleteIncomeRecord = (id) => {
    const rec = (db.incomes || []).find((r) => r.id === id);
    if (!rec) return;
    showDeleteConfirmation({
      recordId: rec.id,
      description: rec.programme,
      amount: formatCurrency(rec.amount),
      onConfirm: async () => {
        await deleteRecord("Income", rec.id);
        showToast("✓ Rekod pendapatan dipadam");
        if (window.appRefreshUI) window.appRefreshUI();
        else window.location.reload();
      },
    });
  };
}
