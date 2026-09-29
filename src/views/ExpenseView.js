// Expense & Procurement Module View Component with Dynamic Year & Month Auto-Detection
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

export function renderExpenseView(db, selectedYear) {
  let records = (db.expenses || []).filter((r) => r.record_status !== "DELETED");
  if (selectedYear !== "ALL") {
    records = records.filter((r) => r.year === selectedYear || (!r.year && selectedYear === "2025"));
  }

  const totalExpense = records.reduce((acc, curr) => acc + (Number(curr.amount) || 0), 0);

  return `
    <div class="space-y-6 animate-fade-in pb-10">
      <!-- Header Bar -->
      <div class="flex flex-wrap items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div>
          <h2 class="text-2xl font-extrabold text-slate-900 tracking-tight">MODUL PERBELANJAAN & PEROLEHAN</h2>
          <p class="text-xs font-medium text-slate-500 mt-1">Pengurusan Baucer Bayaran, Pembekal & Pesanan Kerajaan (PO) (${selectedYear === "ALL" ? "Semua Tahun" : "Tahun " + selectedYear})</p>
        </div>
        <div class="flex items-center gap-3">
          <span class="text-sm font-bold text-slate-700 bg-rose-50 px-4 py-2 rounded-xl border border-rose-200">
            Jumlah Perbelanjaan: <span class="text-rose-700 font-black">${formatCurrency(totalExpense)}</span>
          </span>
          ${
            canEdit()
              ? `<button id="btn-add-expense" class="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold shadow-sm transition">
                  + Tambah Perbelanjaan
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
                <th>TARIKH</th>
                <th>BULAN</th>
                <th>KETERANGAN PEROLEHAN / BARANGAN</th>
                <th>PEMBEKAL</th>
                <th>NO. PO / PESANAN</th>
                <th class="text-right">JUMLAH (RM)</th>
                <th>STATUS</th>
                <th class="text-center">TINDAKAN</th>
              </tr>
            </thead>
            <tbody>
              ${
                records.length === 0
                  ? `<tr><td colspan="9" class="text-center py-8 text-slate-400 font-medium">Tiada rekod perbelanjaan bagi tahun ${selectedYear}.</td></tr>`
                  : records
                      .map(
                        (r) => `
                    <tr class="hover:bg-slate-50">
                      <td class="font-bold text-slate-900 font-mono">${r.id}</td>
                      <td class="font-semibold">${r.date || r.month + " " + (r.year || "2026")}</td>
                      <td><span class="px-2 py-0.5 bg-slate-100 text-slate-700 font-extrabold rounded-md text-[11px]">${r.month || "JAN"}</span></td>
                      <td class="font-semibold text-slate-800 max-w-xs truncate">${r.description}</td>
                      <td class="text-slate-700 font-medium">${r.supplier || "Pembekal"}</td>
                      <td class="font-mono text-xs text-slate-600">${r.po_no || "-"}</td>
                      <td class="text-right font-extrabold text-rose-700">${formatCurrency(r.amount)}</td>
                      <td>
                        <span class="status-badge ${STATUS_STYLES[r.payment_status] || STATUS_STYLES.Paid}">
                          ${r.payment_status || "Paid"}
                        </span>
                      </td>
                      <td class="text-center">
                        <div class="flex items-center justify-center gap-1">
                          <button class="p-1.5 hover:bg-slate-100 rounded-lg text-xs" title="Lihat" onclick="window.viewExpenseRecord('${r.id}')">👁️</button>
                          ${
                            canEdit()
                              ? `
                                <button class="p-1.5 hover:bg-slate-100 rounded-lg text-xs" title="Edit" onclick="window.editExpenseRecord('${r.id}')">✏️</button>
                                <button class="p-1.5 hover:bg-rose-50 text-rose-600 rounded-lg text-xs" title="Padam" onclick="window.deleteExpenseRecord('${r.id}')">🗑️</button>
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

export function openExpenseFormModal(db, record = null, currentSelectedYear = "2026") {
  const isEdit = !!record;
  const defaultDate = record ? record.date || "" : `15/01/${currentSelectedYear === "ALL" ? "2026" : currentSelectedYear}`;

  renderModal({
    title: isEdit ? `Kemaskini Perbelanjaan (${record.id})` : "Tambah Perbelanjaan Baru",
    bodyHtml: `
      <form id="expense-form" class="space-y-4 text-xs">
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block font-bold text-slate-700 mb-1">Tarikh (DD/MM/YYYY)</label>
            <input type="text" id="exp-date" value="${defaultDate}" placeholder="15/01/2026" class="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-semibold" required />
          </div>
          <div>
            <label class="block font-bold text-slate-700 mb-1">Bulan</label>
            <select id="exp-month" class="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-semibold">
              ${["JAN", "FEB", "MAC", "APR", "MEI", "JUN", "JUL", "OGOS", "SEPT", "OKT", "NOV", "DIS"]
                .map((m) => `<option value="${m}" ${record && record.month === m ? "selected" : ""}>${m}</option>`)
                .join("")}
            </select>
          </div>
        </div>

        <div>
          <label class="block font-bold text-slate-700 mb-1">Keterangan Perolehan / Barangan</label>
          <input type="text" id="exp-desc" value="${record ? record.description || "" : ""}" placeholder="Pembelian Bahan Mentah / Peralatan..." class="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-semibold" required />
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block font-bold text-slate-700 mb-1">Nama Pembekal</label>
            <input type="text" id="exp-supplier" value="${record ? record.supplier || "" : ""}" placeholder="NZ Antares Enterprise" class="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-semibold" />
          </div>
          <div>
            <label class="block font-bold text-slate-700 mb-1">No. PO / Pesanan Kerajaan</label>
            <input type="text" id="exp-po" value="${record ? record.po_no || "" : ""}" placeholder="PO25000000..." class="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-semibold" />
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block font-bold text-slate-700 mb-1">Jumlah Perbelanjaan (RM)</label>
            <input type="number" step="0.01" id="exp-amount" value="${record ? record.amount || "" : ""}" placeholder="2000.00" class="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-bold text-rose-700" required />
          </div>
          <div>
            <label class="block font-bold text-slate-700 mb-1">Status Pembayaran</label>
            <select id="exp-status" class="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-semibold">
              <option value="Paid" ${record && record.payment_status === "Paid" ? "selected" : ""}>Paid (Telah Dibayar)</option>
              <option value="Pending" ${record && record.payment_status === "Pending" ? "selected" : ""}>Pending (Dalam Proses)</option>
            </select>
          </div>
        </div>
      </form>
    `,
    footerButtons: [
      { label: "Batal", className: "px-4 py-2 border rounded-lg text-slate-700", onClick: (e, c) => c() },
      {
        label: isEdit ? "Kemaskini Rekod" : "Simpan Perbelanjaan",
        className: "px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-lg font-semibold shadow-md",
        onClick: async (e, close) => {
          const form = document.getElementById("expense-form");
          if (!form.checkValidity()) {
            form.reportValidity();
            return;
          }

          const dateVal = document.getElementById("exp-date").value;
          const { year, month } = extractYearAndMonth(dateVal, currentSelectedYear);

          const payload = {
            id: isEdit ? record.id : `EXP-${year}-${String((db.expenses || []).length + 1).padStart(4, "0")}`,
            date: dateVal,
            month: document.getElementById("exp-month").value || month,
            year: year,
            description: document.getElementById("exp-desc").value,
            supplier: document.getElementById("exp-supplier").value,
            po_no: document.getElementById("exp-po").value,
            amount: parseFloat(document.getElementById("exp-amount").value) || 0,
            payment_status: document.getElementById("exp-status").value,
          };

          if (isEdit) await updateRecord("Expense", payload);
          else await addRecord("Expense", payload);

          showToast(isEdit ? "✓ Rekod perbelanjaan dikemaskini" : "✓ Rekod perbelanjaan berjaya disimpan bagi Tahun " + year);
          close();
          if (window.appRefreshUI) window.appRefreshUI();
          else window.location.reload();
        },
      },
    ],
  });
}

export function attachExpenseEvents(db, selectedYear = "2026") {
  window.openExpenseFormModal = (dbRef, rec) => openExpenseFormModal(dbRef || db, rec, selectedYear);

  const addBtn = document.getElementById("btn-add-expense");
  if (addBtn) {
    addBtn.onclick = () => openExpenseFormModal(db, null, selectedYear);
  }

  window.viewExpenseRecord = (id) => {
    const rec = (db.expenses || []).find((r) => r.id === id);
    if (!rec) return;
    renderModal({
      title: `Butiran Perbelanjaan - ${rec.id}`,
      bodyHtml: `
        <div class="space-y-3 text-xs">
          <div class="grid grid-cols-2 gap-4 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
            <div><span class="font-bold text-slate-500">ID Perbelanjaan:</span> <span class="font-bold text-slate-900">${rec.id}</span></div>
            <div><span class="font-bold text-slate-500">Tarikh:</span> ${rec.date || rec.month}</div>
            <div><span class="font-bold text-slate-500">Pembekal:</span> ${rec.supplier || "-"}</div>
            <div><span class="font-bold text-slate-500">No. PO:</span> ${rec.po_no || "-"}</div>
          </div>
          <div><span class="font-bold text-slate-500">Keterangan:</span> <p class="text-sm font-bold text-slate-900 mt-0.5">${rec.description}</p></div>
          <div class="pt-2 border-t border-slate-200 flex justify-between items-center">
            <span class="font-bold text-slate-700">Jumlah Perbelanjaan:</span>
            <span class="text-lg font-black text-rose-700">${formatCurrency(rec.amount)}</span>
          </div>
        </div>
      `,
      footerButtons: [{ label: "Tutup", className: "px-4 py-2 border rounded-lg text-slate-700", onClick: (e, c) => c() }],
    });
  };

  window.editExpenseRecord = (id) => {
    const rec = (db.expenses || []).find((r) => r.id === id);
    if (rec) openExpenseFormModal(db, rec, selectedYear);
  };

  window.deleteExpenseRecord = (id) => {
    const rec = (db.expenses || []).find((r) => r.id === id);
    if (!rec) return;
    showDeleteConfirmation({
      recordId: rec.id,
      description: rec.description,
      amount: formatCurrency(rec.amount),
      onConfirm: async () => {
        await deleteRecord("Expense", rec.id);
        showToast("✓ Rekod perbelanjaan dipadam");
        if (window.appRefreshUI) window.appRefreshUI();
        else window.location.reload();
      },
    });
  };
}
