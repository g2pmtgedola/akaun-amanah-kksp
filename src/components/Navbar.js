// Top Navbar Component with Firebase Cloud Account & Multi-Device Real-Time Database Synchronization Engine
import { getCurrentUser, setCurrentUserRole, ROLES } from "../services/auth.js";
import { getSettings } from "../services/api.js";
import {
  getCloudSyncKey,
  getCloudSyncUrl,
  getCurrentFirebaseUser,
  loginFirebaseUser,
  registerFirebaseUser,
  resetPasswordFirebaseUser,
  logoutFirebaseUser,
  pullDatabaseFromCloud,
  forceSyncNow
} from "../services/cloudSync.js";
import { renderModal } from "./Modal.js";
import { showToast } from "./Toast.js";

export function renderNavbar({ selectedYear, onYearChange, onSearch, onQuickAdd }) {
  const user = getCurrentUser();
  const settings = getSettings();
  const cloudKey = getCloudSyncKey();
  const fbUser = getCurrentFirebaseUser();

  return `
    <header class="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-sm no-print">
      <div class="px-6 py-3 flex items-center justify-between gap-4">
        <!-- Left: Search Bar -->
        <div class="flex items-center gap-3 flex-1 max-w-md">
          <div class="relative w-full">
            <span class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              🔍
            </span>
            <input
              type="text"
              id="global-search-input"
              placeholder="Cari ID, program, pembekal, resit, invois, aset..."
              class="w-full pl-9 pr-4 py-2 bg-slate-100 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
            />
          </div>
        </div>

        <!-- Right: Controls & Status -->
        <div class="flex items-center gap-3">
          <!-- Year Selector -->
          <div class="flex items-center gap-2 bg-slate-100 p-1 rounded-xl border border-slate-200">
            <span class="text-xs font-semibold text-slate-500 pl-2">Tahun:</span>
            <select id="global-year-select" class="bg-white border-none rounded-lg text-xs font-bold text-slate-800 px-3 py-1.5 focus:outline-none shadow-sm cursor-pointer">
              <option value="2025" ${selectedYear === "2025" ? "selected" : ""}>2025</option>
              <option value="2026" ${selectedYear === "2026" ? "selected" : ""}>2026</option>
              <option value="2027" ${selectedYear === "2027" ? "selected" : ""}>2027</option>
              <option value="ALL" ${selectedYear === "ALL" ? "selected" : ""}>Semua Tahun</option>
            </select>
          </div>

          <!-- Firebase Cloud Login Button -->
          <button onclick="window.openCloudSyncModal()" class="px-3.5 py-1.5 ${fbUser ? 'bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border-emerald-300' : 'bg-indigo-50 hover:bg-indigo-100 text-indigo-900 border-indigo-200'} border rounded-xl text-xs font-bold shadow-sm transition flex items-center gap-1.5" title="Storan Awan Firebase">
            <span class="animate-pulse">☁️</span>
            <span>${fbUser ? fbUser.email.split('@')[0] : 'Log Masuk Awan'}</span>
          </button>

          <!-- Quick Actions Dropdown -->
          <div class="relative group">
            <button class="px-3.5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-sm transition flex items-center gap-1.5">
              <span>+ Tambah Rekod</span>
              <span class="text-[10px]">▼</span>
            </button>
            <div class="absolute right-0 mt-1 w-48 bg-white border border-slate-200 rounded-xl shadow-xl py-2 hidden group-hover:block z-50 animate-fade-in">
              <button class="w-full text-left px-4 py-2 text-xs hover:bg-slate-50 font-medium text-slate-700 flex items-center gap-2" onclick="window.appQuickAdd('Income')">
                <span class="text-emerald-600">💵</span> + Pendapatan
              </button>
              <button class="w-full text-left px-4 py-2 text-xs hover:bg-slate-50 font-medium text-slate-700 flex items-center gap-2" onclick="window.appQuickAdd('Expense')">
                <span class="text-rose-600">🛒</span> + Perbelanjaan
              </button>
              <button class="w-full text-left px-4 py-2 text-xs hover:bg-slate-50 font-medium text-slate-700 flex items-center gap-2" onclick="window.appQuickAdd('Claim')">
                <span class="text-amber-600">🎓</span> + Tuntutan Penceramah
              </button>
              <button class="w-full text-left px-4 py-2 text-xs hover:bg-slate-50 font-medium text-slate-700 flex items-center gap-2" onclick="window.appQuickAdd('Invoice')">
                <span class="text-blue-600">📄</span> + Invois
              </button>
              <button class="w-full text-left px-4 py-2 text-xs hover:bg-slate-50 font-medium text-slate-700 flex items-center gap-2" onclick="window.appQuickAdd('Quotation')">
                <span class="text-purple-600">📋</span> + Sebutharga
              </button>
              <button class="w-full text-left px-4 py-2 text-xs hover:bg-slate-50 font-medium text-slate-700 flex items-center gap-2" onclick="window.appQuickAdd('Asset')">
                <span class="text-indigo-600">🏛️</span> + Aset Akaun Amanah
              </button>
              <button class="w-full text-left px-4 py-2 text-xs hover:bg-slate-50 font-medium text-slate-700 flex items-center gap-2" onclick="window.appQuickAdd('Stock')">
                <span class="text-teal-600">📦</span> + Transaksi Stok
              </button>
            </div>
          </div>

          <!-- User Role Switcher -->
          <div class="flex items-center gap-2 pl-2 border-l border-slate-200">
            <select id="user-role-select" class="bg-slate-100 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 px-3 py-1.5 focus:outline-none cursor-pointer">
              <option value="${ROLES.ADMIN}" ${user.role === ROLES.ADMIN ? "selected" : ""}>👑 Pentadbir (Admin)</option>
              <option value="${ROLES.BENDAHARI}" ${user.role === ROLES.BENDAHARI ? "selected" : ""}>💰 Bendahari</option>
              <option value="${ROLES.SETIAUSAHA}" ${user.role === ROLES.SETIAUSAHA ? "selected" : ""}>📝 Setiausaha</option>
              <option value="${ROLES.STOCK_OFFICER}" ${user.role === ROLES.STOCK_OFFICER ? "selected" : ""}>📦 Pegawai Stok</option>
              <option value="${ROLES.VIEWER}" ${user.role === ROLES.VIEWER ? "selected" : ""}>👁️ Viewer (Read-only)</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  `;
}

// Global Firebase Cloud Auth & Sync Modal (Matching HBH-PMTG-V2 UI)
window.openCloudSyncModal = () => {
  const fbUser = getCurrentFirebaseUser();

  renderModal({
    title: "☁️ Storan Awan Firebase",
    bodyHtml: `
      <div class="space-y-4 text-xs">
        ${
          fbUser
            ? `
              <div class="bg-emerald-50 p-4 rounded-xl border border-emerald-200 space-y-3 text-center">
                <div class="text-2xl">🟢</div>
                <h4 class="font-extrabold text-emerald-900 text-sm">Status Awan Aktif & Tersambung</h4>
                <p class="text-slate-600">Log Masuk Sebagai: <strong class="text-emerald-800 font-mono">${fbUser.email}</strong></p>
                <p class="text-[11px] text-slate-500">Semua data sebutharga, invois, pendapatan & perbelanjaan diselaraskan secara masa-nyata (*real-time*) dengan peranti lain.</p>
                
                <div class="pt-2 flex flex-wrap items-center justify-center gap-2">
                  <button onclick="window.forceSyncNow()" class="px-4 py-2 bg-teal-700 hover:bg-teal-800 text-white font-bold rounded-xl shadow-sm transition flex items-center gap-1.5">
                    <span>🔄</span> Selaras Data Awan Sekarang
                  </button>
                  <button onclick="window.handleFirebaseLogout()" class="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl shadow-sm transition flex items-center gap-1.5">
                    <span>🚪</span> Log Keluar
                  </button>
                </div>
              </div>
            `
            : `
              <p class="text-slate-600 leading-relaxed text-center">
                Daftar atau Log Masuk akaun untuk mengawal penyelarasan data Akaun Amanah secara automatik di Awan. Data anda akan terus tersambung dari sebarang peranti!
              </p>

              <form id="firebase-auth-form" class="space-y-3 pt-1">
                <div>
                  <label class="block font-bold text-slate-800 mb-1">Alamat Emel:</label>
                  <input type="email" id="fb-email" value="azrulnizam@pmtg.edu.my" placeholder="contoh@pmtg.edu.my" class="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl font-semibold text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-600 text-xs" required />
                </div>

                <div>
                  <div class="flex items-center justify-between mb-1">
                    <label class="font-bold text-slate-800">Katalaluan:</label>
                    <button type="button" onclick="window.handleFirebaseResetPassword()" class="text-[11px] font-bold text-teal-700 hover:underline">
                      📧 Lupa Katalaluan?
                    </button>
                  </div>
                  <input type="password" id="fb-password" placeholder="••••••••••••" class="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl font-semibold text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-600 text-xs" required />
                </div>

                <div class="flex items-center gap-3 pt-2">
                  <button type="button" onclick="window.handleFirebaseLogin()" class="flex-1 py-2.5 bg-teal-700 hover:bg-teal-800 text-white font-extrabold rounded-xl shadow-md transition flex items-center justify-center gap-1.5">
                    <span>➜]</span> Log Masuk
                  </button>

                  <button type="button" onclick="window.handleFirebaseRegister()" class="flex-1 py-2.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 font-extrabold rounded-xl shadow-sm transition flex items-center justify-center gap-1.5">
                    <span>👤+</span> Daftar Akaun Baharu
                  </button>
                </div>
              </form>
            `
        }
      </div>
    `,
    footerButtons: [
      { label: "Tutup", className: "px-4 py-2 border rounded-lg text-slate-700", onClick: (e, c) => c() }
    ],
  });
};

window.handleFirebaseLogin = async () => {
  const email = document.getElementById("fb-email").value.trim();
  const password = document.getElementById("fb-password").value;

  if (!email || !password) {
    showToast("Sila masukkan alamat emel dan katalaluan.", "danger");
    return;
  }

  try {
    showToast("⌛ Menghubungkan ke Storan Awan Firebase...");
    await loginFirebaseUser(email, password);
    showToast("✓ Berjaya Log Masuk ke Storan Awan Firebase!");
    if (window.closeActiveModal) window.closeActiveModal();
    if (window.appRefreshUI) window.appRefreshUI();
    else window.location.reload();
  } catch (err) {
    let msg = err.message;
    if (msg.includes("invalid-credential") || msg.includes("INVALID_LOGIN_CREDENTIALS") || msg.includes("wrong-password")) {
      msg = "Katalaluan salah atau emel belum didaftarkan di Firebase. Tekan '📧 Lupa Katalaluan?' untuk set semula katalaluan anda.";
    }
    showToast("❌ Ralat Log Masuk: " + msg, "danger");
  }
};

window.handleFirebaseRegister = async () => {
  const email = document.getElementById("fb-email").value.trim();
  const password = document.getElementById("fb-password").value;

  if (!email || !password) {
    showToast("Sila masukkan alamat emel dan katalaluan.", "danger");
    return;
  }

  try {
    showToast("⌛ Mendaftarkan akaun di Storan Awan Firebase...");
    await registerFirebaseUser(email, password);
    showToast("✓ Akaun Storan Awan Firebase berjaya didaftarkan!");
    if (window.closeActiveModal) window.closeActiveModal();
    if (window.appRefreshUI) window.appRefreshUI();
    else window.location.reload();
  } catch (err) {
    let msg = err.message;
    if (msg.includes("email-already-in-use") || msg.includes("EMAIL_EXISTS")) {
      msg = "Emel ini sudah pernah didaftarkan. Sila tekan '➜] Log Masuk' atau tekan '📧 Lupa Katalaluan?' jika anda lupa katalaluan.";
    }
    showToast("ℹ️ " + msg, "danger");
  }
};

window.handleFirebaseResetPassword = async () => {
  const email = document.getElementById("fb-email").value.trim();
  if (!email) {
    showToast("Sila masukkan alamat emel anda terlebih dahulu.", "danger");
    return;
  }

  try {
    showToast("⌛ Menghantar pautan set semula katalaluan...");
    await resetPasswordFirebaseUser(email);
    showToast(`✓ Pautan reset katalaluan telah dihantar ke emel ${email}! Sila semak emel anda.`, "success");
  } catch (err) {
    showToast("❌ Ralat: " + err.message, "danger");
  }
};

window.handleFirebaseLogout = async () => {
  try {
    await logoutFirebaseUser();
    showToast("✓ Telah log keluar dari Storan Awan Firebase");
    if (window.closeActiveModal) window.closeActiveModal();
    if (window.appRefreshUI) window.appRefreshUI();
    else window.location.reload();
  } catch (err) {
    showToast("❌ Ralat: " + err.message, "danger");
  }
};
