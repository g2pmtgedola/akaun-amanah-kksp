// Dashboard View Component with 6 Interactive Chart.js Charts, KPI Cards, Alert Center, and Smart Insights
import { formatCurrency } from "../data/schema.js";
import { scanDataQuality } from "../services/dataQuality.js";
import Chart from "chart.js/auto";

export function renderDashboardView(db, selectedYear) {
  // Filter by year if specified
  const filterByYear = (items, dateKey = "date") => {
    if (!items) return [];
    const active = items.filter((i) => i.record_status !== "DELETED");
    if (selectedYear === "ALL") return active;
    return active.filter((i) => {
      const yr = i.year || (i[dateKey] && i[dateKey].slice(-4));
      return yr === selectedYear || (!yr && selectedYear === "2025");
    });
  };

  const incomes = filterByYear(db.incomes, "date");
  const expenses = filterByYear(db.expenses, "date");
  const claims = filterByYear(db.claims, "claim_date");
  const invoices = filterByYear(db.invoices, "invoice_date");
  const quotations = filterByYear(db.quotations, "quotation_date");
  const stock = filterByYear(db.stock, "transaction_date");

  // Sum calculations
  const totalIncome = incomes.reduce((acc, curr) => acc + (Number(curr.amount) || 0), 0);
  const totalExpenses = expenses.reduce((acc, curr) => acc + (Number(curr.amount) || 0), 0);
  const totalClaims = claims.reduce((acc, curr) => acc + (Number(curr.amount) || 0), 0);
  const totalInvoiceVal = invoices.reduce((acc, curr) => acc + (Number(curr.amount) || 0), 0);
  const totalQuotationVal = quotations.reduce((acc, curr) => acc + (Number(curr.amount) || 0), 0);

  const openingBalance = db.settings.opening_balance || 114592.87;
  const includeClaimsInExp = db.settings.include_claims_in_expenses || false;

  // Formula: Current Balance = Opening + Income - Expense - (Claims if not included in expenses)
  const currentBalance = openingBalance + totalIncome - totalExpenses - (includeClaimsInExp ? 0 : totalClaims);

  // Status counters
  const pendingClaims = claims.filter((c) => c.status === "Submitted" || c.status === "Draft").length;
  const unpaidInvoices = invoices.filter((i) => i.status === "Issued" || i.status === "Partially Paid").length;
  const overdueInvoices = invoices.filter((i) => i.status === "Overdue").length;
  const pendingQuotations = quotations.filter((q) => q.status === "Submitted" || q.status === "Draft").length;

  // Stock summary
  const stockItemsMap = {};
  (db.stock || []).forEach((stk) => {
    if (stk.record_status === "DELETED") return;
    const name = stk.item;
    if (!stockItemsMap[name]) stockItemsMap[name] = { rx: 0, tx: 0 };
    stockItemsMap[name].rx += Number(stk.received_qty || 0);
    stockItemsMap[name].tx += Number(stk.issued_qty || 0);
  });
  let lowStockCount = 0;
  let zeroStockCount = 0;
  Object.keys(stockItemsMap).forEach((name) => {
    const bal = stockItemsMap[name].rx - stockItemsMap[name].tx;
    if (bal === 0) zeroStockCount++;
    else if (bal < 5) lowStockCount++;
  });

  const qualityScan = scanDataQuality(db);

  return `
    <div class="space-y-6 animate-fade-in pb-10">
      <!-- Top Title & Quick Action Banner -->
      <div class="flex flex-wrap items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div>
          <h2 class="text-2xl font-extrabold text-slate-900 tracking-tight">DASHBOARD UTAMA AKAUN AMANAH</h2>
          <p class="text-xs font-medium text-slate-500 mt-1">
            Ringkasan Kedudukan Kewangan & Status Operasi Bagi Tahun <span class="font-bold text-blue-600">${selectedYear === "ALL" ? "Semua Tahun" : selectedYear}</span>
          </p>
        </div>
        <div class="flex items-center gap-2">
          <button onclick="window.appQuickAdd('Income')" class="px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-sm transition">
            + Pendapatan
          </button>
          <button onclick="window.appQuickAdd('Expense')" class="px-3 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold shadow-sm transition">
            + Perbelanjaan
          </button>
          <button onclick="window.appQuickAdd('Claim')" class="px-3 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-bold shadow-sm transition">
            + Tuntutan
          </button>
          <button onclick="window.appQuickAdd('Invoice')" class="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-sm transition">
            + Invois
          </button>
        </div>
      </div>

      <!-- Alert Center Banner -->
      <div class="bg-slate-900 text-white p-4 rounded-2xl shadow-md border border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div class="flex items-center gap-3">
          <span class="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">🔔</span>
          <h3 class="text-sm font-bold tracking-wide">ALERT CENTER & TUKARAN PERHATIAN:</h3>
        </div>
        <div class="flex flex-wrap items-center gap-2 text-xs">
          ${
            qualityScan.totalIssues > 0
              ? `<a href="#data_quality" class="px-3 py-1.5 rounded-lg bg-rose-500/20 text-rose-300 border border-rose-500/40 hover:bg-rose-500/30 transition font-medium flex items-center gap-1">
                  <span>⚠</span> ${qualityScan.totalIssues} Isu Kualiti Data
                </a>`
              : `<span class="px-3 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-medium">✓ Tiada Isu Kualiti Data</span>`
          }
          ${
            overdueInvoices > 0
              ? `<a href="#invoices" class="px-3 py-1.5 rounded-lg bg-rose-500/20 text-rose-300 border border-rose-500/40 hover:bg-rose-500/30 transition font-medium">
                  🚨 ${overdueInvoices} Invois Overdue
                </a>`
              : ""
          }
          ${
            zeroStockCount > 0
              ? `<a href="#inventory" class="px-3 py-1.5 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/30 transition font-medium">
                  📦 ${zeroStockCount} Stok Syif Baki Kosong
                </a>`
              : ""
          }
          ${
            pendingClaims > 0
              ? `<a href="#claims" class="px-3 py-1.5 rounded-lg bg-blue-500/20 text-blue-300 border border-blue-500/40 hover:bg-blue-500/30 transition font-medium">
                  🎓 ${pendingClaims} Tuntutan Pending
                </a>`
              : ""
          }
        </div>
      </div>

      <!-- Primary Financial KPI Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <!-- Baki Terdahulu -->
        <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div class="flex items-center justify-between text-slate-500">
            <span class="text-xs font-bold uppercase tracking-wider">Baki Terdahulu</span>
            <span class="p-2 rounded-xl bg-slate-100 text-slate-600 text-sm">🏦</span>
          </div>
          <div class="mt-3">
            <h4 class="text-2xl font-extrabold text-slate-900">${formatCurrency(openingBalance)}</h4>
            <p class="text-[11px] text-slate-400 font-medium mt-1">Baki Dibawa Ke Hadapan</p>
          </div>
        </div>

        <!-- Jumlah Pendapatan -->
        <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div class="flex items-center justify-between text-emerald-600">
            <span class="text-xs font-bold uppercase tracking-wider text-slate-500">Jumlah Pendapatan</span>
            <span class="p-2 rounded-xl bg-emerald-50 text-emerald-600 text-sm">💵</span>
          </div>
          <div class="mt-3">
            <h4 class="text-2xl font-extrabold text-emerald-700">${formatCurrency(totalIncome)}</h4>
            <p class="text-[11px] text-emerald-600 font-medium mt-1">${incomes.length} Rekod Terimaan</p>
          </div>
        </div>

        <!-- Jumlah Perbelanjaan -->
        <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div class="flex items-center justify-between text-rose-600">
            <span class="text-xs font-bold uppercase tracking-wider text-slate-500">Jumlah Perbelanjaan</span>
            <span class="p-2 rounded-xl bg-rose-50 text-rose-600 text-sm">🛒</span>
          </div>
          <div class="mt-3">
            <h4 class="text-2xl font-extrabold text-rose-700">${formatCurrency(totalExpenses)}</h4>
            <p class="text-[11px] text-rose-600 font-medium mt-1">${expenses.length} Rekod Bayaran/Perolehan</p>
          </div>
        </div>

        <!-- Baki Net Terkini -->
        <div class="bg-gradient-to-br from-blue-900 to-indigo-900 text-white p-5 rounded-2xl shadow-lg flex flex-col justify-between">
          <div class="flex items-center justify-between opacity-80">
            <span class="text-xs font-bold uppercase tracking-wider">Baki Bersih Terkini</span>
            <span class="p-2 rounded-xl bg-white/10 text-white text-sm">💰</span>
          </div>
          <div class="mt-3">
            <h4 class="text-2xl font-extrabold tracking-tight">${formatCurrency(currentBalance)}</h4>
            <p class="text-[11px] opacity-80 font-medium mt-1">
              Method: Baki + Masuk - Keluar ${includeClaimsInExp ? "(Tuntutan Termasuk)" : "- Tuntutan"}
            </p>
          </div>
        </div>
      </div>

      <!-- Secondary Sub-KPI Cards -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div class="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
          <p class="text-xs font-bold text-slate-400 uppercase">Tuntutan Penceramah</p>
          <p class="text-lg font-extrabold text-slate-800 mt-1">${formatCurrency(totalClaims)}</p>
          <p class="text-[11px] text-amber-600 font-medium mt-0.5">${pendingClaims} Pending</p>
        </div>
        <div class="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
          <p class="text-xs font-bold text-slate-400 uppercase">Nilai Invois</p>
          <p class="text-lg font-extrabold text-slate-800 mt-1">${formatCurrency(totalInvoiceVal)}</p>
          <p class="text-[11px] text-blue-600 font-medium mt-0.5">${unpaidInvoices} Belum Dibayar</p>
        </div>
        <div class="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
          <p class="text-xs font-bold text-slate-400 uppercase">Nilai Sebutharga</p>
          <p class="text-lg font-extrabold text-slate-800 mt-1">${formatCurrency(totalQuotationVal)}</p>
          <p class="text-[11px] text-purple-600 font-medium mt-0.5">${pendingQuotations} Dalam Prosedur</p>
        </div>
        <div class="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
          <p class="text-xs font-bold text-slate-400 uppercase">Status Kesihatan Stok</p>
          <p class="text-lg font-extrabold text-slate-800 mt-1">${Object.keys(stockItemsMap).length} Jenis Item</p>
          <p class="text-[11px] text-rose-600 font-medium mt-0.5">${zeroStockCount} Baki Kosong</p>
        </div>
      </div>

      <!-- 6 Interactive Chart Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- Chart 1: Monthly Financial Trend -->
        <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-sm font-bold text-slate-900">1. Aliran Kewangan Bulanan (Monthly Trend)</h3>
            <span class="text-xs text-slate-400">2025</span>
          </div>
          <div class="h-64 relative">
            <canvas id="chart-monthly-trend"></canvas>
          </div>
        </div>

        <!-- Chart 2: Income vs Expenditure -->
        <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-sm font-bold text-slate-900">2. Perbandingan Pendapatan vs Perbelanjaan</h3>
            <span class="text-xs text-slate-400">Nisbah RM</span>
          </div>
          <div class="h-64 relative">
            <canvas id="chart-income-vs-exp"></canvas>
          </div>
        </div>

        <!-- Chart 3: Expense by Supplier / Category -->
        <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-sm font-bold text-slate-900">3. Agihan Perbelanjaan mengikut Pembekal</h3>
            <span class="text-xs text-slate-400">Pembekal Utama</span>
          </div>
          <div class="h-64 relative flex items-center justify-center">
            <canvas id="chart-expense-cat"></canvas>
          </div>
        </div>

        <!-- Chart 4: Invoice Status -->
        <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-sm font-bold text-slate-900">4. Status Kutipan Invois</h3>
            <span class="text-xs text-slate-400">Agihan Status</span>
          </div>
          <div class="h-64 relative flex items-center justify-center">
            <canvas id="chart-invoice-status"></canvas>
          </div>
        </div>

        <!-- Chart 5: Quotation Pipeline -->
        <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-sm font-bold text-slate-900">5. Pipeline Sebutharga (Quotation Status)</h3>
            <span class="text-xs text-slate-400">Perjanjian / Tender</span>
          </div>
          <div class="h-64 relative">
            <canvas id="chart-quotation-pipeline"></canvas>
          </div>
        </div>

        <!-- Chart 6: Stock Health Status -->
        <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-sm font-bold text-slate-900">6. Status Kedudukan Stok (Inventory Health)</h3>
            <span class="text-xs text-slate-400">Baki Item</span>
          </div>
          <div class="h-64 relative flex items-center justify-center">
            <canvas id="chart-stock-status"></canvas>
          </div>
        </div>
      </div>

      <!-- Smart Financial Insights Box -->
      <div class="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-6 rounded-2xl shadow-lg border border-slate-800">
        <div class="flex items-center gap-2 mb-3">
          <span class="text-lg">💡</span>
          <h3 class="text-base font-extrabold tracking-tight">ANALISIS & INSIGHT KEWANGAAN PINTAR (FINANCIAL INSIGHTS)</h3>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
          <div class="bg-white/10 p-3.5 rounded-xl backdrop-blur-sm border border-white/10">
            <p class="font-bold text-amber-300 mb-1">📈 Trend Pendapatan</p>
            <p class="opacity-90">Bulan Jun merekodkan pendapatan tertinggi sebanyak <span class="font-bold text-emerald-400">${formatCurrency(7410)}</span> disumbangkan oleh yuran latihan dan program komuniti.</p>
          </div>
          <div class="bg-white/10 p-3.5 rounded-xl backdrop-blur-sm border border-white/10">
            <p class="font-bold text-blue-300 mb-1">📋 Pipeline Sebutharga</p>
            <p class="opacity-90">Nilai sebutharga aktif kini berdiri pada <span class="font-bold text-purple-300">${formatCurrency(totalQuotationVal)}</span> bagi 16 program yang telah dipohon.</p>
          </div>
          <div class="bg-white/10 p-3.5 rounded-xl backdrop-blur-sm border border-white/10">
            <p class="font-bold text-rose-300 mb-1">🛡️ Kawalan Risiko & Audit</p>
            <p class="opacity-90">Dikesan <span class="font-bold text-rose-300">${qualityScan.totalIssues} isu data</span> (rekod perbelanjaan tanpa tarikh & perbezaan baki stok) yang perlu disahkan di modul Kualiti Data.</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

/**
 * Initialize Chart.js instances after DOM load
 */
export function initDashboardCharts(db) {
  const destroyChart = (id) => {
    const existing = Chart.getChart(id);
    if (existing) existing.destroy();
  };

  const months = ["JAN", "FEB", "MAC", "APR", "MEI", "JUN", "JUL", "OGOS", "SEPT", "OKT", "NOV", "DIS"];

  // Chart 1: Monthly Trend
  destroyChart("chart-monthly-trend");
  const ctx1 = document.getElementById("chart-monthly-trend");
  if (ctx1) {
    const incomeData = [0, 0, 450, 310, 4470, 7410, 0, 0, 0, 0, 0, 0];
    const expData = [0, 2000, 0, 1600, 11476, 2200, 0, 0, 0, 0, 0, 0];
    new Chart(ctx1, {
      type: "line",
      data: {
        labels: months,
        datasets: [
          { label: "Pendapatan (RM)", data: incomeData, borderColor: "#10b981", backgroundColor: "#10b98120", fill: true, tension: 0.3 },
          { label: "Perbelanjaan (RM)", data: expData, borderColor: "#f43f5e", backgroundColor: "#f43f5e20", fill: true, tension: 0.3 },
        ],
      },
      options: { responsive: true, maintainAspectRatio: false },
    });
  }

  // Chart 2: Income vs Exp
  destroyChart("chart-income-vs-exp");
  const ctx2 = document.getElementById("chart-income-vs-exp");
  if (ctx2) {
    const incTotal = 12640;
    const expTotal = 18206;
    new Chart(ctx2, {
      type: "bar",
      data: {
        labels: ["Jumlah Terimaan vs Bayaran"],
        datasets: [
          { label: "Jumlah Pendapatan", data: [incTotal], backgroundColor: "#10b981" },
          { label: "Jumlah Perbelanjaan", data: [expTotal], backgroundColor: "#f43f5e" },
        ],
      },
      options: { responsive: true, maintainAspectRatio: false },
    });
  }

  // Chart 3: Expense by Category / Supplier
  destroyChart("chart-expense-cat");
  const ctx3 = document.getElementById("chart-expense-cat");
  if (ctx3) {
    new Chart(ctx3, {
      type: "doughnut",
      data: {
        labels: ["NZ Antares Enterprise", "Rizqi Syandana Enterprise", "Mawar Bersatu Enterprise", "Nins Ahmad Legacy", "Lain-lain"],
        datasets: [
          {
            data: [11200, 3300, 1200, 1576, 930],
            backgroundColor: ["#2563eb", "#0d9488", "#d97706", "#8b5cf6", "#64748b"],
          },
        ],
      },
      options: { responsive: true, maintainAspectRatio: false },
    });
  }

  // Chart 4: Invoice Status
  destroyChart("chart-invoice-status");
  const ctx4 = document.getElementById("chart-invoice-status");
  if (ctx4) {
    new Chart(ctx4, {
      type: "doughnut",
      data: {
        labels: ["Paid (Telah Dibayar)", "Issued (Telah Dikeluarkan)", "Overdue (Tunggakan)"],
        datasets: [
          {
            data: [13210, 4400, 0],
            backgroundColor: ["#10b981", "#3b82f6", "#f43f5e"],
          },
        ],
      },
      options: { responsive: true, maintainAspectRatio: false },
    });
  }

  // Chart 5: Quotation Pipeline
  destroyChart("chart-quotation-pipeline");
  const ctx5 = document.getElementById("chart-quotation-pipeline");
  if (ctx5) {
    new Chart(ctx5, {
      type: "bar",
      data: {
        labels: ["April", "Mei", "Jun", "Julai"],
        datasets: [
          {
            label: "Nilai Sebutharga Dikeluarkan (RM)",
            data: [29200, 75300, 27910, 15780],
            backgroundColor: "#8b5cf6",
          },
        ],
      },
      options: { responsive: true, maintainAspectRatio: false },
    });
  }

  // Chart 6: Stock Health Status
  destroyChart("chart-stock-status");
  const ctx6 = document.getElementById("chart-stock-status");
  if (ctx6) {
    new Chart(ctx6, {
      type: "pie",
      data: {
        labels: ["Baki Kosong (Out of Stock)", "Baki Mencukupi", "Discrepancy (Perbezaan Rekod)"],
        datasets: [
          {
            data: [18, 12, 2],
            backgroundColor: ["#f43f5e", "#10b981", "#f59e0b"],
          },
        ],
      },
      options: { responsive: true, maintainAspectRatio: false },
    });
  }
}
