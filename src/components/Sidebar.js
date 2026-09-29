// Collapsible Institutional Sidebar Component
import { hasPermission } from "../services/auth.js";
import { scanDataQuality } from "../services/dataQuality.js";
import { getDatabase } from "../services/api.js";

export function renderSidebar({ currentRoute }) {
  const db = getDatabase();
  const qualityScan = scanDataQuality(db);
  const totalIssues = qualityScan.totalIssues;

  const navItems = [
    { key: "dashboard", label: "Dashboard", icon: "📊", route: "dashboard" },
    { key: "penyata", label: "Penyata Tahunan", icon: "📑", route: "penyata" },
    { key: "income", label: "Pendapatan", icon: "💵", route: "income" },
    { key: "expenses", label: "Perbelanjaan", icon: "🛒", route: "expenses" },
    { key: "claims", label: "Tuntutan Penceramah", icon: "🎓", route: "claims" },
    { key: "invoices", label: "Rekod Invois", icon: "📄", route: "invoices" },
    { key: "quotations", label: "Rekod Sebutharga", icon: "📋", route: "quotations" },
    { key: "inventory", label: "Pengurusan Stok", icon: "📦", route: "inventory" },
    { key: "assets", label: "Pengurusan Aset", icon: "🏛️", route: "assets" },
    { key: "data_quality", label: "Kualiti Data", icon: "🛡️", route: "data_quality", badge: totalIssues },
    { key: "reports", label: "Laporan", icon: "📈", route: "reports" },
    { key: "audit", label: "Log Audit", icon: "📜", route: "audit" },
    { key: "settings", label: "Tetapan Sistem", icon: "⚙️", route: "settings" },
  ];

  return `
    <aside class="w-64 bg-slate-900 text-slate-300 flex flex-col shrink-0 min-h-screen border-r border-slate-800 no-print transition-all">
      <!-- Sidebar Header with Official Institutional Logo -->
      <div class="p-4 border-b border-slate-800 space-y-2">
        <div class="bg-white p-2 rounded-xl border border-slate-700 shadow-md">
          <img src="./logo.svg" alt="Kolej Komuniti Sungai Petani Logo" class="w-full h-auto max-h-12 object-contain mx-auto" />
        </div>
        <div class="pt-1">
          <h1 class="text-xs font-extrabold text-white tracking-wider leading-tight uppercase">AKAUN AMANAH</h1>
          <p class="text-[10px] text-slate-400 font-medium">Financial Management System</p>
        </div>
      </div>

      <!-- Navigation Links -->
      <nav class="flex-1 p-3 space-y-1 overflow-y-auto">
        ${navItems
          .filter((item) => hasPermission(item.key))
          .map((item) => {
            const isActive = currentRoute === item.route;
            return `
              <a
                href="#${item.route}"
                class="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition group ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md font-bold"
                    : "hover:bg-slate-800 hover:text-white text-slate-400"
                }"
              >
                <div class="flex items-center gap-3">
                  <span class="text-base leading-none">${item.icon}</span>
                  <span>${item.label}</span>
                </div>
                ${
                  item.badge && item.badge > 0
                    ? `<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-500 text-white animate-pulse">${item.badge}</span>`
                    : ""
                }
              </a>
            `;
          })
          .join("")}
      </nav>

      <!-- Sidebar Footer -->
      <div class="p-4 border-t border-slate-800 bg-slate-950/50 text-[11px] text-slate-500">
        <p class="font-semibold text-slate-400">Kolej Komuniti Sg. Petani</p>
        <p>Akaun Amanah 2025 v1.0</p>
      </div>
    </aside>
  `;
}
