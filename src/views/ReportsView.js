// Reports & Analytics Center Component with Asset, Unit, Date & Month Filtering
import { formatCurrency } from "../data/schema.js";
import { showToast } from "../components/Toast.js";
import jsPDF from "jspdf";
import "jspdf-autotable";
import * as XLSX from "xlsx";

let reportMonthFilter = "ALL";
let reportUnitFilter = "ALL";
let reportStartDate = "";
let reportEndDate = "";

// Helper to check if DD/MM/YYYY date falls in [startDate, endDate]
function isDateInRange(dateStr, startDateStr, endDateStr) {
  if (!startDateStr && !endDateStr) return true;
  if (!dateStr) return false;

  let d, m, y;
  if (dateStr.includes("/")) {
    const parts = dateStr.split("/");
    if (parts.length === 3) {
      d = parseInt(parts[0], 10);
      m = parseInt(parts[1], 10) - 1;
      y = parseInt(parts[2], 10);
    }
  } else if (dateStr.includes("-")) {
    const parts = dateStr.split("-");
    if (parts.length === 3) {
      y = parseInt(parts[0], 10);
      m = parseInt(parts[1], 10) - 1;
      d = parseInt(parts[2], 10);
    }
  }

  if (isNaN(y) || isNaN(m) || isNaN(d)) return true;

  const itemTime = new Date(y, m, d).getTime();

  if (startDateStr) {
    const sTime = new Date(startDateStr).getTime();
    if (itemTime < sTime) return false;
  }

  if (endDateStr) {
    const eTime = new Date(endDateStr + "T23:59:59").getTime();
    if (itemTime > eTime) return false;
  }

  return true;
}

export function renderReportsView(db, selectedYear, activeReportType = "penyata") {
  const reportsList = [
    { id: "penyata", title: "Laporan Penyata Kewangan Tahunan", icon: "📑", desc: "Ringkasan baki, pendapatan & perbelanjaan mengikut bulan" },
    { id: "income", title: "Laporan Terimaan Pendapatan", icon: "💵", desc: "Senarai penuh terimaan resit & yuran program mengikut Unit" },
    { id: "expense", title: "Laporan Perbelanjaan & Perolehan", icon: "🛒", desc: "Analisis perbelanjaan mengikut pembekal & status PO" },
    { id: "claims", title: "Laporan Tuntutan Penceramah", icon: "🎓", desc: "Senarai elaun penceramah jemputan & status kelulusan" },
    { id: "invoices", title: "Laporan Invois & Tunggakan", icon: "📄", desc: "Invois belum dibayar & penjejakan Overdue" },
    { id: "quotations", title: "Laporan Pipeline Sebutharga", icon: "📋", desc: "Cadangan sebutharga aktif & status kelulusan" },
    { id: "stock", title: "Laporan Kedudukan Stok (KEW.PS-3)", icon: "📦", desc: "Ringkasan baki item, kuantiti terimaan & nilai stok" },
    { id: "assets", title: "Laporan Pengurusan Aset Amanah", icon: "🏛️", desc: "Senarai pendaftaran Harta Modal, Inventori & Lokasi" },
    { id: "data_quality", title: "Laporan Kualiti Data & Integriti", icon: "🛡️", desc: "Senarai rekod tidak lengkap & perbezaan audit" },
  ];

  const monthsMap = [
    { code: "JAN", name: "Januari" },
    { code: "FEB", name: "Februari" },
    { code: "MAC", name: "Mac" },
    { code: "APR", name: "April" },
    { code: "MEI", name: "Mei" },
    { code: "JUN", name: "Jun" },
    { code: "JUL", name: "Julai" },
    { code: "OGOS", name: "Ogos" },
    { code: "SEPT", name: "September" },
    { code: "OKT", name: "Oktober" },
    { code: "NOV", name: "November" },
    { code: "DIS", name: "Disember" },
  ];

  const currentReportObj = reportsList.find((r) => r.id === activeReportType) || reportsList[0];

  const filterSubtitle =
    reportUnitFilter !== "ALL"
      ? `Tapisan Unit: ${reportUnitFilter} | ${reportMonthFilter !== "ALL" ? "Bulan: " + reportMonthFilter : "Semua Bulan"}`
      : reportMonthFilter !== "ALL"
      ? `Tapisan Bulan: ${monthsMap.find((m) => m.code === reportMonthFilter)?.name || reportMonthFilter}`
      : reportStartDate && reportEndDate
      ? `Tapisan Tarikh: ${reportStartDate} hingga ${reportEndDate}`
      : `Laporan Keseluruhan • Tahun Kewangan ${selectedYear === "ALL" ? "Semua Tahun" : selectedYear}`;

  return `
    <div class="space-y-6 animate-fade-in pb-10">
      <!-- Header Bar -->
      <div class="flex flex-wrap items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm no-print">
        <div>
          <h2 class="text-2xl font-extrabold text-slate-900 tracking-tight">PUSAT LAPORAN KEWANGAN & STRATEGIK</h2>
          <p class="text-xs font-medium text-slate-500 mt-1">Pilih laporan & tapis mengikut Unit, bulan, atau tarikh. Jika tidak dipilih, laporan keseluruhan dipaparkan.</p>
        </div>
        <div class="flex items-center gap-2">
          <button id="btn-export-excel" class="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-sm transition flex items-center gap-2">
            <span>📊</span> Eksport Excel
          </button>
          <button id="btn-export-pdf" class="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold shadow-sm transition flex items-center gap-2">
            <span>📄</span> Muat Turun PDF
          </button>
          <button onclick="window.print()" class="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold shadow-sm transition flex items-center gap-2">
            <span>🖨️</span> Cetak Laporan
          </button>
        </div>
      </div>

      <!-- Interactive Unit, Month & Date Filter Bar (Hidden when printing) -->
      <div class="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm no-print space-y-2">
        <div class="flex items-center justify-between border-b border-slate-100 pb-2">
          <span class="text-xs font-extrabold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
            <span>🔍</span> TAPISAN UNIT, BULAN & TARIKH LAPORAN
          </span>
          <span class="text-[11px] text-slate-500 font-medium">Status Tapisan: <strong class="text-blue-900 font-bold">${filterSubtitle}</strong></span>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-5 gap-3 pt-1 text-xs items-end">
          <div>
            <label class="block font-bold text-slate-700 mb-1">Tapis Unit:</label>
            <select id="report-unit-select" class="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold">
              <option value="ALL" ${reportUnitFilter === "ALL" ? "selected" : ""}>Semua Unit (Keseluruhan)</option>
              <option value="PSH" ${reportUnitFilter === "PSH" ? "selected" : ""}>PSH</option>
              <option value="RUC" ${reportUnitFilter === "RUC" ? "selected" : ""}>RUC</option>
              <option value="HEP" ${reportUnitFilter === "HEP" ? "selected" : ""}>HEP</option>
              <option value="Lain-lain" ${reportUnitFilter === "Lain-lain" ? "selected" : ""}>Lain-lain</option>
            </select>
          </div>
          <div>
            <label class="block font-bold text-slate-700 mb-1">Tapis Bulan:</label>
            <select id="report-month-select" class="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold">
              <option value="ALL" ${reportMonthFilter === "ALL" ? "selected" : ""}>Keseluruhan (Semua Bulan)</option>
              ${monthsMap
                .map((m) => `<option value="${m.code}" ${reportMonthFilter === m.code ? "selected" : ""}>${m.name}</option>`)
                .join("")}
            </select>
          </div>
          <div>
            <label class="block font-bold text-slate-700 mb-1">Tarikh Mula:</label>
            <input type="date" id="report-start-date" value="${reportStartDate}" class="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold" />
          </div>
          <div>
            <label class="block font-bold text-slate-700 mb-1">Tarikh Akhir:</label>
            <input type="date" id="report-end-date" value="${reportEndDate}" class="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold" />
          </div>
          <div class="flex items-center gap-2">
            <button id="btn-apply-report-filter" class="flex-1 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition shadow-sm">
              🔍 Tapis
            </button>
            <button id="btn-reset-report-filter" class="py-2 px-3 bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold rounded-lg transition" title="Reset ke Laporan Keseluruhan">
              ↺ Reset
            </button>
          </div>
        </div>
      </div>

      <!-- Report Selection Grid (Hidden when printing) -->
      <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-3.5 no-print">
        ${reportsList
          .map((r) => {
            const isSelected = activeReportType === r.id;
            return `
              <div
                class="p-4 rounded-2xl border transition cursor-pointer flex items-center gap-3 ${
                  isSelected
                    ? "bg-slate-900 text-white border-slate-900 shadow-lg scale-[1.02] ring-2 ring-blue-500"
                    : "bg-white text-slate-900 border-slate-200 hover:border-blue-500 hover:shadow-md"
                }"
                onclick="window.selectActiveReport('${r.id}')"
              >
                <span class="text-2xl p-2.5 rounded-xl ${isSelected ? "bg-white/10 text-white" : "bg-slate-100"}">${r.icon}</span>
                <div>
                  <h4 class="text-xs font-bold tracking-wide ${isSelected ? "text-white" : "text-slate-900"}">${r.title}</h4>
                  <p class="text-[10px] mt-0.5 ${isSelected ? "text-slate-300" : "text-slate-500"}">${r.desc}</p>
                </div>
              </div>
            `;
          })
          .join("")}
      </div>

      <!-- Active Report Document Container (Printable Area) -->
      <div id="printable-report-area" class="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 space-y-6 card-box">
        <!-- Official Institutional Header for Print / Report with Official SVG Logo -->
        <div class="text-center border-b-2 border-slate-900 pb-4 space-y-1">
          <img src="./logo.svg" alt="Kolej Komuniti Sungai Petani Logo" class="h-12 w-auto object-contain mx-auto mb-2" />
          <h2 class="text-lg font-black text-slate-900 uppercase tracking-wider">${db.settings.organisation_name || "KOLEJ KOMUNITI SUNGAI PETANI"}</h2>
          <h3 class="text-base font-extrabold text-blue-900 uppercase tracking-wide">${currentReportObj.title.toUpperCase()}</h3>
          <p class="text-xs font-semibold text-slate-600">${filterSubtitle}</p>
          <div class="flex items-center justify-between text-xs text-slate-500 pt-2 px-2">
            <span>Status: <strong class="text-emerald-700">DILULUSKAN & DISAHKAN</strong></span>
            <span>Tarikh Cetakan: <strong>${new Date().toLocaleDateString("ms-MY")}</strong></span>
          </div>
        </div>

        <!-- Render Specific Report Data Table -->
        <div class="overflow-x-auto">
          ${renderReportTable(db, activeReportType, selectedYear)}
        </div>

        <!-- Official Signature Block -->
        <div class="pt-8 border-t border-slate-300 grid grid-cols-2 gap-8 text-center text-xs">
          <div>
            <p class="font-bold text-slate-900">Disediakan Oleh:</p>
            <div class="h-16 sig-line border-b-2 border-slate-900 mx-auto w-3/4 my-2"></div>
            <p class="mt-1 font-extrabold text-slate-900 uppercase text-xs">Bendahari / Pegawai Akaun Amanah</p>
            <p class="text-slate-500 text-[11px]">Kolej Komuniti Sungai Petani</p>
            <p class="text-slate-500 text-[11px] mt-0.5">Tarikh: ________________________</p>
          </div>
          <div>
            <p class="font-bold text-slate-900">Disahkan & Diluluskan Oleh:</p>
            <div class="h-16 sig-line border-b-2 border-slate-900 mx-auto w-3/4 my-2"></div>
            <p class="mt-1 font-extrabold text-slate-900 uppercase text-xs">Pengarah / Pentadbir Utama</p>
            <p class="text-slate-500 text-[11px]">Kolej Komuniti Sungai Petani</p>
            <p class="text-slate-500 text-[11px] mt-0.5">Tarikh: ________________________</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

function filterByMonthAndDate(items, selectedYear, dateKey = "date") {
  if (!items) return [];
  let active = items.filter((i) => i.record_status !== "DELETED");

  if (selectedYear !== "ALL") {
    active = active.filter((i) => (i.year || (i[dateKey] && i[dateKey].slice(-4))) === selectedYear || (!i.year && selectedYear === "2025"));
  }

  // Unit filter (for incomes)
  if (reportUnitFilter !== "ALL") {
    if (reportUnitFilter === "Lain-lain") {
      active = active.filter((i) => i.unit && !["PSH", "RUC", "UPB"].includes(i.unit));
    } else {
      active = active.filter((i) => (i.unit || "PSH") === reportUnitFilter);
    }
  }

  // Month filter
  if (reportMonthFilter !== "ALL") {
    active = active.filter((i) => i.month === reportMonthFilter);
  }

  // Date range filter
  if (reportStartDate || reportEndDate) {
    active = active.filter((i) => {
      const valDate = i[dateKey] || i.date || i.invoice_date || i.quotation_date || i.claim_date || i.transaction_date || i.acquisition_date;
      return isDateInRange(valDate, reportStartDate, reportEndDate);
    });
  }

  return active;
}

function renderReportTable(db, type, selectedYear) {
  switch (type) {
    case "assets": {
      let records = filterByMonthAndDate(db.assets, selectedYear, "acquisition_date");
      const total = records.reduce((a, b) => a + (Number(b.value) || 0), 0);
      return `
        <table class="inst-table">
          <thead>
            <tr><th>NO. ID ASET</th><th>NAMA ASET</th><th>NO. SIRI / RUJUKAN</th><th>LOKASI</th><th>JENIS ASET</th><th>STATUS</th><th class="text-right">NILAI (RM)</th></tr>
          </thead>
          <tbody>
            ${
              records.length === 0
                ? `<tr><td colspan="7" class="text-center py-6 text-slate-400 font-medium">Tiada pendaftaran aset Akaun Amanah bagi tahun ${selectedYear === "2025" ? "2025 (Pendaftaran aset bermula tahun 2026)" : selectedYear}.</td></tr>`
                : records.map((r) => `<tr><td class="font-bold text-slate-900">${r.id}</td><td class="font-bold text-slate-800">${r.asset_name}</td><td class="font-mono text-xs">${r.serial_no || "-"}</td><td>${r.location || "-"}</td><td><span class="px-2 py-0.5 bg-indigo-50 text-indigo-800 font-bold rounded text-xs">${r.asset_type}</span></td><td>${r.status || "Aktif"}</td><td class="text-right font-extrabold text-indigo-700">${formatCurrency(r.value)}</td></tr>`).join("")
            }
          </tbody>
          <tfoot class="bg-slate-100 font-extrabold text-sm border-t-2 border-slate-300">
            <tr><td colspan="6" class="uppercase">JUMLAH KESELURUHAN NILAI ASET AKAUN AMANAH</td><td class="text-right text-indigo-700">${formatCurrency(total)}</td></tr>
          </tfoot>
        </table>
      `;
    }

    case "income": {
      const records = filterByMonthAndDate(db.incomes, selectedYear, "date");
      const total = records.reduce((a, b) => a + (Number(b.amount) || 0), 0);
      return `
        <table class="inst-table">
          <thead>
            <tr><th>NO. ID</th><th>UNIT</th><th>TARIKH</th><th>PROGRAM / KOD</th><th>PEMBAYAR / PELANGGAN</th><th>NO. RESIT</th><th class="text-right">JUMLAH (RM)</th></tr>
          </thead>
          <tbody>
            ${
              records.length === 0
                ? `<tr><td colspan="7" class="text-center py-6 text-slate-400 font-medium">Tiada rekod pendapatan bagi unit & julat tarikh ini (0 data).</td></tr>`
                : records.map((r) => `<tr><td class="font-bold text-slate-900">${r.id}</td><td><span class="px-2 py-0.5 bg-blue-50 text-blue-800 font-bold rounded text-xs">${r.unit || "PSH"}</span></td><td>${r.date || r.month}</td><td class="font-medium">${r.programme}</td><td>${r.payer || "Peserta"}</td><td class="font-mono text-xs">${r.receipt_no || "-"}</td><td class="text-right font-extrabold text-emerald-700">${formatCurrency(r.amount)}</td></tr>`).join("")
            }
          </tbody>
          <tfoot class="bg-slate-100 font-extrabold text-sm border-t-2 border-slate-300">
            <tr><td colspan="6" class="uppercase">JUMLAH KESELURUHAN PENDAPATAN ${reportUnitFilter !== "ALL" ? "(" + reportUnitFilter + ")" : ""}</td><td class="text-right text-emerald-700">${formatCurrency(total)}</td></tr>
          </tfoot>
        </table>
      `;
    }

    case "expense": {
      const records = filterByMonthAndDate(db.expenses, selectedYear, "date");
      const total = records.reduce((a, b) => a + (Number(b.amount) || 0), 0);
      return `
        <table class="inst-table">
          <thead>
            <tr><th>NO. ID</th><th>TARIKH</th><th>KETERANGAN PEROLEHAN</th><th>PEMBEKAL</th><th>NO. PO / SQ</th><th>STATUS</th><th class="text-right">JUMLAH (RM)</th></tr>
          </thead>
          <tbody>
            ${
              records.length === 0
                ? `<tr><td colspan="7" class="text-center py-6 text-slate-400 font-medium">Tiada rekod perbelanjaan bagi julat tarikh ini (0 data).</td></tr>`
                : records.map((r) => `<tr><td class="font-bold text-slate-900">${r.id}</td><td>${r.date || r.month}</td><td class="font-medium">${r.description}</td><td>${r.supplier || "-"}</td><td class="font-mono text-xs">${r.po_no || "-"}</td><td>${r.payment_status || "Paid"}</td><td class="text-right font-extrabold text-rose-700">${formatCurrency(r.amount)}</td></tr>`).join("")
            }
          </tbody>
          <tfoot class="bg-slate-100 font-extrabold text-sm border-t-2 border-slate-300">
            <tr><td colspan="6" class="uppercase">JUMLAH KESELURUHAN PERBELANJAAN</td><td class="text-right text-rose-700">${formatCurrency(total)}</td></tr>
          </tfoot>
        </table>
      `;
    }

    case "claims": {
      const records = filterByMonthAndDate(db.claims, selectedYear, "claim_date");
      const total = records.reduce((a, b) => a + (Number(b.amount) || 0), 0);
      return `
        <table class="inst-table">
          <thead>
            <tr><th>NO. ID</th><th>TARIKH</th><th>NAMA PENCERAMAH</th><th>PROGRAM / CERAMAH</th><th>STATUS</th><th class="text-right">JUMLAH (RM)</th></tr>
          </thead>
          <tbody>
            ${
              records.length === 0
                ? `<tr><td colspan="6" class="text-center py-6 text-slate-400 font-medium">Tiada tuntutan penceramah bagi julat tarikh ini (0 data).</td></tr>`
                : records.map((r) => `<tr><td class="font-bold text-slate-900">${r.id}</td><td>${r.claim_date || r.month}</td><td class="font-bold text-slate-800">${r.speaker}</td><td>${r.programme}</td><td>${r.status}</td><td class="text-right font-extrabold text-amber-700">${formatCurrency(r.amount)}</td></tr>`).join("")
            }
          </tbody>
          <tfoot class="bg-slate-100 font-extrabold text-sm border-t-2 border-slate-300">
            <tr><td colspan="5" class="uppercase">JUMLAH KESELURUHAN TUNTUTAN PENCERAMAH</td><td class="text-right text-amber-700">${formatCurrency(total)}</td></tr>
          </tfoot>
        </table>
      `;
    }

    case "invoices": {
      const records = filterByMonthAndDate(db.invoices, selectedYear, "invoice_date");
      const total = records.reduce((a, b) => a + (Number(b.amount) || 0), 0);
      return `
        <table class="inst-table">
          <thead>
            <tr><th>NO. INVOIS</th><th>TARIKH</th><th>TAJUK PROGRAM</th><th>KLIEN / BAYARAN MELALUI</th><th>STATUS</th><th class="text-right">JUMLAH (RM)</th></tr>
          </thead>
          <tbody>
            ${
              records.length === 0
                ? `<tr><td colspan="6" class="text-center py-6 text-slate-400 font-medium">Tiada rekod invois bagi julat tarikh ini (0 data).</td></tr>`
                : records.map((r) => `<tr><td class="font-bold text-slate-900">${r.invoice_no || r.id}</td><td>${r.invoice_date || r.month}</td><td class="font-medium">${r.description || r.programme}</td><td>${r.client}</td><td>${r.status}</td><td class="text-right font-extrabold text-blue-700">${formatCurrency(r.amount)}</td></tr>`).join("")
            }
          </tbody>
          <tfoot class="bg-slate-100 font-extrabold text-sm border-t-2 border-slate-300">
            <tr><td colspan="5" class="uppercase">JUMLAH KESELURUHAN NILAI INVOIS</td><td class="text-right text-blue-700">${formatCurrency(total)}</td></tr>
          </tfoot>
        </table>
      `;
    }

    case "quotations": {
      const records = filterByMonthAndDate(db.quotations, selectedYear, "quotation_date");
      const total = records.reduce((a, b) => a + (Number(b.amount) || 0), 0);
      return `
        <table class="inst-table">
          <thead>
            <tr><th>NO. SEBUTHARGA</th><th>TARIKH</th><th>TAJUK PROGRAM / PERKHIDMATAN</th><th>KLIEN / AGENSI</th><th>STATUS</th><th class="text-right">JUMLAH (RM)</th></tr>
          </thead>
          <tbody>
            ${
              records.length === 0
                ? `<tr><td colspan="6" class="text-center py-6 text-slate-400 font-medium">Tiada rekod sebutharga bagi julat tarikh ini (0 data).</td></tr>`
                : records.map((r) => `<tr><td class="font-bold text-slate-900">${r.quotation_no || r.id}</td><td>${r.quotation_date || r.month}</td><td class="font-medium">${r.description || r.programme}</td><td>${r.client}</td><td>${r.status}</td><td class="text-right font-extrabold text-purple-700">${formatCurrency(r.amount)}</td></tr>`).join("")
            }
          </tbody>
          <tfoot class="bg-slate-100 font-extrabold text-sm border-t-2 border-slate-300">
            <tr><td colspan="5" class="uppercase">JUMLAH KESELURUHAN NILAI SEBUTHARGA</td><td class="text-right text-purple-700">${formatCurrency(total)}</td></tr>
          </tfoot>
        </table>
      `;
    }

    case "stock": {
      const records = filterByMonthAndDate(db.stock, selectedYear, "transaction_date");
      const totalVal = records.reduce((a, b) => a + (Number(b.total) || 0), 0);
      return `
        <table class="inst-table">
          <thead>
            <tr><th>ID TRANSAKSI</th><th>TARIKH</th><th>PO NO.</th><th>PEMBEKAL</th><th>ITEM STOK</th><th>TERIMA (RX)</th><th>KELUAR (TX)</th><th class="text-right">JUMLAH (RM)</th></tr>
          </thead>
          <tbody>
            ${
              records.length === 0
                ? `<tr><td colspan="8" class="text-center py-6 text-slate-400 font-medium">Tiada transaksi stok bagi julat tarikh ini (0 data).</td></tr>`
                : records.map((r) => `<tr><td class="font-bold text-slate-900">${r.id}</td><td>${r.transaction_date || "-"}</td><td class="font-mono text-xs">${r.po_no}</td><td>${r.supplier}</td><td class="font-semibold text-slate-800">${r.item}</td><td class="text-emerald-700 font-bold">${r.received_qty}</td><td class="text-rose-700 font-bold">${r.issued_qty}</td><td class="text-right font-bold text-teal-700">${formatCurrency(r.total)}</td></tr>`).join("")
            }
          </tbody>
          <tfoot class="bg-slate-100 font-extrabold text-sm border-t-2 border-slate-300">
            <tr><td colspan="7" class="uppercase">JUMLAH KESELURUHAN TRANSAKSI STOK</td><td class="text-right text-teal-700">${formatCurrency(totalVal)}</td></tr>
          </tfoot>
        </table>
      `;
    }

    default: // Penyata Tahunan Summary
      return `
        <table class="inst-table">
          <thead>
            <tr><th>BULAN</th><th class="text-right">BAKI AWAL (RM)</th><th class="text-right">PENDAPATAN (RM)</th><th class="text-right">PERBELANJAAN (RM)</th><th class="text-right">TUNTUTAN (RM)</th><th class="text-right">BAKI PENUTUP (RM)</th></tr>
          </thead>
          <tbody>
            <tr><td class="font-bold">JANUARI 2025</td><td class="text-right">114,592.87</td><td class="text-right">0.00</td><td class="text-right">0.00</td><td class="text-right">0.00</td><td class="text-right font-semibold">114,592.87</td></tr>
            <tr><td class="font-bold">FEBRUARI 2025</td><td class="text-right">114,592.87</td><td class="text-right">0.00</td><td class="text-right text-rose-700 font-semibold">2,000.00</td><td class="text-right">0.00</td><td class="text-right font-semibold">112,592.87</td></tr>
            <tr><td class="font-bold">MAC 2025</td><td class="text-right">112,592.87</td><td class="text-right text-emerald-700 font-bold">450.00</td><td class="text-right">0.00</td><td class="text-right">0.00</td><td class="text-right font-semibold">113,042.87</td></tr>
            <tr><td class="font-bold">APRIL 2025</td><td class="text-right">113,042.87</td><td class="text-right text-emerald-700 font-bold">310.00</td><td class="text-right text-rose-700 font-bold">1,600.00</td><td class="text-right">0.00</td><td class="text-right font-semibold">111,752.87</td></tr>
            <tr><td class="font-bold">MEI 2025</td><td class="text-right">111,752.87</td><td class="text-right text-emerald-700 font-bold">4,470.00</td><td class="text-right text-rose-700 font-bold">11,476.00</td><td class="text-right">0.00</td><td class="text-right font-semibold">104,746.87</td></tr>
            <tr><td class="font-bold">JUN 2025</td><td class="text-right">104,746.87</td><td class="text-right text-emerald-700 font-bold">7,410.00</td><td class="text-right text-rose-700 font-bold">2,200.00</td><td class="text-right text-amber-700 font-bold">930.00</td><td class="text-right font-extrabold text-blue-900">109,026.87</td></tr>
          </tbody>
          <tfoot class="bg-slate-100 font-extrabold text-sm border-t-2 border-slate-300">
            <tr><td class="uppercase">JUMLAH KESELURUHAN TAHUNAN</td><td class="text-right">114,592.87</td><td class="text-right text-emerald-700">12,640.00</td><td class="text-right text-rose-700">18,206.00</td><td class="text-right text-amber-700">930.00</td><td class="text-right text-blue-900 font-extrabold">109,026.87</td></tr>
          </tfoot>
        </table>
      `;
  }
}

export function attachReportsEvents(db, onReportChange) {
  window.selectActiveReport = (reportId) => {
    showToast(`✓ Laporan ditukar ke: ${reportId.toUpperCase()}`);
    if (onReportChange) {
      onReportChange(reportId);
    }
  };

  const btnApply = document.getElementById("btn-apply-report-filter");
  const btnReset = document.getElementById("btn-reset-report-filter");
  const btnExcel = document.getElementById("btn-export-excel");
  const btnPdf = document.getElementById("btn-export-pdf");

  if (btnApply) {
    btnApply.onclick = () => {
      const unitSel = document.getElementById("report-unit-select");
      if (unitSel) reportUnitFilter = unitSel.value;
      reportMonthFilter = document.getElementById("report-month-select").value;
      reportStartDate = document.getElementById("report-start-date").value;
      reportEndDate = document.getElementById("report-end-date").value;
      showToast("✓ Tapisan unit, bulan & tarikh laporan dikemaskini");
      if (window.appRefreshUI) window.appRefreshUI();
      else window.location.reload();
    };
  }

  if (btnReset) {
    btnReset.onclick = () => {
      reportUnitFilter = "ALL";
      reportMonthFilter = "ALL";
      reportStartDate = "";
      reportEndDate = "";
      showToast("✓ Reset ke Laporan Keseluruhan");
      if (window.appRefreshUI) window.appRefreshUI();
      else window.location.reload();
    };
  }

  if (btnExcel) {
    btnExcel.onclick = () => {
      const activeReport = window.activeReportTypeState || "penyata";
      const wb = XLSX.utils.book_new();

      let exportData = [];
      let filename = `LAPORAN_${activeReport.toUpperCase()}.xlsx`;

      if (activeReport === "income") exportData = db.incomes || [];
      else if (activeReport === "expense") exportData = db.expenses || [];
      else if (activeReport === "claims") exportData = db.claims || [];
      else if (activeReport === "invoices") exportData = db.invoices || [];
      else if (activeReport === "quotations") exportData = db.quotations || [];
      else if (activeReport === "stock") exportData = db.stock || [];
      else if (activeReport === "assets") exportData = db.assets || [];
      else exportData = db.incomes || [];

      const sheet = XLSX.utils.json_to_sheet(exportData.filter((r) => r.record_status !== "DELETED"));
      XLSX.utils.book_append_sheet(wb, sheet, activeReport.toUpperCase());

      XLSX.writeFile(wb, filename);
      showToast(`✓ Fail Excel (${filename}) berjaya dimuat turun`);
    };
  }

  if (btnPdf) {
    btnPdf.onclick = () => {
      const activeReport = window.activeReportTypeState || "penyata";
      const doc = new jsPDF();

      doc.setFontSize(14);
      doc.setFont("helvetica", "bold");
      doc.text(`KOLEJ KOMUNITI SUNGAI PETANI`, 14, 15);
      doc.setFontSize(11);
      doc.text(`LAPORAN ${activeReport.toUpperCase()} AKAUN AMANAH`, 14, 22);
      doc.setFontSize(9);
      doc.setFont("helvetica", "normal");
      doc.text(`Tarikh Cetakan: ${new Date().toLocaleDateString("ms-MY")}`, 14, 28);

      doc.autoTable({
        html: "#printable-report-area table",
        startY: 34,
        styles: { fontSize: 9, cellPadding: 4 },
        headStyles: { fillColor: [15, 23, 42], textColor: [255, 255, 255], fontStyle: "bold" },
      });

      doc.save(`Laporan_${activeReport.toUpperCase()}_Akaun_Amanah.pdf`);
      showToast(`✓ Fail PDF (Laporan_${activeReport.toUpperCase()}.pdf) berjaya dimuat turun`);
    };
  }
}
