// System Settings & Database Maintenance View Component
import { updateSettings, resetToSeedData, exportDatabaseToJson, importDatabaseFromJsonFile } from "../services/api.js";
import { showToast } from "../components/Toast.js";
import { renderModal } from "../components/Modal.js";

export function renderSettingsView(db) {
  const settings = db.settings || {};

  return `
    <div class="space-y-6 animate-fade-in pb-10">
      <!-- Header -->
      <div class="flex items-center justify-between bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div>
          <h2 class="text-2xl font-extrabold text-slate-900 tracking-tight">TETAPAN SISTEM & INTEGRASI DATABASE</h2>
          <p class="text-xs font-medium text-slate-500 mt-1">Penyelenggaraan Database, Eksport/Import Fail Data & Sambungan Google Sheets</p>
        </div>
      </div>

      <!-- Settings Form Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Main Form Column -->
        <div class="lg:col-span-2 space-y-6">
          <form id="settings-form" class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h3 class="text-base font-bold text-slate-900 border-b pb-3">1. Tetapan Am & Organisasi</h3>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Nama Sistem</label>
                <input type="text" id="set-sysname" value="${settings.system_name || "Sistem Pengurusan Akaun Amanah"}" class="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold" />
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Nama Organisasi / Jabatan</label>
                <input type="text" id="set-orgname" value="${settings.organisation_name || "Kolej Komuniti Sungai Petani"}" class="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold" />
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Baki Awal Akaun (Opening Balance RM)</label>
                <input type="number" step="0.01" id="set-openingbal" value="${settings.opening_balance || 114592.87}" class="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-extrabold text-blue-900" />
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Tahun Kewangan Semasa</label>
                <input type="text" id="set-finyear" value="${settings.financial_year || "2025"}" class="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold" />
              </div>
            </div>

            <h3 class="text-base font-bold text-slate-900 border-b pb-3 pt-2">2. Metodologi Pengiraan Kewangan</h3>

            <div class="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-200">
              <div>
                <p class="text-xs font-bold text-slate-800">Termasuk Tuntutan Dalam Pengiraan Perbelanjaan (Include Claims in Expenditure)</p>
                <p class="text-[11px] text-slate-500">Jika YA, nilai tuntutan penceramah dikira di dalam jumlah perbelanjaan dan tidak ditolak dua kali.</p>
              </div>
              <input type="checkbox" id="set-include-claims" ${settings.include_claims_in_expenses ? "checked" : ""} class="w-5 h-5 text-blue-600 rounded cursor-pointer" />
            </div>

            <h3 class="text-base font-bold text-slate-900 border-b pb-3 pt-2">3. Integrasi Google Sheets Backend (API)</h3>

            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">Mod Sambungan API</label>
              <select id="set-apimode" class="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold">
                <option value="DEMO" ${settings.api_mode === "DEMO" ? "selected" : ""}>🟡 DEMO MODE (Local Storage & File Backup Database)</option>
                <option value="LIVE" ${settings.api_mode === "LIVE" ? "selected" : ""}>🟢 LIVE MODE (Google Sheets Apps Script API Sync)</option>
              </select>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">Google Apps Script Web App URL</label>
              <input type="url" id="set-gsurl" value="${settings.google_sheet_url || ""}" placeholder="https://script.google.com/macros/s/AKfycbx.../exec" class="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono" />
              <p class="text-[11px] text-slate-400 mt-1">Sila tampal URL Web App daripada Apps Script yang didaftarkan daripada fail Code.gs.</p>
            </div>

            <div class="pt-2">
              <button type="submit" class="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-md transition">
                💾 Simpan Tetapan
              </button>
            </div>
          </form>
        </div>

        <!-- Sidebar Maintenance & Backup Column -->
        <div class="space-y-6">
          <!-- Backup & Restore Data Box -->
          <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h4 class="text-sm font-extrabold text-slate-900 flex items-center gap-2">
              <span>💾</span> EKSPORT & IMPORT DATABASE BACKUP
            </h4>
            <p class="text-xs text-slate-500 leading-relaxed">
              Bagi memastikan data pangkalan data <strong>kekal dan dikemaskini merentasi komputer / pelayar lain</strong>, anda boleh memuat turun fail backup `.json` atau memuat naik semula fail backup terkini.
            </p>

            <div class="space-y-2 pt-1">
              <button id="btn-export-db" class="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-sm transition flex items-center justify-center gap-2">
                <span>📥</span> Muat Turun Backup JSON
              </button>

              <div class="relative">
                <input type="file" id="file-import-db" accept=".json" class="hidden" />
                <button id="btn-import-trigger" class="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-sm transition flex items-center justify-center gap-2">
                  <span>📤</span> Import Fail Backup JSON
                </button>
              </div>
            </div>
          </div>

          <!-- Reset Database Box -->
          <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h4 class="text-sm font-bold text-slate-900">Modul Penyelenggaraan Data</h4>
            <p class="text-xs text-slate-500">Anda boleh menetapkan semula pangkalan data kepada data awal asal (AKAUN AMANAH 2025.xlsx).</p>
            <button id="btn-reset-seed" class="w-full py-2.5 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 rounded-xl text-xs font-bold transition">
              🔄 Reset Ke Data Benih Asal
            </button>
          </div>

          <div class="bg-slate-900 text-white p-6 rounded-2xl shadow-sm space-y-3 text-xs">
            <h4 class="font-bold text-amber-400">📋 Panduan Pemasangan Apps Script:</h4>
            <ol class="list-decimal pl-4 space-y-2 opacity-90">
              <li>Buka Google Spreadsheet Akaun Amanah.</li>
              <li>Klik <span class="font-bold text-white">Extensions > Apps Script</span>.</li>
              <li>Tampal kod daripada fail <code class="bg-slate-800 px-1 rounded">backend/Code.gs</code>.</li>
              <li>Klik <span class="font-bold text-white">Deploy > New Deployment > Web App</span>.</li>
              <li>Tetapkan akses kepada <span class="font-bold text-emerald-400">Anyone</span>.</li>
              <li>Salin Web App URL dan tampal di borang tetapan di sebelah.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function attachSettingsEvents(db) {
  const form = document.getElementById("settings-form");
  if (form) {
    form.onsubmit = (e) => {
      e.preventDefault();
      const updated = {
        system_name: document.getElementById("set-sysname").value,
        organisation_name: document.getElementById("set-orgname").value,
        opening_balance: parseFloat(document.getElementById("set-openingbal").value) || 114592.87,
        financial_year: document.getElementById("set-finyear").value,
        include_claims_in_expenses: document.getElementById("set-include-claims").checked,
        api_mode: document.getElementById("set-apimode").value,
        google_sheet_url: document.getElementById("set-gsurl").value,
      };

      updateSettings(updated);
      showToast("✓ Tetapan sistem berjaya disimpan");
      setTimeout(() => window.location.reload(), 500);
    };
  }

  // Backup JSON Export Button
  const btnExport = document.getElementById("btn-export-db");
  if (btnExport) {
    btnExport.onclick = () => {
      exportDatabaseToJson();
      showToast("✓ Fail backup JSON berjaya dimuat turun");
    };
  }

  // Backup JSON Import Button
  const fileImportInput = document.getElementById("file-import-db");
  const btnImportTrigger = document.getElementById("btn-import-trigger");
  if (btnImportTrigger && fileImportInput) {
    btnImportTrigger.onclick = () => fileImportInput.click();
    fileImportInput.onchange = async (e) => {
      const file = e.target.files[0];
      if (!file) return;
      try {
        await importDatabaseFromJsonFile(file);
        showToast("✓ Pangkalan data berjaya dimuat naik & dikemaskini!");
        setTimeout(() => window.location.reload(), 600);
      } catch (err) {
        alert("Ralat semasa import fail: " + err.message);
      }
    };
  }

  const btnReset = document.getElementById("btn-reset-seed");
  if (btnReset) {
    btnReset.onclick = () => {
      renderModal({
        title: "Sahkan Reset Pangkalan Data",
        bodyHtml: `<p class="text-slate-700">Adakah anda pasti mahu menetapkan semula pangkalan data ke data asal seed workbook 2025?</p>`,
        footerButtons: [
          { label: "Batal", className: "px-4 py-2 border rounded-lg", onClick: (e, c) => c() },
          {
            label: "Ya, Reset Sekarang",
            className: "px-4 py-2 bg-rose-600 text-white rounded-lg font-bold",
            onClick: (e, close) => {
              resetToSeedData();
              showToast("✓ Database telah ditetapkan semula ke seed data");
              close();
              window.location.reload();
            },
          },
        ],
      });
    };
  }
}
