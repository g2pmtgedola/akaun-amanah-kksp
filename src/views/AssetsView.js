// Asset Management View Component for Akaun Amanah with Direct Instant KEW.PA-3 & KEW.PA-4 Print Trigger
import { formatCurrency, STATUS_STYLES } from "../data/schema.js";
import { renderModal, showDeleteConfirmation } from "../components/Modal.js";
import { addRecord, updateRecord, deleteRecord } from "../services/api.js";
import { showToast } from "../components/Toast.js";
import { canEdit } from "../services/auth.js";

let activeAssetTypeFilter = "ALL";

export function renderAssetsView(db, selectedYear) {
  // Always include all registered active assets so newly added items are ALWAYS immediately visible!
  let records = (db.assets || []).filter((r) => r.record_status !== "DELETED");

  if (activeAssetTypeFilter !== "ALL") {
    records = records.filter((r) => r.asset_type === activeAssetTypeFilter);
  }

  const totalValue = records.reduce((acc, curr) => acc + (Number(curr.value) || 0), 0);
  const totalHartaModal = records.filter((r) => r.asset_type === "Harta Modal").length;
  const totalInventori = records.filter((r) => r.asset_type === "Inventori").length;

  return `
    <div class="space-y-6 animate-fade-in pb-10">
      <!-- Header Bar -->
      <div class="flex flex-wrap items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div>
          <h2 class="text-2xl font-extrabold text-slate-900 tracking-tight">MODUL PENGURUSAN ASET AKAUN AMANAH</h2>
          <p class="text-xs font-medium text-slate-500 mt-1">Pengurusan Pendaftaran, Lokasi & Nilai Harta Modal (KEW.PA-3) dan Inventori (KEW.PA-4)</p>
        </div>
        <div class="flex items-center gap-3">
          <span class="text-xs font-bold text-slate-700 bg-indigo-50 px-3.5 py-2.5 rounded-xl border border-indigo-200">
            Jumlah Nilai Aset: <span class="text-indigo-900 font-black text-sm">${formatCurrency(totalValue)}</span>
          </span>
          <button id="btn-add-asset" class="px-5 py-2.5 bg-amber-400 hover:bg-amber-500 rounded-xl text-xs font-black shadow-md transition flex items-center gap-1.5 border-2 border-slate-900" style="color: #000000 !important; font-weight: 900 !important;">
            <span class="text-sm font-black" style="color: #000000 !important;">+</span> Tambah Aset Baru
          </button>
        </div>
      </div>

      <!-- Quick Metrics Summary Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div class="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p class="text-xs font-extrabold text-slate-500 uppercase tracking-wider">NILAI KESELURUHAN ASET</p>
            <p class="text-xl font-black text-indigo-700 mt-1">${formatCurrency(totalValue)}</p>
          </div>
          <span class="text-2xl p-3 bg-indigo-50 text-indigo-700 rounded-2xl">🏛️</span>
        </div>

        <div class="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p class="text-xs font-extrabold text-slate-500 uppercase tracking-wider">HARTA MODAL (KEW.PA-3)</p>
            <p class="text-xl font-black text-blue-700 mt-1">${totalHartaModal} Unit</p>
          </div>
          <span class="text-2xl p-3 bg-blue-50 text-blue-700 rounded-2xl">🖥️</span>
        </div>

        <div class="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p class="text-xs font-extrabold text-slate-500 uppercase tracking-wider">INVENTORI (KEW.PA-4)</p>
            <p class="text-xl font-black text-purple-700 mt-1">${totalInventori} Unit</p>
          </div>
          <span class="text-2xl p-3 bg-purple-50 text-purple-700 rounded-2xl">🖨️</span>
        </div>
      </div>

      <!-- Filter Controls Bar -->
      <div class="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-4 text-xs">
        <div class="flex items-center gap-2">
          <span class="font-extrabold text-slate-700 uppercase tracking-wider">Tapis Jenis Aset:</span>
          <div class="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
            <button onclick="window.filterAssetType('ALL')" class="px-3 py-1.5 rounded-lg font-bold transition ${activeAssetTypeFilter === "ALL" ? "bg-white text-slate-900 shadow-sm" : "text-slate-600 hover:text-slate-900"}">Semua Aset (${(db.assets || []).filter((r) => r.record_status !== "DELETED").length})</button>
            <button onclick="window.filterAssetType('Harta Modal')" class="px-3 py-1.5 rounded-lg font-bold transition ${activeAssetTypeFilter === "Harta Modal" ? "bg-blue-600 text-white shadow-sm" : "text-slate-600 hover:text-slate-900"}">Harta Modal (KEW.PA-3)</button>
            <button onclick="window.filterAssetType('Inventori')" class="px-3 py-1.5 rounded-lg font-bold transition ${activeAssetTypeFilter === "Inventori" ? "bg-purple-600 text-white shadow-sm" : "text-slate-600 hover:text-slate-900"}">Inventori (KEW.PA-4)</button>
          </div>
        </div>
        <div class="text-slate-500 font-medium">
          Status Rekod: <strong class="text-emerald-700 font-bold">Semua Aset Berdaftar (Aktif)</strong>
        </div>
      </div>

      <!-- Data Table Container -->
      <div class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div class="overflow-x-auto">
          <table class="inst-table">
            <thead>
              <tr>
                <th>NO. ID ASET</th>
                <th>NAMA ASET</th>
                <th>NO. SIRI / RUJUKAN</th>
                <th>LOKASI</th>
                <th>JENIS ASET</th>
                <th class="text-right">NILAI (RM)</th>
                <th>STATUS</th>
                <th class="text-center">TINDAKAN</th>
              </tr>
            </thead>
            <tbody>
              ${
                records.length === 0
                  ? `
                    <tr>
                      <td colspan="8" class="text-center py-12 text-slate-400">
                        <div class="max-w-md mx-auto space-y-2">
                          <span class="text-4xl block">🏛️</span>
                          <p class="font-bold text-slate-700 text-sm">Tiada Rekod Pendaftaran Aset</p>
                          <p class="text-xs text-slate-500">Sila tekan "+ Tambah Aset Baru" di atas untuk mendaftarkan Harta Modal (KEW.PA-3) atau Inventori (KEW.PA-4).</p>
                        </div>
                      </td>
                    </tr>
                  `
                  : records
                      .map((r) => {
                        const isHartaModal = r.asset_type === "Harta Modal";
                        return `
                          <tr class="hover:bg-slate-50">
                            <td class="font-bold text-slate-900 font-mono">${r.id}</td>
                            <td class="font-extrabold text-slate-900 max-w-xs">${r.asset_name}</td>
                            <td class="font-mono text-xs text-slate-600">${r.serial_no || "-"}</td>
                            <td class="text-slate-700 font-semibold">${r.location || "-"}</td>
                            <td>
                              <span class="px-2.5 py-1 font-extrabold rounded-lg text-xs border ${
                                isHartaModal
                                  ? "bg-blue-50 text-blue-800 border-blue-200"
                                  : "bg-purple-50 text-purple-800 border-purple-200"
                              }">
                                ${r.asset_type || "Inventori"}
                              </span>
                            </td>
                            <td class="text-right font-black text-indigo-700">${formatCurrency(r.value)}</td>
                            <td>
                              <span class="status-badge ${
                                r.status === "Aktif"
                                  ? STATUS_STYLES.Paid
                                  : r.status === "Diselenggara"
                                  ? STATUS_STYLES.Pending
                                  : STATUS_STYLES.Cancelled
                              }">
                                ${r.status || "Aktif"}
                              </span>
                            </td>
                            <td class="text-center">
                              <div class="flex items-center justify-center gap-1">
                                <button class="p-1.5 hover:bg-indigo-50 text-indigo-700 rounded-lg text-xs font-bold flex items-center gap-1" title="Cetak Borang Rasmi ${isHartaModal ? "KEW.PA-3" : "KEW.PA-4"}" onclick="window.printSingleAssetForm('${r.id}')">
                                  <span>🖨️</span> ${isHartaModal ? "KEW.PA-3" : "KEW.PA-4"}
                                </button>
                                ${
                                  canEdit()
                                    ? `
                                      <button class="p-1.5 hover:bg-slate-100 rounded-lg text-xs" title="Edit" onclick="window.editAssetRecord('${r.id}')">✏️</button>
                                      <button class="p-1.5 hover:bg-rose-50 text-rose-600 rounded-lg text-xs" title="Padam" onclick="window.deleteAssetRecord('${r.id}')">🗑️</button>
                                    `
                                    : ""
                                }
                              </div>
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
    </div>
  `;
}

export function openAssetFormModal(db, record = null) {
  const isEdit = !!record;
  renderModal({
    title: isEdit ? `Kemaskini Rekod Aset (${record.id})` : "Tambah Pendaftaran Aset Baru",
    bodyHtml: `
      <form id="asset-form" class="space-y-4 text-xs">
        <div>
          <label class="block font-bold text-slate-700 mb-1">Nama Aset / Keterangan Peralatan</label>
          <input type="text" id="ast-name" value="${record ? record.asset_name || "" : ""}" placeholder="Contoh: Komputer Riba Dell / Pencetak Laser..." class="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-semibold focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-600" required />
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block font-bold text-slate-700 mb-1">Jenis Aset (Borang Rasmi)</label>
            <select id="ast-type" class="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-bold focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-600" required>
              <option value="Harta Modal" ${record && record.asset_type === "Harta Modal" ? "selected" : ""}>Harta Modal (Borang KEW.PA-3 - RM2,000 ke atas)</option>
              <option value="Inventori" ${record && record.asset_type === "Inventori" ? "selected" : ""}>Inventori (Borang KEW.PA-4 - Bawah RM2,000)</option>
            </select>
          </div>
          <div>
            <label class="block font-bold text-slate-700 mb-1">No. Siri Pendaftaran / No. Rujukan Aset</label>
            <input type="text" id="ast-serial" value="${record ? record.serial_no || "" : ""}" placeholder="KKSP/AM/HM/2026/001" class="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-mono focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-600" required />
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block font-bold text-slate-700 mb-1">Lokasi Penempatan</label>
            <input type="text" id="ast-location" value="${record ? record.location || "" : ""}" placeholder="Pejabat Akaun Amanah / Pejabat HEP" class="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-semibold focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-600" required />
          </div>
          <div>
            <label class="block font-bold text-slate-700 mb-1">Harga Perolehan Asal (RM)</label>
            <input type="number" step="0.01" id="ast-value" value="${record ? record.value || "" : ""}" placeholder="4850.00" class="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-bold text-indigo-700 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-600" required />
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block font-bold text-slate-700 mb-1">Tarikh Perolehan (DD/MM/YYYY)</label>
            <input type="text" id="ast-date" value="${record ? record.acquisition_date || "" : "15/01/2026"}" placeholder="15/01/2026" class="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-semibold focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-600" />
          </div>
          <div>
            <label class="block font-bold text-slate-700 mb-1">Status Aset</label>
            <select id="ast-status" class="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-semibold focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-600">
              <option value="Aktif" ${record && record.status === "Aktif" ? "selected" : ""}>Aktif (Boleh Digunakan)</option>
              <option value="Diselenggara" ${record && record.status === "Diselenggara" ? "selected" : ""}>Diselenggara / Rosak</option>
              <option value="Dilupuskan" ${record && record.status === "Dilupuskan" ? "selected" : ""}>Dilupuskan</option>
            </select>
          </div>
        </div>
      </form>
    `,
    footerButtons: [
      { label: "Batal", className: "px-4 py-2 border rounded-lg text-slate-700", onClick: (e, c) => c() },
      {
        label: isEdit ? "Kemaskini Rekod" : "Simpan Aset",
        className: "px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold shadow-md",
        onClick: async (e, close) => {
          const form = document.getElementById("asset-form");
          if (!form.checkValidity()) {
            form.reportValidity();
            return;
          }

          const payload = {
            id: isEdit ? record.id : `AST-2026-${String((db.assets || []).length + 1).padStart(4, "0")}`,
            asset_name: document.getElementById("ast-name").value,
            asset_type: document.getElementById("ast-type").value,
            serial_no: document.getElementById("ast-serial").value,
            location: document.getElementById("ast-location").value,
            value: parseFloat(document.getElementById("ast-value").value) || 0,
            acquisition_date: document.getElementById("ast-date").value,
            year: "2026",
            status: document.getElementById("ast-status").value,
          };

          if (isEdit) await updateRecord("Asset", payload);
          else await addRecord("Asset", payload);

          showToast(isEdit ? "✓ Rekod aset dikemaskini" : "✓ Rekod pendaftaran aset berjaya disimpan");
          close();
          if (window.appRefreshUI) window.appRefreshUI();
          else window.location.reload();
        },
      },
    ],
  });
}

export function attachAssetsEvents(db) {
  window.openAssetFormModal = (dbRef, rec) => openAssetFormModal(dbRef || db, rec);

  window.filterAssetType = (type) => {
    activeAssetTypeFilter = type;
    if (window.appRefreshUI) window.appRefreshUI();
  };

  const addBtn = document.getElementById("btn-add-asset");
  if (addBtn) {
    addBtn.onclick = () => openAssetFormModal(db);
  }

  // Direct Instant Printable Form Generator (No Modal View - Opens Browser Print Menu Immediately)
  window.printSingleAssetForm = (id) => {
    const rec = (db.assets || []).find((r) => r.id === id);
    if (!rec) return;

    const isHartaModal = rec.asset_type === "Harta Modal";
    const formTitle = isHartaModal ? "DAFTAR HARTA MODAL" : "DAFTAR ASET ALIH BERNILAI RENDAH";
    const kewCode = isHartaModal ? "KEW.PA-3" : "KEW.PA-4";
    const lampiranCode = isHartaModal ? "AM 2.3 Lampiran A" : "AM 2.3 Lampiran B";
    const serialNoDisplay = rec.serial_no || rec.id;

    let directContainer = document.getElementById("direct-print-container");
    if (!directContainer) {
      directContainer = document.createElement("div");
      directContainer.id = "direct-print-container";
      document.body.appendChild(directContainer);
    }

    directContainer.innerHTML = `
      <div id="single-asset-print-form" class="bg-white p-4 text-slate-900 font-serif text-[11px] leading-snug space-y-3">
        <!-- Top Header Line -->
        <div class="flex items-center justify-between border-b border-slate-900 pb-1 text-[10px]">
          <span class="font-bold">Pekeliling Perbendaharaan Malaysia</span>
          <div class="text-right">
            <span class="font-bold block">${lampiranCode}</span>
            <span class="font-black text-xs block">${kewCode}</span>
            <span class="text-[9px] text-slate-700 block">(No. Siri Pendaftaran: ${serialNoDisplay})</span>
          </div>
        </div>

        <!-- Form Title -->
        <div class="text-center py-1">
          <h2 class="text-base font-black uppercase tracking-wider underline">${formTitle}</h2>
        </div>

        <!-- Department Header -->
        <div class="space-y-1 text-xs">
          <p><strong>Kementerian/ Jabatan :</strong> KEMENTERIAN PENDIDIKAN TINGGI / KOLEJ KOMUNITI SUNGAI PETANI</p>
          <p><strong>Bahagian :</strong> UNIT AKAUN AMANAH</p>
        </div>

        <div class="text-center bg-slate-200 font-black border-2 border-slate-900 py-1 text-xs uppercase tracking-wider">BAHAGIAN A</div>

        <!-- Main Table Grid matching Government Form -->
        <table class="w-full border-collapse border-2 border-slate-900 text-[11px]">
          <tbody>
            <tr>
              <td class="border border-slate-900 p-2 font-bold w-1/3">Kod Nasional</td>
              <td class="border border-slate-900 p-2 font-mono w-1/6">002003019</td>
              <td class="border border-slate-900 p-2 font-bold w-1/4">Harga Perolehan Asal (RM)</td>
              <td class="border border-slate-900 p-2 font-black text-right w-1/4 text-sm">${formatCurrency(rec.value)}</td>
            </tr>
            <tr>
              <td class="border border-slate-900 p-2 font-bold">Keterangan Aset</td>
              <td class="border border-slate-900 p-2 font-black" colspan="3">${rec.asset_name}</td>
            </tr>
            <tr>
              <td class="border border-slate-900 p-2 font-bold">Kategori</td>
              <td class="border border-slate-900 p-2 font-semibold" colspan="3">${isHartaModal ? "PERALATAN DAN KELENGKAPAN PEJABAT" : "PERALATAN INVENTORI & PEJABAT"}</td>
            </tr>
            <tr>
              <td class="border border-slate-900 p-2 font-bold">Sub Kategori</td>
              <td class="border border-slate-900 p-2 font-semibold">${isHartaModal ? "PERALATAN PANDANG DENGAR / TEKNOLOGI" : "PERALATAN PEJABAT BERNILAI RENDAH"}</td>
              <td class="border border-slate-900 p-2 font-bold">Tarikh Perolehan</td>
              <td class="border border-slate-900 p-2 font-semibold">${rec.acquisition_date || "15/01/2026"}</td>
            </tr>
            <tr>
              <td class="border border-slate-900 p-2 font-bold">Jenis/ Jenama/ Model</td>
              <td class="border border-slate-900 p-2 font-semibold">${rec.asset_name}</td>
              <td class="border border-slate-900 p-2 font-bold">Tarikh Diterima</td>
              <td class="border border-slate-900 p-2 font-semibold">${rec.acquisition_date || "15/01/2026"}</td>
            </tr>
            <tr>
              <td class="border border-slate-900 p-2 font-bold">Buatan / Asal</td>
              <td class="border border-slate-900 p-2 font-semibold">MALAYSIA</td>
              <td class="border border-slate-900 p-2 font-bold">No. Pesanan Rasmi (PO)</td>
              <td class="border border-slate-900 p-2 font-mono">PO250000000762636</td>
            </tr>
            <tr>
              <td class="border border-slate-900 p-2 font-bold">No. Casis / Siri Pembuat</td>
              <td class="border border-slate-900 p-2 font-mono">${rec.serial_no || "-"}</td>
              <td class="border border-slate-900 p-2 font-bold">Tempoh Jaminan</td>
              <td class="border border-slate-900 p-2 font-semibold">1 TAHUN</td>
            </tr>
            <tr>
              <td class="border border-slate-900 p-2 font-bold">No Pendaftaran (Bagi Kenderaan)</td>
              <td class="border border-slate-900 p-2">-</td>
              <td class="border border-slate-900 p-2 font-bold" rowspan="2">Nama Pembekal & Alamat</td>
              <td class="border border-slate-900 p-2 font-medium text-[10px]" rowspan="2">
                NZ ANTARES ENTERPRISE, 77 LENGKOK CEMPAKA 1, PUSAT BANDAR AMANJAYA, 08000 SUNGAI PETANI, KEDAH
              </td>
            </tr>
            <tr>
              <td class="border border-slate-900 p-2 font-bold">Spesifikasi / Catatan</td>
              <td class="border border-slate-900 p-2 font-semibold">${isHartaModal ? "HARTA MODAL AKAUN AMANAH" : "INVENTORI AKAUN AMANAH"}</td>
            </tr>
            <tr>
              <td class="border border-slate-900 p-3" colspan="2"></td>
              <td class="border border-slate-900 p-3 text-xs" colspan="2">
                <p class="font-bold">Nama Ketua Jabatan : __________________</p>
                <p class="font-semibold mt-1.5">Jawatan : PENGARAH / PEGAWAI AMANAH</p>
                <p class="font-semibold mt-1">Tarikh : ${rec.acquisition_date || "15/01/2026"}</p>
              </td>
            </tr>
          </tbody>
        </table>

        <!-- PENEMPATAN SECTION TABLE -->
        <div class="text-center bg-slate-200 font-black border-2 border-slate-900 py-1 text-xs uppercase tracking-wider mt-3">PENEMPATAN</div>
        <table class="w-full border-collapse border-2 border-slate-900 text-[10.5px]">
          <thead>
            <tr class="bg-slate-100">
              <th class="border border-slate-900 p-1.5 text-left w-1/4 font-bold">LOKASI</th>
              <th class="border border-slate-900 p-1.5 text-center w-1/6 font-bold">TARIKH</th>
              <th class="border border-slate-900 p-1.5 text-left w-1/3 font-bold">NAMA PEGAWAI</th>
              <th class="border border-slate-900 p-1.5 text-center w-1/4 font-bold">TANDATANGAN</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-slate-900 p-2 font-bold">${rec.location || "Pejabat Akaun Amanah"}</td>
              <td class="border border-slate-900 p-2 text-center font-semibold">${rec.acquisition_date || "15/01/2026"}</td>
              <td class="border border-slate-900 p-2 font-semibold">PENYELARAS ASET AKAUN AMANAH</td>
              <td class="border border-slate-900 p-2 text-center">__________________</td>
            </tr>
            <tr><td class="border border-slate-900 p-2.5" colspan="4">&nbsp;</td></tr>
            <tr><td class="border border-slate-900 p-2.5" colspan="4">&nbsp;</td></tr>
          </tbody>
        </table>

        <!-- PEMERIKSAAN SECTION TABLE -->
        <div class="text-center bg-slate-200 font-black border-2 border-slate-900 py-1 text-xs uppercase tracking-wider mt-3">PEMERIKSAAN</div>
        <table class="w-full border-collapse border-2 border-slate-900 text-[10.5px]">
          <thead>
            <tr class="bg-slate-100">
              <th class="border border-slate-900 p-1.5 text-center w-1/6 font-bold">TARIKH</th>
              <th class="border border-slate-900 p-1.5 text-left w-1/3 font-bold">STATUS ASET</th>
              <th class="border border-slate-900 p-1.5 text-left w-1/3 font-bold">NAMA PEMERIKSA</th>
              <th class="border border-slate-900 p-1.5 text-center w-1/6 font-bold">TANDATANGAN</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-slate-900 p-2 text-center font-semibold">${rec.acquisition_date || "15/01/2026"}</td>
              <td class="border border-slate-900 p-2 font-bold text-emerald-800">${rec.status || "Aktif"}</td>
              <td class="border border-slate-900 p-2 font-semibold">PEGAWAI PEMERIKSA ASET</td>
              <td class="border border-slate-900 p-2 text-center">__________________</td>
            </tr>
            <tr><td class="border border-slate-900 p-2.5" colspan="4">&nbsp;</td></tr>
            <tr><td class="border border-slate-900 p-2.5" colspan="4">&nbsp;</td></tr>
          </tbody>
        </table>

        <!-- PELUPUSAN / HAPUS KIRA SECTION TABLE -->
        <div class="text-center bg-slate-200 font-black border-2 border-slate-900 py-1 text-xs uppercase tracking-wider mt-3">PINDAHAN / PELUPUSAN / HAPUS KIRA</div>
        <table class="w-full border-collapse border-2 border-slate-900 text-[10.5px]">
          <thead>
            <tr class="bg-slate-100">
              <th class="border border-slate-900 p-1.5 text-left w-1/4 font-bold">PERKARA</th>
              <th class="border border-slate-900 p-1.5 text-left w-1/3 font-bold">RUJUKAN KELULUSAN</th>
              <th class="border border-slate-900 p-1.5 text-center w-1/6 font-bold">TARIKH KELULUSAN</th>
              <th class="border border-slate-900 p-1.5 text-left w-1/4 font-bold">NAMA PEGAWAI</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="border border-slate-900 p-2.5" colspan="4">&nbsp;</td></tr>
            <tr><td class="border border-slate-900 p-2.5" colspan="4">&nbsp;</td></tr>
          </tbody>
        </table>
      </div>
    `;

    // Immediately trigger browser print menu dialog!
    window.print();

    // Clean up printable container after print
    setTimeout(() => {
      directContainer.innerHTML = "";
    }, 1000);
  };

  window.editAssetRecord = (id) => {
    const rec = (db.assets || []).find((r) => r.id === id);
    if (rec) openAssetFormModal(db, rec);
  };

  window.deleteAssetRecord = (id) => {
    const rec = (db.assets || []).find((r) => r.id === id);
    if (!rec) return;
    showDeleteConfirmation({
      recordId: rec.id,
      description: rec.asset_name,
      amount: formatCurrency(rec.value),
      onConfirm: async () => {
        await deleteRecord("Asset", rec.id);
        showToast("✓ Rekod pendaftaran aset dipadam");
        if (window.appRefreshUI) window.appRefreshUI();
        else window.location.reload();
      },
    });
  };
}
