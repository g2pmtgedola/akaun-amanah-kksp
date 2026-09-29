// Claims Module View Component with Exported Form Modal
import { formatCurrency, STATUS_STYLES } from "../data/schema.js";
import { renderModal, showDeleteConfirmation } from "../components/Modal.js";
import { addRecord, updateRecord, deleteRecord } from "../services/api.js";
import { showToast } from "../components/Toast.js";
import { canEdit } from "../services/auth.js";

export function renderClaimsView(db, selectedYear) {
  let records = (db.claims || []).filter((r) => r.record_status !== "DELETED");
  if (selectedYear !== "ALL") {
    records = records.filter((r) => r.year === selectedYear || (!r.year && selectedYear === "2025"));
  }

  const totalClaims = records.reduce((acc, curr) => acc + (Number(curr.amount) || 0), 0);

  return `
    <div class="space-y-6 animate-fade-in pb-10">
      <!-- Header -->
      <div class="flex flex-wrap items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div>
          <h2 class="text-2xl font-extrabold text-slate-900 tracking-tight">MODUL TUNTUTAN PENCERAMAH JEMPUTAN</h2>
          <p class="text-xs font-medium text-slate-500 mt-1">Pengurusan Bayaran Elaun Penceramah, Jam Mengajar & Kelulusan Kadar Syarat</p>
        </div>
        <div class="flex items-center gap-3">
          <span class="text-sm font-bold text-slate-700 bg-amber-50 px-4 py-2 rounded-xl border border-amber-200">
            Jumlah Tuntutan: <span class="text-amber-700">${formatCurrency(totalClaims)}</span>
          </span>
          ${
            canEdit()
              ? `<button id="btn-add-claim" class="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-bold shadow-sm transition">
                  + Tambah Tuntutan Penceramah
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
                <th>NO. ID TUNTUTAN</th>
                <th>TARIKH</th>
                <th>BULAN</th>
                <th>NAMA PENCERAMAH</th>
                <th>PROGRAM / KURSUS</th>
                <th class="text-right">JUMLAH (RM)</th>
                <th>STATUS</th>
                <th class="text-center">TINDAKAN</th>
              </tr>
            </thead>
            <tbody>
              ${
                records.length === 0
                  ? `<tr><td colspan="8" class="text-center py-8 text-slate-400 font-medium">Tiada rekod tuntutan penceramah.</td></tr>`
                  : records
                      .map(
                        (r) => `
                    <tr class="hover:bg-slate-50">
                      <td class="font-bold text-slate-900 font-mono">${r.id}</td>
                      <td>${r.claim_date || r.month + " " + (r.year || "2025")}</td>
                      <td><span class="px-2 py-0.5 bg-slate-100 text-slate-700 font-extrabold rounded-md text-[11px]">${r.month}</span></td>
                      <td class="font-bold text-slate-800">${r.speaker}</td>
                      <td class="font-medium text-slate-700 max-w-xs truncate">${r.programme}</td>
                      <td class="text-right font-extrabold text-amber-700">${formatCurrency(r.amount)}</td>
                      <td>
                        <span class="status-badge ${STATUS_STYLES[r.status] || STATUS_STYLES.Paid}">
                          ${r.status || "Paid"}
                        </span>
                      </td>
                      <td class="text-center">
                        <div class="flex items-center justify-center gap-1">
                          <button class="p-1.5 hover:bg-slate-100 rounded-lg text-xs" title="Lihat" onclick="window.viewClaimRecord('${r.id}')">👁️</button>
                          ${
                            canEdit()
                              ? `
                                <button class="p-1.5 hover:bg-slate-100 rounded-lg text-xs" title="Edit" onclick="window.editClaimRecord('${r.id}')">✏️</button>
                                <button class="p-1.5 hover:bg-rose-50 text-rose-600 rounded-lg text-xs" title="Padam" onclick="window.deleteClaimRecord('${r.id}')">🗑️</button>
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

export function openClaimFormModal(db, record = null) {
  const isEdit = !!record;
  renderModal({
    title: isEdit ? `Kemaskini Tuntutan Penceramah (${record.id})` : "Tambah Tuntutan Penceramah Baru",
    bodyHtml: `
      <form id="claim-form" class="space-y-4">
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">Tarikh Tuntutan (DD/MM/YYYY)</label>
            <input type="text" id="clm-date" value="${record ? record.claim_date || "" : ""}" placeholder="23/06/2025" class="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold" />
          </div>
          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">Bulan Tuntutan</label>
            <select id="clm-month" class="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold">
              ${["JAN", "FEB", "MAC", "APR", "MEI", "JUN", "JUL", "OGOS", "SEPT", "OKT", "NOV", "DIS"]
                .map((m) => `<option value="${m}" ${record && record.month === m ? "selected" : ""}>${m}</option>`)
                .join("")}
            </select>
          </div>
        </div>

        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1">Nama Penceramah Jemputan</label>
          <input type="text" id="clm-speaker" value="${record ? record.speaker || "" : ""}" placeholder="CHEF SHARIZAL BIN AHMAD" class="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold" required />
        </div>

        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1">Tajuk Program / Ceramah</label>
          <input type="text" id="clm-programme" value="${record ? record.programme || "" : ""}" placeholder="KURSUS PEMBUATAN PASTI DIRAJA..." class="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold" required />
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">Jumlah Elaun Tuntutan (RM)</label>
            <input type="number" step="0.01" id="clm-amount" value="${record ? record.amount || "" : ""}" placeholder="930.00" class="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-amber-700" required />
          </div>
          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">Status Kelulusan</label>
            <select id="clm-status" class="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold">
              <option value="Approved" ${record && record.status === "Approved" ? "selected" : ""}>Approved (Diluluskan)</option>
              <option value="Paid" ${record && record.status === "Paid" ? "selected" : ""}>Paid (Dibayar)</option>
              <option value="Pending" ${record && record.status === "Pending" ? "selected" : ""}>Pending (Disemak)</option>
            </select>
          </div>
        </div>
      </form>
    `,
    footerButtons: [
      { label: "Batal", className: "px-4 py-2 border rounded-lg text-slate-700", onClick: (e, c) => c() },
      {
        label: isEdit ? "Kemaskini Rekod" : "Simpan Rekod",
        className: "px-4 py-2 bg-amber-600 text-white rounded-lg font-semibold shadow-md",
        onClick: async (e, close) => {
          const payload = {
            id: isEdit ? record.id : `CLM-2025-${String((db.claims || []).length + 1).padStart(4, "0")}`,
            claim_date: document.getElementById("clm-date").value,
            month: document.getElementById("clm-month").value,
            year: "2025",
            speaker: document.getElementById("clm-speaker").value,
            programme: document.getElementById("clm-programme").value,
            amount: parseFloat(document.getElementById("clm-amount").value) || 0,
            status: document.getElementById("clm-status").value,
          };
          if (isEdit) await updateRecord("Claim", payload);
          else await addRecord("Claim", payload);
          showToast("✓ Rekod tuntutan penceramah disimpan");
          close();
          if (window.appRefreshUI) window.appRefreshUI();
          else window.location.reload();
        },
      },
    ],
  });
}

export function attachClaimsEvents(db) {
  window.openClaimFormModal = (dbRef, rec) => openClaimFormModal(dbRef || db, rec);

  const addBtn = document.getElementById("btn-add-claim");
  if (addBtn) {
    addBtn.onclick = () => openClaimFormModal(db);
  }

  window.viewClaimRecord = (id) => {
    const rec = (db.claims || []).find((r) => r.id === id);
    if (!rec) return;
    renderModal({
      title: `Butiran Tuntutan Penceramah - ${rec.id}`,
      bodyHtml: `
        <div class="space-y-3 text-xs">
          <div class="grid grid-cols-2 gap-4 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
            <div><span class="font-bold text-slate-500">ID Tuntutan:</span> <span class="font-bold text-slate-900">${rec.id}</span></div>
            <div><span class="font-bold text-slate-500">Tarikh:</span> ${rec.claim_date || rec.month}</div>
            <div><span class="font-bold text-slate-500">Bulan:</span> ${rec.month}</div>
            <div><span class="font-bold text-slate-500">Status:</span> ${rec.status}</div>
          </div>
          <div><span class="font-bold text-slate-500">Nama Penceramah:</span> <p class="text-sm font-bold text-slate-900 mt-0.5">${rec.speaker}</p></div>
          <div><span class="font-bold text-slate-500">Tajuk Program:</span> <p class="font-semibold text-slate-800">${rec.programme}</p></div>
          <div class="pt-2 border-t border-slate-200 flex justify-between items-center">
            <span class="font-bold text-slate-700">Jumlah Tuntutan:</span>
            <span class="text-lg font-black text-amber-700">${formatCurrency(rec.amount)}</span>
          </div>
        </div>
      `,
      footerButtons: [{ label: "Tutup", className: "px-4 py-2 border rounded-lg text-slate-700", onClick: (e, c) => c() }],
    });
  };

  window.editClaimRecord = (id) => {
    const rec = (db.claims || []).find((r) => r.id === id);
    if (rec) openClaimFormModal(db, rec);
  };

  window.deleteClaimRecord = (id) => {
    const rec = (db.claims || []).find((r) => r.id === id);
    if (!rec) return;
    showDeleteConfirmation({
      recordId: rec.id,
      description: rec.speaker + " - " + rec.programme,
      amount: formatCurrency(rec.amount),
      onConfirm: async () => {
        await deleteRecord("Claim", rec.id);
        showToast("✓ Rekod tuntutan dipadam");
        if (window.appRefreshUI) window.appRefreshUI();
        else window.location.reload();
      },
    });
  };
}
