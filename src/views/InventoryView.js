// Pengurusan Stok (Inventory) Module View
import { formatCurrency, STATUS_STYLES } from "../data/schema.js";
import { renderModal, showDeleteConfirmation } from "../components/Modal.js";
import { addRecord, updateRecord, deleteRecord } from "../services/api.js";
import { showToast } from "../components/Toast.js";
import { canEdit } from "../services/auth.js";

export function renderInventoryView(db, selectedYear, currentTab = "SUMMARY") {
  const stockList = (db.stock || []).filter((r) => r.record_status !== "DELETED");

  // Build stock item summary map
  const summaryMap = {};
  stockList.forEach((stk) => {
    const item = stk.item;
    if (!summaryMap[item]) {
      summaryMap[item] = {
        item: item,
        unit: stk.unit || "PEK / KG",
        supplier: stk.supplier || "-",
        po_no: stk.po_no || "-",
        rx_qty: 0,
        tx_qty: 0,
        unit_price: stk.unit_price || 0,
        recorded_bal: 0,
      };
    }
    summaryMap[item].rx_qty += Number(stk.received_qty || 0);
    summaryMap[item].tx_qty += Number(stk.issued_qty || 0);
    summaryMap[item].recorded_bal = Number(stk.recorded_balance || 0);
    if (stk.unit_price > 0) summaryMap[item].unit_price = stk.unit_price;
  });

  const summaryItems = Object.values(summaryMap);

  return `
    <div class="space-y-6 animate-fade-in pb-10">
      <!-- Header -->
      <div class="flex flex-wrap items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div>
          <h2 class="text-2xl font-extrabold text-slate-900 tracking-tight">MODUL PENGURUSAN STOK (KEW.PS-3)</h2>
          <p class="text-xs font-medium text-slate-500 mt-1">Daftar Stok Stor Utama & Pergerakan Penerimaan/Keluaran</p>
        </div>
        <div class="flex items-center gap-3">
          <div class="flex bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs font-bold">
            <button id="tab-stock-summary" class="px-3 py-1.5 rounded-lg ${currentTab === "SUMMARY" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-900"}">
              📊 Ringkasan Stok
            </button>
            <button id="tab-stock-movement" class="px-3 py-1.5 rounded-lg ${currentTab === "MOVEMENT" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-900"}">
              📜 Log Pergerakan Stok (${stockList.length})
            </button>
          </div>
          ${
            canEdit()
              ? `<button id="btn-add-stock" class="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-xs font-bold shadow-sm transition">
                  + Transaksi Stok
                </button>`
              : ""
          }
        </div>
      </div>

      <!-- Tab 1: STOCK SUMMARY VIEW -->
      ${
        currentTab === "SUMMARY"
          ? `
        <div class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div class="overflow-x-auto">
            <table class="inst-table">
              <thead>
                <tr>
                  <th>PERIHAL ITEM STOK</th>
                  <th>PO NO. & PEMBEKAL</th>
                  <th class="text-right">TERIMAAN (QTY)</th>
                  <th class="text-right">KELUARAN (QTY)</th>
                  <th class="text-right">BAKI KIRAN (QTY)</th>
                  <th class="text-right">HARGA SEUNIT (RM)</th>
                  <th class="text-right">NILAI BAKI (RM)</th>
                  <th>STATUS STOK</th>
                </tr>
              </thead>
              <tbody>
                ${
                  summaryItems.length === 0
                    ? `<tr><td colspan="8" class="text-center py-8 text-slate-400 font-medium">Tiada item stok.</td></tr>`
                    : summaryItems
                        .map((item) => {
                          const balQty = item.rx_qty - item.tx_qty;
                          const balVal = balQty * item.unit_price;
                          let statusText = "Healthy";
                          if (balQty === 0) statusText = "Out of Stock";
                          else if (balQty < 5) statusText = "Low Stock";

                          return `
                      <tr class="hover:bg-slate-50">
                        <td class="font-bold text-slate-900">${item.item}</td>
                        <td class="text-xs text-slate-500">${item.po_no}<br/><span class="text-slate-700 font-semibold">${item.supplier}</span></td>
                        <td class="text-right font-semibold text-emerald-700">${item.rx_qty}</td>
                        <td class="text-right font-semibold text-rose-700">${item.tx_qty}</td>
                        <td class="text-right font-extrabold text-slate-900 ${balQty === 0 ? "text-rose-600" : ""}">${balQty} ${item.unit}</td>
                        <td class="text-right text-slate-600">${formatCurrency(item.unit_price)}</td>
                        <td class="text-right font-extrabold text-teal-700">${formatCurrency(balVal)}</td>
                        <td>
                          <span class="status-badge ${STATUS_STYLES[statusText] || STATUS_STYLES.Healthy}">
                            ${statusText}
                          </span>
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
      `
          : `
        <!-- Tab 2: STOCK MOVEMENT LOG -->
        <div class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div class="overflow-x-auto">
            <table class="inst-table">
              <thead>
                <tr>
                  <th>ID TRANSAKSI</th>
                  <th>TARIKH</th>
                  <th>PO NO / PEMBEKAL</th>
                  <th>ITEM STOK</th>
                  <th>JENIS TRANSAKSI</th>
                  <th class="text-right">KUANTITI</th>
                  <th class="text-right">HARGA SEUNIT</th>
                  <th class="text-right">JUMLAH (RM)</th>
                  <th class="text-center">TINDAKAN</th>
                </tr>
              </thead>
              <tbody>
                ${
                  stockList.length === 0
                    ? `<tr><td colspan="9" class="text-center py-8 text-slate-400 font-medium">Tiada transaksi stok.</td></tr>`
                    : stockList
                        .map((stk) => {
                          const isRx = stk.transaction_type === "RECEIVED" || stk.received_qty > 0;
                          return `
                      <tr class="hover:bg-slate-50">
                        <td class="font-bold text-slate-900">${stk.id}</td>
                        <td>${stk.transaction_date || "-"}</td>
                        <td class="text-xs text-slate-600"><span class="font-bold text-slate-800">${stk.po_no}</span><br/>${stk.supplier}</td>
                        <td class="font-semibold text-slate-800">${stk.item}</td>
                        <td>
                          <span class="status-badge ${isRx ? "bg-emerald-100 text-emerald-800 border-emerald-300" : "bg-rose-100 text-rose-800 border-rose-300"}">
                            ${isRx ? "TERIMAAN" : "KELUARAN"}
                          </span>
                        </td>
                        <td class="text-right font-extrabold ${isRx ? "text-emerald-700" : "text-rose-700"}">${stk.quantity || stk.received_qty || stk.issued_qty}</td>
                        <td class="text-right text-slate-600">${formatCurrency(stk.unit_price)}</td>
                        <td class="text-right font-bold text-slate-900">${formatCurrency(stk.total)}</td>
                        <td class="text-center">
                          ${
                            canEdit()
                              ? `<button class="p-1.5 hover:bg-rose-50 text-rose-600 rounded-lg text-xs" title="Padam" onclick="window.deleteStockRecord('${stk.id}')">🗑️</button>`
                              : ""
                          }
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
      `
      }
    </div>
  `;
}

export function attachInventoryEvents(db, renderFn) {
  const btnSummary = document.getElementById("tab-stock-summary");
  const btnMovement = document.getElementById("tab-stock-movement");

  if (btnSummary) btnSummary.onclick = () => renderFn("SUMMARY");
  if (btnMovement) btnMovement.onclick = () => renderFn("MOVEMENT");

  const addBtn = document.getElementById("btn-add-stock");
  if (addBtn) {
    addBtn.onclick = () => window.openStockFormModal(db);
  }

  window.openStockFormModal = (db) => {
    renderModal({
      title: "Tambah Transaksi Stok Baru (KEW.PS-3)",
      bodyHtml: `
        <form id="stock-form" class="space-y-4">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">Tarikh Transaksi</label>
              <input type="text" id="stk-date" placeholder="13.02.2025" value="17/08/2026" class="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold" required />
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">Jenis Transaksi</label>
              <select id="stk-type" class="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold">
                <option value="RECEIVED">TERIMAAN (RECEIVED)</option>
                <option value="ISSUED">KELUARAN (ISSUED)</option>
              </select>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">No. PO</label>
              <input type="text" id="stk-po" placeholder="PO250000000085953" class="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold" required />
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">Pembekal / Agensi</label>
              <input type="text" id="stk-supplier" placeholder="NZ ANTARES ENTERPRISE" class="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold" required />
            </div>
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">Perihal Item Stok</label>
            <input type="text" id="stk-item" placeholder="BERAS BASMATHI (5 KG/PEK)" class="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold" required />
          </div>

          <div class="grid grid-cols-3 gap-4">
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">Kuantiti</label>
              <input type="number" id="stk-qty" placeholder="10" class="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold" required />
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">Harga Seunit (RM)</label>
              <input type="number" step="0.01" id="stk-price" placeholder="65.00" class="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold" required />
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">Pegawai Bertanggungjawab</label>
              <input type="text" id="stk-officer" placeholder="DAYANG SUHAILA" value="DAYANG SUHAILA BT AB RAHIM" class="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold" />
            </div>
          </div>
        </form>
      `,
      footerButtons: [
        { label: "Batal", className: "px-4 py-2 border rounded-lg text-slate-700", onClick: (e, c) => c() },
        {
          label: "Simpan Transaksi",
          className: "px-4 py-2 bg-teal-600 text-white rounded-lg font-semibold",
          onClick: async (e, close) => {
            const type = document.getElementById("stk-type").value;
            const qty = parseFloat(document.getElementById("stk-qty").value) || 0;
            const price = parseFloat(document.getElementById("stk-price").value) || 0;

            const payload = {
              id: `STK-2025-${String((db.stock || []).length + 1).padStart(4, "0")}`,
              transaction_date: document.getElementById("stk-date").value,
              po_no: document.getElementById("stk-po").value,
              supplier: document.getElementById("stk-supplier").value,
              item: document.getElementById("stk-item").value,
              unit: "PEK / KG / BOTOL",
              transaction_type: type,
              quantity: qty,
              received_qty: type === "RECEIVED" ? qty : 0,
              issued_qty: type === "ISSUED" ? qty : 0,
              unit_price: price,
              total: qty * price,
              recorded_balance: type === "RECEIVED" ? qty : 0,
              officer: document.getElementById("stk-officer").value,
            };

            await addRecord("Stock", payload);
            showToast("✓ Transaksi stok berjaya direkodkan");
            close();
            window.location.reload();
          },
        },
      ],
    });
  };

  window.deleteStockRecord = (id) => {
    showDeleteConfirmation({
      recordId: id,
      description: "Transaksi Stok",
      amount: "RM 0.00",
      onConfirm: async () => {
        await deleteRecord("Stock", id);
        showToast("✓ Transaksi stok dipadam");
        window.location.reload();
      },
    });
  };
}
