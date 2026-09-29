// Audit Log History View Component
import { getAuditLogs } from "../services/audit.js";

export function renderAuditLogView() {
  const logs = getAuditLogs();

  return `
    <div class="space-y-6 animate-fade-in pb-10">
      <!-- Header -->
      <div class="flex items-center justify-between bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div>
          <h2 class="text-2xl font-extrabold text-slate-900 tracking-tight">LOG AUDIT SISTEM (AUDIT TRAIL)</h2>
          <p class="text-xs font-medium text-slate-500 mt-1">Rekod Transaksi Penambahan, Kemaskini & Padaman Untuk Pematuhan Audit Kewangan</p>
        </div>
        <span class="text-xs font-bold bg-slate-100 text-slate-700 px-3 py-1.5 rounded-xl border border-slate-200">
          Total Logs: ${logs.length}
        </span>
      </div>

      <!-- Audit Log Table -->
      <div class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div class="overflow-x-auto">
          <table class="inst-table">
            <thead>
              <tr>
                <th>MASA / TARIKH</th>
                <th>PENGGUNA</th>
                <th>TINDAKAN (ACTION)</th>
                <th>MODUL</th>
                <th>ID REKOD</th>
                <th>NILAI ASAL (OLD)</th>
                <th>NILAI BARU (NEW)</th>
              </tr>
            </thead>
            <tbody>
              ${
                logs.length === 0
                  ? `<tr><td colspan="7" class="text-center py-8 text-slate-400 font-medium">Tiada rekod log audit.</td></tr>`
                  : logs
                      .map((log) => {
                        const actionColors = {
                          CREATE: "bg-emerald-100 text-emerald-800 border-emerald-300",
                          UPDATE: "bg-blue-100 text-blue-800 border-blue-300",
                          SOFT_DELETE: "bg-rose-100 text-rose-800 border-rose-300",
                          INITIALIZE: "bg-purple-100 text-purple-800 border-purple-300",
                        };
                        return `
                    <tr class="hover:bg-slate-50 text-xs">
                      <td class="font-mono text-slate-500 whitespace-nowrap">${log.timestamp}</td>
                      <td class="font-semibold text-slate-900">${log.user}</td>
                      <td>
                        <span class="status-badge ${actionColors[log.action] || "bg-slate-100 text-slate-700"}">
                          ${log.action}
                        </span>
                      </td>
                      <td class="font-semibold text-slate-700">${log.module}</td>
                      <td class="font-mono font-bold text-slate-900">${log.record_id}</td>
                      <td class="text-slate-500 max-w-xs truncate">${log.old_value || "-"}</td>
                      <td class="text-slate-900 font-medium max-w-xs truncate">${log.new_value || "-"}</td>
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
