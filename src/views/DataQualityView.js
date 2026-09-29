// Dedicated Data Quality & Validation View Component
import { scanDataQuality } from "../services/dataQuality.js";
import { formatCurrency } from "../data/schema.js";
import { updateRecord } from "../services/api.js";
import { showToast } from "../components/Toast.js";
import { renderModal } from "../components/Modal.js";

export function renderDataQualityView(db) {
  const scan = scanDataQuality(db);

  return `
    <div class="space-y-6 animate-fade-in pb-10">
      <!-- Header -->
      <div class="flex items-center justify-between bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div>
          <h2 class="text-2xl font-extrabold text-slate-900 tracking-tight">KUALITI DATA & PENGESAHAN INTEGRITI (DATA QUALITY)</h2>
          <p class="text-xs font-medium text-slate-500 mt-1">Pengesan Rekod Tidak Lengkap, Tindanan (Duplicates) & Perbezaan Baki Stok</p>
        </div>
        <div class="px-4 py-2 rounded-xl text-xs font-bold ${
          scan.totalIssues > 0 ? "bg-rose-100 text-rose-800 border border-rose-300" : "bg-emerald-100 text-emerald-800 border border-emerald-300"
        }">
          ${scan.totalIssues > 0 ? `⚠ ${scan.totalIssues} ISU DIKESAN` : "✓ DATA BERSIH & SELARI"}
        </div>
      </div>

      <!-- Overview Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <div class="flex items-center justify-between text-amber-600">
            <span class="text-xs font-bold uppercase">Rekod Tidak Lengkap</span>
            <span class="p-2 rounded-xl bg-amber-50 text-amber-600">📝</span>
          </div>
          <h4 class="text-2xl font-extrabold text-slate-900 mt-2">
            ${scan.incompleteExpenses.length + scan.incompleteIncomes.length + scan.incompleteClaims.length + scan.incompleteInvoices.length + scan.incompleteQuotations.length}
          </h4>
          <p class="text-xs text-slate-500 mt-1">Terutama perbelanjaan tanpa tarikh/pembekal</p>
        </div>

        <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <div class="flex items-center justify-between text-blue-600">
            <span class="text-xs font-bold uppercase">Potensi Rekod Tindanan</span>
            <span class="p-2 rounded-xl bg-blue-50 text-blue-600">👯</span>
          </div>
          <h4 class="text-2xl font-extrabold text-slate-900 mt-2">${scan.potentialDuplicates.length}</h4>
          <p class="text-xs text-slate-500 mt-1">Padanan tarikh, pembekal & jumlah yang sama</p>
        </div>

        <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <div class="flex items-center justify-between text-rose-600">
            <span class="text-xs font-bold uppercase">Perbezaan Kirauan Stok</span>
            <span class="p-2 rounded-xl bg-rose-50 text-rose-600">⚖️</span>
          </div>
          <h4 class="text-2xl font-extrabold text-slate-900 mt-2">${scan.stockDiscrepancies.length}</h4>
          <p class="text-xs text-slate-500 mt-1">Expected Bal (Rx-Tx) vs Recorded Bal</p>
        </div>
      </div>

      <!-- Section 1: Incomplete Expenses Table -->
      <div class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div class="p-4 bg-slate-900 text-white font-bold text-sm flex items-center justify-between">
          <span>1. Rekod Perbelanjaan Tidak Lengkap (${scan.incompleteExpenses.length})</span>
          <span class="text-xs font-normal text-slate-400">Klik "Betulkan Data" untuk mengemaskini</span>
        </div>
        <div class="overflow-x-auto">
          <table class="inst-table">
            <thead>
              <tr>
                <th>ID REKOD</th>
                <th>KETERANGAN ORIGINAL</th>
                <th>JUMLAH (RM)</th>
                <th>MEDAN TERKIKIS / MISSING</th>
                <th class="text-center">TINDAKAN QUICK FIX</th>
              </tr>
            </thead>
            <tbody>
              ${
                scan.incompleteExpenses.length === 0
                  ? `<tr><td colspan="5" class="text-center py-6 text-slate-400 font-medium">✓ Tiada perbelanjaan bermasalah.</td></tr>`
                  : scan.incompleteExpenses
                      .map(
                        (item) => `
                    <tr class="hover:bg-amber-50/50">
                      <td class="font-bold text-slate-900">${item.id}</td>
                      <td class="font-medium text-slate-800">${item.description}</td>
                      <td class="font-bold text-rose-700">${formatCurrency(item.amount)}</td>
                      <td>
                        <div class="flex flex-wrap gap-1">
                          ${item.missingFields
                            .map((f) => `<span class="px-2 py-0.5 rounded bg-amber-100 text-amber-800 text-[10px] font-bold">${f}</span>`)
                            .join("")}
                        </div>
                      </td>
                      <td class="text-center">
                        <button class="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold shadow-sm" onclick="window.fixExpenseQuality('${item.id}')">
                          ✏️ Betulkan Data
                        </button>
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

      <!-- Section 2: Stock Calculation Discrepancies -->
      <div class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div class="p-4 bg-slate-900 text-white font-bold text-sm flex items-center justify-between">
          <span>2. Perbezaan Pengiraan Stok / Stock Discrepancies (${scan.stockDiscrepancies.length})</span>
          <span class="text-xs font-normal text-slate-400">Penyelarasan Baku (Keluaran vs Rekod Asal)</span>
        </div>
        <div class="overflow-x-auto">
          <table class="inst-table">
            <thead>
              <tr>
                <th>ID STOK</th>
                <th>ITEM STOK</th>
                <th class="text-right">TERIMA (RX)</th>
                <th class="text-right">KELUAR (TX)</th>
                <th class="text-right">EXPECTED (RX-TX)</th>
                <th class="text-right">REKOD ASAL SHEET</th>
                <th class="text-right">BEZA (DIFF)</th>
                <th class="text-center">TINDAKAN</th>
              </tr>
            </thead>
            <tbody>
              ${
                scan.stockDiscrepancies.length === 0
                  ? `<tr><td colspan="8" class="text-center py-6 text-slate-400 font-medium">✓ Baki matematik stok 100% selari.</td></tr>`
                  : scan.stockDiscrepancies
                      .map(
                        (stk) => `
                    <tr class="hover:bg-rose-50/50">
                      <td class="font-bold text-slate-900">${stk.id}</td>
                      <td class="font-semibold text-slate-800">${stk.item}</td>
                      <td class="text-right">${stk.received_qty}</td>
                      <td class="text-right text-rose-600">${stk.issued_qty}</td>
                      <td class="text-right font-extrabold text-blue-700">${stk.calculatedBalance}</td>
                      <td class="text-right font-extrabold text-amber-700">${stk.recordedBalance}</td>
                      <td class="text-right font-extrabold text-rose-600">${stk.diff > 0 ? "+" : ""}${stk.diff}</td>
                      <td class="text-center">
                        <button class="px-3 py-1.5 bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-xs font-bold" onclick="window.reconcileStockItem('${stk.id}')">
                          ⚖️ Laras Baki
                        </button>
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

export function attachDataQualityEvents(db) {
  window.fixExpenseQuality = (id) => {
    const rec = (db.expenses || []).find((r) => r.id === id);
    if (rec && window.openExpenseFormModal) {
      window.openExpenseFormModal(db, rec);
    }
  };

  window.reconcileStockItem = async (id) => {
    const stk = (db.stock || []).find((r) => r.id === id);
    if (!stk) return;

    const rx = Number(stk.received_qty || 0);
    const tx = Number(stk.issued_qty || 0);
    const calcBal = rx - tx;

    stk.recorded_balance = calcBal;
    stk.expected_balance = calcBal;

    await updateRecord("Stock", stk);
    showToast(`✓ Baki stok bagi ${stk.item} diselaras kepada ${calcBal}`);
    window.location.reload();
  };
}
