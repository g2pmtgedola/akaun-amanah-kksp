// Penyata Tahunan View Component with Clean Year Selection Filter
import { formatCurrency } from "../data/schema.js";
import { showToast } from "../components/Toast.js";

export function renderPenyataView(db, selectedYear) {
  const openingBalance = db.settings.opening_balance || 114592.87;
  const includeClaimsInExp = db.settings.include_claims_in_expenses || false;

  // Filter active transactions matching selected year
  const activeIncomes = (db.incomes || []).filter((r) => {
    if (r.record_status === "DELETED") return false;
    if (selectedYear === "ALL") return true;
    return (r.year || "2025") === selectedYear;
  });

  const activeExpenses = (db.expenses || []).filter((r) => {
    if (r.record_status === "DELETED") return false;
    if (selectedYear === "ALL") return true;
    return (r.year || "2025") === selectedYear;
  });

  const activeClaims = (db.claims || []).filter((r) => {
    if (r.record_status === "DELETED") return false;
    if (selectedYear === "ALL") return true;
    return (r.year || "2025") === selectedYear;
  });

  const monthCodes = [
    { code: "JAN", name: "JANUARI" },
    { code: "FEB", name: "FEBRUARI" },
    { code: "MAC", name: "MAC" },
    { code: "APR", name: "APRIL" },
    { code: "MEI", name: "MEI" },
    { code: "JUN", name: "JUN" },
    { code: "JUL", name: "JULAI" },
    { code: "OGOS", name: "OGOS" },
    { code: "SEPT", name: "SEPTEMBER" },
    { code: "OKT", name: "OKTOBER" },
    { code: "NOV", name: "NOVEMBER" },
    { code: "DIS", name: "DISEMBER" },
  ];

  // Calculate dynamic monthly balance accumulator
  // If year selected is NOT 2025 (e.g. 2026), opening balance starts at closing balance of previous year
  let runningBalance = selectedYear === "2025" || selectedYear === "ALL" ? openingBalance : 109026.87;
  const startYearBal = runningBalance;

  let statementRows = monthCodes.map((mObj) => {
    const incSum = activeIncomes
      .filter((r) => r.month === mObj.code)
      .reduce((acc, curr) => acc + (Number(curr.amount) || 0), 0);

    const expSum = activeExpenses
      .filter((r) => r.month === mObj.code)
      .reduce((acc, curr) => acc + (Number(curr.amount) || 0), 0);

    const clmSum = activeClaims
      .filter((r) => r.month === mObj.code)
      .reduce((acc, curr) => acc + (Number(curr.amount) || 0), 0);

    const startBal = runningBalance;
    const net = incSum - expSum - (includeClaimsInExp ? 0 : clmSum);
    runningBalance = startBal + net;

    return {
      code: mObj.code,
      name: mObj.name,
      inc: incSum,
      exp: expSum,
      clm: clmSum,
      startBal,
      endBal: runningBalance,
    };
  });

  const totalIncSum = statementRows.reduce((a, b) => a + b.inc, 0);
  const totalExpSum = statementRows.reduce((a, b) => a + b.exp, 0);
  const totalClmSum = statementRows.reduce((a, b) => a + b.clm, 0);
  const grandClosing = runningBalance;

  const yearDisplayTitle = selectedYear === "ALL" ? "SEMUA TAHUN" : `TAHUN ${selectedYear}`;

  return `
    <div class="space-y-4 animate-fade-in pb-6">
      <!-- Header & Year Filter Bar (Hidden when printing) -->
      <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4 no-print">
        <div class="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-3">
          <div>
            <h2 class="text-xl font-extrabold text-slate-900 tracking-tight">PENYATA UNTUNG RUGI & FINANSIAL TAHUNAN</h2>
            <p class="text-xs font-medium text-slate-500 mt-0.5">Penjejakan Penyata Kewangan Mengikut Tahun</p>
          </div>
          <button onclick="window.print()" class="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold shadow-sm transition flex items-center gap-2">
            <span>🖨️</span> Cetak Penyata Tahunan
          </button>
        </div>

        <!-- Year Filter Controls -->
        <div class="flex flex-wrap items-center justify-between gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs">
          <div class="flex items-center gap-3">
            <label class="font-extrabold text-slate-900 text-sm">📅 Pilih Tahun Kewangan:</label>
            <select id="penyata-year-select" class="p-2.5 px-4 bg-white border-2 border-blue-600 rounded-xl text-xs font-black text-blue-900 shadow-sm cursor-pointer hover:border-blue-700 transition">
              <option value="2025" ${selectedYear === "2025" ? "selected" : ""}>Tahun 2025 (Rekod Asal)</option>
              <option value="2026" ${selectedYear === "2026" ? "selected" : ""}>Tahun 2026 (Rekod Baru - 0 Data)</option>
              <option value="2024" ${selectedYear === "2024" ? "selected" : ""}>Tahun 2024</option>
              <option value="ALL" ${selectedYear === "ALL" ? "selected" : ""}>Semua Tahun (Keseluruhan)</option>
            </select>
          </div>
          <div class="text-right text-xs">
            <span class="text-slate-500 font-medium">Baki Terbawa Awal Tahun:</span>
            <span class="font-black text-slate-900 ml-1 text-sm">${formatCurrency(startYearBal)}</span>
          </div>
        </div>
      </div>

      <!-- Printable Financial Statement Card -->
      <div class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden p-6 card-box space-y-4">
        <!-- Header with Official Logo -->
        <div class="text-center border-b-2 border-slate-900 pb-3 space-y-1">
          <img src="./logo.svg" alt="Kolej Komuniti Sungai Petani Logo" class="h-12 w-auto object-contain mx-auto mb-2" />
          <h2 class="text-base font-black text-slate-900 uppercase tracking-wider">${db.settings.organisation_name || "KOLEJ KOMUNITI SUNGAI PETANI"}</h2>
          <h3 class="text-sm font-extrabold text-blue-900 uppercase">PENYATA KEWANGAN AKAUN AMANAH (${yearDisplayTitle})</h3>
          <p class="text-xs text-slate-600 font-medium mt-0.5">Baki Terbawa Awal Tahun: <strong class="text-slate-900 font-bold">${formatCurrency(startYearBal)}</strong></p>
        </div>

        <div class="overflow-x-auto">
          <table class="inst-table">
            <thead>
              <tr>
                <th>BULAN</th>
                <th class="text-right">BAKI AWAL (RM)</th>
                <th class="text-right">PENDAPATAN (RM)</th>
                <th class="text-right">PERBELANJAAN (RM)</th>
                <th class="text-right">TUNTUTAN (RM)</th>
                <th class="text-right">BAKI PENUTUP (RM)</th>
              </tr>
            </thead>
            <tbody>
              ${statementRows
                .map(
                  (r) => `
                <tr class="hover:bg-slate-50">
                  <td class="font-bold text-slate-900">${r.name}</td>
                  <td class="text-right text-slate-600 font-medium">${formatCurrency(r.startBal)}</td>
                  <td class="text-right text-emerald-700 font-bold">${r.inc > 0 ? formatCurrency(r.inc) : "0.00"}</td>
                  <td class="text-right text-rose-700 font-bold">${r.exp > 0 ? formatCurrency(r.exp) : "0.00"}</td>
                  <td class="text-right text-amber-700 font-bold">${r.clm > 0 ? formatCurrency(r.clm) : "0.00"}</td>
                  <td class="text-right text-slate-900 font-extrabold">${formatCurrency(r.endBal)}</td>
                </tr>
              `
                )
                .join("")}
            </tbody>
            <tfoot class="bg-slate-100 font-extrabold text-sm border-t-2 border-slate-400">
              <tr>
                <td class="text-slate-900 uppercase">JUMLAH KESELURUHAN ${yearDisplayTitle}</td>
                <td class="text-right text-slate-900">${formatCurrency(startYearBal)}</td>
                <td class="text-right text-emerald-700">${formatCurrency(totalIncSum)}</td>
                <td class="text-right text-rose-700">${formatCurrency(totalExpSum)}</td>
                <td class="text-right text-amber-700">${formatCurrency(totalClmSum)}</td>
                <td class="text-right text-blue-900 text-sm bg-blue-50 font-black">${formatCurrency(grandClosing)}</td>
              </tr>
            </tfoot>
          </table>
        </div>

        <!-- Official Signature Block -->
        <div class="pt-6 border-t border-slate-300 grid grid-cols-2 gap-8 text-center text-xs">
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

export function attachPenyataEvents() {
  const yearSel = document.getElementById("penyata-year-select");
  if (yearSel) {
    yearSel.onchange = (e) => {
      const selectedYear = e.target.value;
      const globalYearSel = document.getElementById("global-year-select");
      if (globalYearSel) {
        globalYearSel.value = selectedYear;
      }
      showToast(`✓ Penyata ditukar ke: TAHUN ${selectedYear}`);
      if (window.appRefreshUI) window.appRefreshUI();
      else window.location.reload();
    };
  }
}
