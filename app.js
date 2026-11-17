/* ==========================================================================
   APP.JS — ENJIN PEMBELAJARAN INTERAKTIF MASTERACADEMIQ.AI TINGKATAN 4
   Menyokong 6 Subjek: SEJARAH, SAINS, MATEMATIK, KIMIA, FIZIK & BIOLOGI TINGKATAN 4 KSSM
   ========================================================================== */

let currentForm = 5; // Default to Tingkatan 5 (SPM)
let portalSelectedForm = 5;
let currentSubject = "sejarah"; // 'sejarah' | 'sains' | 'matematik' | 'kimia' | 'fizik' | 'biologi'
let currentBabId = "sej5-bab1";
let currentMainView = "nota";
let noteDisplayMode = "both"; // 'both' | 'verbatim'
let userXP = 0;
let completedQuizzes = new Set();
let topicQuizState = {};
let examQuizState = {};
let flashcardList = [];
let currentFlashcardIndex = 0;

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  initAmbientParticles();

  // Semak jika pengguna telah memilih tingkatan dan subjek sebelum ini
  try {
    const savedForm = localStorage.getItem("academiq_form");
    if (savedForm && (savedForm === "4" || savedForm === "5")) {
      currentForm = parseInt(savedForm, 10);
      portalSelectedForm = currentForm;
    }
    const savedSubject = localStorage.getItem("academiq_subject");
    if (savedSubject && ["sejarah", "sains", "matematik", "kimia", "fizik", "biologi", "perakaunan", "ekonomi"].includes(savedSubject)) {
      setForm(currentForm, false);
      setSubject(savedSubject, false);
      closeSubjectPortal();
    } else {
      setForm(currentForm, false);
      openSubjectPortal();
    }
  } catch (e) {
    setForm(currentForm, false);
    openSubjectPortal();
  }

  // Render Portal Cards with selected form
  renderPortalCards(portalSelectedForm);
});

/* ==========================================================================
   1. PORTAL PEMILIHAN AWAL SUBJEK (SUBJECT HUB) & FORM SWITCHER
   ========================================================================== */
function openSubjectPortal() {
  const portal = document.getElementById("subject-selection-portal");
  if (portal) {
    portal.classList.remove("portal-hidden");
    renderPortalCards(portalSelectedForm);
  }
}

function closeSubjectPortal() {
  const portal = document.getElementById("subject-selection-portal");
  if (portal) {
    portal.classList.add("portal-hidden");
  }
}

function switchPortalForm(form) {
  portalSelectedForm = parseInt(form, 10);
  const pBtn4 = document.getElementById("p-form-4");
  const pBtn5 = document.getElementById("p-form-5");
  if (pBtn4 && pBtn5) {
    if (portalSelectedForm === 5) {
      pBtn5.classList.add("active");
      pBtn4.classList.remove("active");
    } else {
      pBtn4.classList.add("active");
      pBtn5.classList.remove("active");
    }
  }
  renderPortalCards(portalSelectedForm);
}

function renderPortalCards(form) {
  const container = document.getElementById("subject-cards-grid");
  if (!container) return;

  if (form === 5) {
    container.innerHTML = `
      <!-- KAD 1: SEJARAH TINGKATAN 5 -->
      <div class="subject-hero-card card-sejarah" onclick="selectSubjectAndEnter('sejarah', 5)">
        <div class="shc-glow"></div>
        <div class="shc-badge badge-history">📘 SILIBUS KSSM TINGKATAN 5</div>
        <div class="shc-avatar-wrap">
          <img src="assets/hero-tutor.png" alt="Tutor Sejarah 3D" class="shc-avatar-img" />
          <div class="shc-mini-floats">
            <span class="sm-float sf-1">👑</span>
            <span class="sm-float sf-2">📜</span>
            <span class="sm-float sf-3">1963</span>
          </div>
        </div>
        <div class="shc-body">
          <h2 class="shc-title">SEJARAH TINGKATAN 5</h2>
          <p class="shc-summary">Kedaulatan Negara, Perlembagaan Persekutuan, Raja Berperlembagaan, Sistem Persekutuan, Pembentukan Malaysia 1963, Cabaran Pasca-Malaysia, Dasar Perpaduan, Ekonomi & Dasar Luar.</p>
          <div class="shc-features">
            <span class="shc-pill">📚 10 Bab & 51 Subtopik</span>
            <span class="shc-pill">⚡ Key Points & Flashcards</span>
            <span class="shc-pill">🎯 50+ Kuiz & SPM Struktur</span>
          </div>
          <button class="shc-btn btn-history-enter" onclick="event.stopPropagation(); selectSubjectAndEnter('sejarah', 5)">
            <span>Masuk Kelas Sejarah T5</span>
            <span class="btn-arrow">➔</span>
          </button>
        </div>
      </div>

      <!-- KAD 2: SAINS TINGKATAN 5 -->
      <div class="subject-hero-card card-sains" onclick="selectSubjectAndEnter('sains', 5)">
        <div class="shc-glow"></div>
        <div class="shc-badge badge-science">🔬 SILIBUS KSSM TINGKATAN 5</div>
        <div class="shc-avatar-wrap">
          <img src="assets/hero-science-tutor.png" alt="Tutor Sains 3D" class="shc-avatar-img" />
          <div class="shc-mini-floats">
            <span class="sm-float sf-1">🦠</span>
            <span class="sm-float sf-2">⚡</span>
            <span class="sm-float sf-3">🚀</span>
          </div>
        </div>
        <div class="shc-body">
          <h2 class="shc-title">SAINS TINGKATAN 5</h2>
          <p class="shc-summary">Mikroorganisma & Patogen, Nutrisi & Kalori, Kelestarian Alam Sekitar, Kimia Pengguna & Perubatan, Sebatian Karbon, Sel Kimia & Elektrolisis, Cahaya & Optik, serta Teknologi Angkasa Lepas.</p>
          <div class="shc-features">
            <span class="shc-pill">🧪 9 Bab & 27 Subtopik</span>
            <span class="shc-pill">💡 Eksperimen & Skema SPM</span>
            <span class="shc-pill">🎯 45+ Kuiz & Kertas 2</span>
          </div>
          <button class="shc-btn btn-science-enter" onclick="event.stopPropagation(); selectSubjectAndEnter('sains', 5)">
            <span>Masuk Makmal Sains T5</span>
            <span class="btn-arrow">➔</span>
          </button>
        </div>
      </div>

      <!-- KAD 3: MATEMATIK TINGKATAN 5 -->
      <div class="subject-hero-card card-matematik" onclick="selectSubjectAndEnter('matematik', 5)">
        <div class="shc-glow"></div>
        <div class="shc-badge badge-math">📐 SILIBUS KSSM TINGKATAN 5</div>
        <div class="shc-avatar-wrap">
          <img src="assets/hero-math-tutor.png" alt="Tutor Matematik 3D" class="shc-avatar-img" />
          <div class="shc-mini-floats">
            <span class="sm-float sf-1">y∝x</span>
            <span class="sm-float sf-2">A⁻¹</span>
            <span class="sm-float sf-3">sin θ</span>
          </div>
        </div>
        <div class="shc-body">
          <h2 class="shc-title">MATEMATIK TINGKATAN 5</h2>
          <p class="shc-summary">Ubahan Langsung & Songsang, Matriks Songsang, Matematik Pengguna Insurans & Cukai, Kekongruenan & Pembesaran, Nisbah Trigonometri, Sukatan Serakan, serta Pemodelan Matematik.</p>
          <div class="shc-features">
            <span class="shc-pill">📐 8 Bab & 16 Subtopik</span>
            <span class="shc-pill">📝 Jalan Kira Langkah demi Langkah</span>
            <span class="shc-pill">🎯 40+ Kuiz & Kertas 2</span>
          </div>
          <button class="shc-btn btn-math-enter" onclick="event.stopPropagation(); selectSubjectAndEnter('matematik', 5)">
            <span>Masuk Kelas Matematik T5</span>
            <span class="btn-arrow">➔</span>
          </button>
        </div>
      </div>

      <!-- KAD 4: KIMIA TINGKATAN 5 -->
      <div class="subject-hero-card card-kimia" onclick="selectSubjectAndEnter('kimia', 5)">
        <div class="shc-glow"></div>
        <div class="shc-badge badge-chemistry">⚗️ SILIBUS KSSM TINGKATAN 5</div>
        <div class="shc-avatar-wrap">
          <img src="assets/hero-chemistry-tutor.png" alt="Tutor Kimia 3D" class="shc-avatar-img" />
          <div class="shc-mini-floats">
            <span class="sm-float sf-1">E°</span>
            <span class="sm-float sf-2">ΔH</span>
            <span class="sm-float sf-3">CₙH₂ₙ</span>
          </div>
        </div>
        <div class="shc-body">
          <h2 class="shc-title">KIMIA TINGKATAN 5</h2>
          <p class="shc-summary">Keseimbangan Redoks & Siri E°, Sebatian Karbon Homolog & Isomer, Termokimia Haba Pemendakan & Peneutralan, Kimia Polimer & Getah Asli, serta Sabun, Detergen & Nanoteknologi.</p>
          <div class="shc-features">
            <span class="shc-pill">⚗️ 5 Bab & 22 Subtopik</span>
            <span class="shc-pill">🧪 Eksperimen & Siri E° Sel</span>
            <span class="shc-pill">🎯 35+ Kuiz & SPM Struktur</span>
          </div>
          <button class="shc-btn btn-chemistry-enter" onclick="event.stopPropagation(); selectSubjectAndEnter('kimia', 5)">
            <span>Masuk Makmal Kimia T5</span>
            <span class="btn-arrow">➔</span>
          </button>
        </div>
      </div>

      <!-- KAD 5: FIZIK TINGKATAN 5 -->
      <div class="subject-hero-card card-fizik" onclick="selectSubjectAndEnter('fizik', 5)">
        <div class="shc-glow"></div>
        <div class="shc-badge badge-physics">🔭 SILIBUS KSSM TINGKATAN 5</div>
        <div class="shc-avatar-wrap">
          <img src="assets/hero-physics-tutor.png" alt="Tutor Fizik 3D" class="shc-avatar-img" />
          <div class="shc-mini-floats">
            <span class="sm-float sf-1">F=kx</span>
            <span class="sm-float sf-2">E=mc²</span>
            <span class="sm-float sf-3">hf</span>
          </div>
        </div>
        <div class="shc-body">
          <h2 class="shc-title">FIZIK TINGKATAN 5</h2>
          <p class="shc-summary">Daya & Gerakan II (Paduan, Keseimbangan & Hooke), Tekanan Cecair Pascal & Bernoulli, Litar Elektrik d.g.e., Keelektromagnetan & Transformer, Elektronik Sinar Katod, Fizik Nuklear, serta Kuantum Einstein.</p>
          <div class="shc-features">
            <span class="shc-pill">🔭 7 Bab & 25 Subtopik</span>
            <span class="shc-pill">⚡ Formula & Rajah Litar Lengkap</span>
            <span class="shc-pill">🎯 40+ Kuiz & SPM Struktur</span>
          </div>
          <button class="shc-btn btn-physics-enter" onclick="event.stopPropagation(); selectSubjectAndEnter('fizik', 5)">
            <span>Masuk Makmal Fizik T5</span>
            <span class="btn-arrow">➔</span>
          </button>
        </div>
      </div>

      <!-- KAD 6: BIOLOGI TINGKATAN 5 -->
      <div class="subject-hero-card card-biologi" onclick="selectSubjectAndEnter('biologi', 5)">
        <div class="shc-glow"></div>
        <div class="shc-badge badge-biology">🧬 SILIBUS KSSM TINGKATAN 5</div>
        <div class="shc-avatar-wrap">
          <img src="assets/hero-biology-tutor.png" alt="Tutor Biologi 3D" class="shc-avatar-img" />
          <div class="shc-mini-floats">
            <span class="sm-float sf-1">🌱</span>
            <span class="sm-float sf-2">2n/3n</span>
            <span class="sm-float sf-3">DNA</span>
          </div>
        </div>
        <div class="shc-body">
          <h2 class="shc-title">BIOLOGI TINGKATAN 5</h2>
          <p class="shc-summary">Tisu Tumbuhan, Struktur Daun & Stoma, Nutrisi & Caspary, Pengangkutan Floem & Fitoremediasi, Fitohormon, Persenyawaan Ganda Dua, Adaptasi Habitat Bakau, Biodiversiti 6 Alam, Ekosistem, Kelestarian, Pewarisan Mendel, Variasi & DNA Rekombinan.</p>
          <div class="shc-features">
            <span class="shc-pill">🧬 13 Bab & 42 Subtopik</span>
            <span class="shc-pill">🧫 Fisiologi Tumbuhan & Genetik</span>
            <span class="shc-pill">🎯 65+ Kuiz & SPM Struktur</span>
          </div>
          <button class="shc-btn btn-biology-enter" onclick="event.stopPropagation(); selectSubjectAndEnter('biologi', 5)">
            <span>Masuk Makmal Biologi T5</span>
            <span class="btn-arrow">➔</span>
          </button>
        </div>
      </div>

      <!-- KAD 7: PRINSIP PERAKAUNAN TINGKATAN 5 -->
      <div class="subject-hero-card card-perakaunan" onclick="selectSubjectAndEnter('perakaunan', 5)">
        <div class="shc-glow"></div>
        <div class="shc-badge badge-perakaunan">💼 SILIBUS KSSM TINGKATAN 5</div>
        <div class="shc-avatar-wrap">
          <img src="assets/hero-accounting-tutor.png" alt="Tutor Perakaunan 3D" class="shc-avatar-img" />
          <div class="shc-mini-floats">
            <span class="sm-float sf-1">📊</span>
            <span class="sm-float sf-2">TPM</span>
            <span class="sm-float sf-3">RM</span>
          </div>
        </div>
        <div class="shc-body">
          <h2 class="shc-title">PRINSIP PERAKAUNAN TINGKATAN 5</h2>
          <p class="shc-summary">Analisis Nisbah Kewangan (Keberuntungan, Kecairan, Kecekapan), Rekod Tak Lengkap (Kaedah Perbandingan & Analisis), Kawalan Tunai & Belanjawan Tunai, Penyata Penyesuaian Bank, Perkongsian & Realisasi, Syarikat Berhad Menurut Syer, Kelab & Persatuan, serta Perakaunan Kos & Titik Pulang Modal (TPM).</p>
          <div class="shc-features">
            <span class="shc-pill">💼 7 Modul & 24 Subtopik</span>
            <span class="shc-pill">📐 Jalan Kerja Pengiraan Lengkap</span>
            <span class="shc-pill">🎯 35+ Kuiz & Kertas 2 Berskema</span>
          </div>
          <button class="shc-btn btn-accounting-enter" onclick="event.stopPropagation(); selectSubjectAndEnter('perakaunan', 5)">
            <span>Masuk Kelas Perakaunan T5</span>
            <span class="btn-arrow">➔</span>
          </button>
        </div>
      </div>

      <!-- KAD 8: EKONOMI TINGKATAN 5 -->
      <div class="subject-hero-card card-ekonomi" onclick="selectSubjectAndEnter('ekonomi', 5)">
        <div class="shc-glow"></div>
        <div class="shc-badge badge-ekonomi">📊 SILIBUS KSSM TINGKATAN 5</div>
        <div class="shc-avatar-wrap">
          <img src="assets/hero-economics-tutor.png" alt="Tutor Ekonomi 3D" class="shc-avatar-img" />
          <div class="shc-mini-floats">
            <span class="sm-float sf-1">📈</span>
            <span class="sm-float sf-2">IHP</span>
            <span class="sm-float sf-3">KPA</span>
          </div>
        </div>
        <div class="shc-body">
          <h2 class="shc-title">EKONOMI TINGKATAN 5</h2>
          <p class="shc-summary">Peranan Kerajaan dalam Ekonomi, Objektif Makroekonomi, Pengiraan Kadar Inflasi berasaskan IHP, Pengiraan Tenaga Buruh & Kadar Pengangguran, Dasar Fiskal & Kewangan, Globalisasi, Sekatan Perdagangan, Pengiraan Imbangan Akaun Semasa, serta Pengiraan Kadar Pertukaran Asing.</p>
          <div class="shc-features">
            <span class="shc-pill">📊 2 Bab & 7 Subtopik</span>
            <span class="shc-pill">💡 Analisis Makro & Pengiraan</span>
            <span class="shc-pill">🎯 20+ Kuiz & SPM Struktur</span>
          </div>
          <button class="shc-btn btn-economics-enter" onclick="event.stopPropagation(); selectSubjectAndEnter('ekonomi', 5)">
            <span>Masuk Kelas Ekonomi T5</span>
            <span class="btn-arrow">➔</span>
          </button>
        </div>
      </div>
    `;
  } else {
    // Form 4
    container.innerHTML = `
      <!-- KAD 1: SEJARAH TINGKATAN 4 -->
      <div class="subject-hero-card card-sejarah" onclick="selectSubjectAndEnter('sejarah', 4)">
        <div class="shc-glow"></div>
        <div class="shc-badge badge-history">📘 SILIBUS KSSM TINGKATAN 4</div>
        <div class="shc-avatar-wrap">
          <img src="assets/hero-tutor.png" alt="Tutor Sejarah 3D" class="shc-avatar-img" />
          <div class="shc-mini-floats">
            <span class="sm-float sf-1">👑</span>
            <span class="sm-float sf-2">📜</span>
            <span class="sm-float sf-3">1957</span>
          </div>
        </div>
        <div class="shc-body">
          <h2 class="shc-title">SEJARAH TINGKATAN 4</h2>
          <p class="shc-summary">Warisan Negara Bangsa, Kebangkitan Nasionalisme, Era Pendudukan Jepun, Malayan Union, PTM 1948, Darurat hingga Pemasyhuran Kemerdekaan 1957.</p>
          <div class="shc-features">
            <span class="shc-pill">📚 10 Bab Lengkap KSSM</span>
            <span class="shc-pill">⚡ Key Points & Flashcards</span>
            <span class="shc-pill">🎯 50+ Kuiz & Soalan SPM</span>
          </div>
          <button class="shc-btn btn-history-enter" onclick="event.stopPropagation(); selectSubjectAndEnter('sejarah', 4)">
            <span>Masuk Kelas Sejarah T4</span>
            <span class="btn-arrow">➔</span>
          </button>
        </div>
      </div>

      <!-- KAD 2: SAINS TINGKATAN 4 -->
      <div class="subject-hero-card card-sains" onclick="selectSubjectAndEnter('sains', 4)">
        <div class="shc-glow"></div>
        <div class="shc-badge badge-science">🔬 SILIBUS KSSM TINGKATAN 4</div>
        <div class="shc-avatar-wrap">
          <img src="assets/hero-science-tutor.png" alt="Tutor Sains 3D" class="shc-avatar-img" />
          <div class="shc-mini-floats">
            <span class="sm-float sf-1">⚛️</span>
            <span class="sm-float sf-2">🧬</span>
            <span class="sm-float sf-3">🌱</span>
          </div>
        </div>
        <div class="shc-body">
          <h2 class="shc-title">SAINS TINGKATAN 4</h2>
          <p class="shc-summary">Keselamatan Makmal, CPR & Heimlich, Parameter Kesihatan, Teknologi Hijau, Genetik Sel, Rangka & Pergerakan, Endokrin, Jadual Berkala, Aloi, Perubatan, Inersia & Nuklear.</p>
          <div class="shc-features">
            <span class="shc-pill">🧪 12 Bab Lengkap KSSM</span>
            <span class="shc-pill">💡 Eksperimen & PASS Kaedah</span>
            <span class="shc-pill">🎯 60+ Kuiz & Kertas 2 Berskema</span>
          </div>
          <button class="shc-btn btn-science-enter" onclick="event.stopPropagation(); selectSubjectAndEnter('sains', 4)">
            <span>Masuk Makmal Sains T4</span>
            <span class="btn-arrow">➔</span>
          </button>
        </div>
      </div>

      <!-- KAD 3: MATEMATIK TINGKATAN 4 -->
      <div class="subject-hero-card card-matematik" onclick="selectSubjectAndEnter('matematik', 4)">
        <div class="shc-glow"></div>
        <div class="shc-badge badge-math">📐 SILIBUS KSSM TINGKATAN 4</div>
        <div class="shc-avatar-wrap">
          <img src="assets/hero-math-tutor.png" alt="Tutor Matematik 3D" class="shc-avatar-img" />
          <div class="shc-mini-floats">
            <span class="sm-float sf-1">√3</span>
            <span class="sm-float sf-2">π</span>
            <span class="sm-float sf-3">∑</span>
          </div>
        </div>
        <div class="shc-body">
          <h2 class="shc-title">MATEMATIK TINGKATAN 4</h2>
          <p class="shc-summary">Fungsi & Persamaan Kuadratik, Asas Nombor, Penaakulan Logik, Operasi Set, Rangkaian Teori Graf, Ketaksamaan Linear, Graf Gerakan, Sukatan Serakan, Kebarangkalian & Kewangan.</p>
          <div class="shc-features">
            <span class="shc-pill">📐 10 Bab Lengkap KSSM</span>
            <span class="shc-pill">📝 Jalan Kira Langkah Demi Langkah</span>
            <span class="shc-pill">🎯 50+ Kuiz & Kertas 2 Berskema</span>
          </div>
          <button class="shc-btn btn-math-enter" onclick="event.stopPropagation(); selectSubjectAndEnter('matematik', 4)">
            <span>Masuk Kelas Matematik T4</span>
            <span class="btn-arrow">➔</span>
          </button>
        </div>
      </div>

      <!-- KAD 4: KIMIA TINGKATAN 4 -->
      <div class="subject-hero-card card-kimia" onclick="selectSubjectAndEnter('kimia', 4)">
        <div class="shc-glow"></div>
        <div class="shc-badge badge-chemistry">⚗️ SILIBUS KSSM TINGKATAN 4</div>
        <div class="shc-avatar-wrap">
          <img src="assets/hero-chemistry-tutor.png" alt="Tutor Kimia 3D" class="shc-avatar-img" />
          <div class="shc-mini-floats">
            <span class="sm-float sf-1">⚗️</span>
            <span class="sm-float sf-2">H₂O</span>
            <span class="sm-float sf-3">pH</span>
          </div>
        </div>
        <div class="shc-body">
          <h2 class="shc-title">KIMIA TINGKATAN 4</h2>
          <p class="shc-summary">Pengenalan Kimia, Jirim & Struktur Atom, Konsep Mol & Formula Kimia, Jadual Berkala, Ikatan Kimia, Asid Bes & Garam, Kadar Tindak Balas, dan Bahan Buatan Industri.</p>
          <div class="shc-features">
            <span class="shc-pill">⚗️ 8 Bab Lengkap KSSM</span>
            <span class="shc-pill">🧪 Stoikiometri & Eksperimen</span>
            <span class="shc-pill">🎯 40+ Kuiz & Kertas 2 Berskema</span>
          </div>
          <button class="shc-btn btn-chemistry-enter" onclick="event.stopPropagation(); selectSubjectAndEnter('kimia', 4)">
            <span>Masuk Makmal Kimia T4</span>
            <span class="btn-arrow">➔</span>
          </button>
        </div>
      </div>

      <!-- KAD 5: FIZIK TINGKATAN 4 -->
      <div class="subject-hero-card card-fizik" onclick="selectSubjectAndEnter('fizik', 4)">
        <div class="shc-glow"></div>
        <div class="shc-badge badge-physics">🔭 SILIBUS KSSM TINGKATAN 4</div>
        <div class="shc-avatar-wrap">
          <img src="assets/hero-physics-tutor.png" alt="Tutor Fizik 3D" class="shc-avatar-img" />
          <div class="shc-mini-floats">
            <span class="sm-float sf-1">F=ma</span>
            <span class="sm-float sf-2">λ</span>
            <span class="sm-float sf-3">v=fλ</span>
          </div>
        </div>
        <div class="shc-body">
          <h2 class="shc-title">FIZIK TINGKATAN 4</h2>
          <p class="shc-summary">Pengukuran & Kuantiti Fizik, Daya & Gerakan I, Kegravitian Newton & Kepler, Teori Haba & Gas, Fenomena Gelombang & Spektrum EM, serta Cahaya & Optik Geometri.</p>
          <div class="shc-features">
            <span class="shc-pill">🔭 6 Bab Lengkap KSSM</span>
            <span class="shc-pill">⚡ Formula & Jalan Kira Lengkap</span>
            <span class="shc-pill">🎯 35+ Kuiz & Kertas 2 Berskema</span>
          </div>
          <button class="shc-btn btn-physics-enter" onclick="event.stopPropagation(); selectSubjectAndEnter('fizik', 4)">
            <span>Masuk Makmal Fizik T4</span>
            <span class="btn-arrow">➔</span>
          </button>
        </div>
      </div>

      <!-- KAD 6: BIOLOGI TINGKATAN 4 -->
      <div class="subject-hero-card card-biologi" onclick="selectSubjectAndEnter('biologi', 4)">
        <div class="shc-glow"></div>
        <div class="shc-badge badge-biology">🧬 SILIBUS KSSM TINGKATAN 4</div>
        <div class="shc-avatar-wrap">
          <img src="assets/hero-biology-tutor.png" alt="Tutor Biologi 3D" class="shc-avatar-img" />
          <div class="shc-mini-floats">
            <span class="sm-float sf-1">DNA</span>
            <span class="sm-float sf-2">ATP</span>
            <span class="sm-float sf-3">🌿</span>
          </div>
        </div>
        <div class="shc-body">
          <h2 class="shc-title">BIOLOGI TINGKATAN 4</h2>
          <p class="shc-summary">Biologi Sel, Membran Plasma, Komposisi Sel, Enzim, Pembahagian Mitosis & Meiosis, Respirasi, Fisiologi Manusia, Keimunan, Koordinasi Saraf, Homeostasis & Pembiakan.</p>
          <div class="shc-features">
            <span class="shc-pill">🧬 15 Bab Lengkap KSSM</span>
            <span class="shc-pill">🧫 Eksperimen & Fisiologi</span>
            <span class="shc-pill">🎯 75+ Kuiz & Kertas 2 Berskema</span>
          </div>
          <button class="shc-btn btn-biology-enter" onclick="event.stopPropagation(); selectSubjectAndEnter('biologi', 4)">
            <span>Masuk Makmal Biologi T4</span>
            <span class="btn-arrow">➔</span>
          </button>
        </div>
      </div>

      <!-- KAD 7: PRINSIP PERAKAUNAN TINGKATAN 4 -->
      <div class="subject-hero-card card-perakaunan" onclick="selectSubjectAndEnter('perakaunan', 4)">
        <div class="shc-glow"></div>
        <div class="shc-badge badge-perakaunan">💼 SILIBUS KSSM TINGKATAN 4</div>
        <div class="shc-avatar-wrap">
          <img src="assets/hero-accounting-tutor.png" alt="Tutor Perakaunan 3D" class="shc-avatar-img" />
          <div class="shc-mini-floats">
            <span class="sm-float sf-1">A=L+EP</span>
            <span class="sm-float sf-2">DR/CR</span>
            <span class="sm-float sf-3">RM</span>
          </div>
        </div>
        <div class="shc-body">
          <h2 class="shc-title">PRINSIP PERAKAUNAN TINGKATAN 4</h2>
          <p class="shc-summary">Pengenalan Perakaunan & Kitaran, Persamaan Perakaunan, Dokumen Sumber, Buku Catatan Pertama (Jurnal Am/Khas & Panjar Tunai Runcit), Lejar & Catatan Bergu, Akaun Kawalan, Imbangan Duga, Penyata Kewangan Tanpa Pelarasan, Pelarasan Tarikh Imbangan (Akruan, PHR & Susut Nilai), serta Pembetulan Kesilapan.</p>
          <div class="shc-features">
            <span class="shc-pill">💼 9 Modul & 37 Subtopik</span>
            <span class="shc-pill">📐 Jalan Kerja Pengiraan Lengkap</span>
            <span class="shc-pill">🎯 45+ Kuiz & Kertas 2 Berskema</span>
          </div>
          <button class="shc-btn btn-accounting-enter" onclick="event.stopPropagation(); selectSubjectAndEnter('perakaunan', 4)">
            <span>Masuk Kelas Perakaunan T4</span>
            <span class="btn-arrow">➔</span>
          </button>
        </div>
      </div>

      <!-- KAD 8: EKONOMI TINGKATAN 4 -->
      <div class="subject-hero-card card-ekonomi" onclick="selectSubjectAndEnter('ekonomi', 4)">
        <div class="shc-glow"></div>
        <div class="shc-badge badge-ekonomi">📊 SILIBUS KSSM TINGKATAN 4</div>
        <div class="shc-avatar-wrap">
          <img src="assets/hero-economics-tutor.png" alt="Tutor Ekonomi 3D" class="shc-avatar-img" />
          <div class="shc-mini-floats">
            <span class="sm-float sf-1">KKP</span>
            <span class="sm-float sf-2">Ed</span>
            <span class="sm-float sf-3">Qd=Qs</span>
          </div>
        </div>
        <div class="shc-body">
          <h2 class="shc-title">EKONOMI TINGKATAN 4</h2>
          <p class="shc-summary">Konsep Kekurangan, Pilihan & Kos Lepas KKP, Sistem Ekonomi, Keseimbangan Pasaran (Qd = Qs), Pengiraan Keanjalan Harga Permintaan & Penawaran, Wang & Bank Pusat, Pengiraan Lengkap Pendapatan Boleh Guna (KWSP, SOCSO, Cukai & Zakat), serta Pengiraan Kos Pengeluaran (TC, AC, MC) & Untung Maksimum.</p>
          <div class="shc-features">
            <span class="shc-pill">📊 4 Bab & 9 Subtopik</span>
            <span class="shc-pill">💡 Pengiraan Keanjalan & Kos</span>
            <span class="shc-pill">🎯 30+ Kuiz & Kertas 2 Berskema</span>
          </div>
          <button class="shc-btn btn-economics-enter" onclick="event.stopPropagation(); selectSubjectAndEnter('ekonomi', 4)">
            <span>Masuk Kelas Ekonomi T4</span>
            <span class="btn-arrow">➔</span>
          </button>
        </div>
      </div>
    `;
  }
}

function setForm(form, triggerRefresh = true) {
  currentForm = parseInt(form, 10) || 5;
  portalSelectedForm = currentForm;
  try {
    localStorage.setItem("academiq_form", currentForm);
  } catch (e) {}

  // Update header toggle pills
  const btn4 = document.getElementById("header-form-4");
  const btn5 = document.getElementById("header-form-5");
  if (btn4 && btn5) {
    if (currentForm === 5) {
      btn5.classList.add("active");
      btn4.classList.remove("active");
    } else {
      btn4.classList.add("active");
      btn5.classList.remove("active");
    }
  }

  // Update portal form buttons if visible
  const pBtn4 = document.getElementById("p-form-4");
  const pBtn5 = document.getElementById("p-form-5");
  if (pBtn4 && pBtn5) {
    if (currentForm === 5) {
      pBtn5.classList.add("active");
      pBtn4.classList.remove("active");
    } else {
      pBtn4.classList.add("active");
      pBtn5.classList.remove("active");
    }
  }

  // Set default chapter ID
  setDefaultChapterId();

  if (triggerRefresh) {
    setSubject(currentSubject, true);
  }
}

function setDefaultChapterId() {
  if (currentForm === 5) {
    if (currentSubject === "sejarah") currentBabId = "sej5-bab1";
    else if (currentSubject === "sains") currentBabId = "sains5-bab1";
    else if (currentSubject === "matematik") currentBabId = "math5-bab1";
    else if (currentSubject === "kimia") currentBabId = "kimia5-bab1";
    else if (currentSubject === "fizik") currentBabId = "fizik5-bab1";
    else if (currentSubject === "biologi") currentBabId = "bio5-bab1";
    else if (currentSubject === "perakaunan") currentBabId = "akaun5-bab1";
    else if (currentSubject === "ekonomi") currentBabId = "eko5-bab1";
  } else {
    if (currentSubject === "sejarah") currentBabId = "bab1";
    else if (currentSubject === "sains") currentBabId = "sains-bab1";
    else if (currentSubject === "matematik") currentBabId = "math-bab1";
    else if (currentSubject === "kimia") currentBabId = "kimia-bab1";
    else if (currentSubject === "fizik") currentBabId = "fizik-bab1";
    else if (currentSubject === "biologi") currentBabId = "bio-bab1";
    else if (currentSubject === "perakaunan") currentBabId = "akaun-bab1";
    else if (currentSubject === "ekonomi") currentBabId = "eko-bab1";
  }
}

function selectSubjectAndEnter(subject, form) {
  try {
    if (form) {
      currentForm = parseInt(form, 10);
      portalSelectedForm = currentForm;
      try { localStorage.setItem("academiq_form", currentForm); } catch (e) {}
    }
    setForm(currentForm, false);
    setSubject(subject, true);
  } catch (err) {
    console.error("selectSubjectAndEnter error:", err);
  } finally {
    closeSubjectPortal();
    addXP(25);
    scrollToTop();
  }
}

function setSubject(subject, triggerAnimation = true) {
  currentSubject = subject;
  try {
    localStorage.setItem("academiq_subject", subject);
  } catch (e) {}

  // Set theme class on body
  document.body.className = `theme-${currentSubject}`;

  // Ensure default chapter matches form & subject
  const activeData = getActiveSubjectData();
  const currentExists = activeData.some(b => b.id === currentBabId);
  if (!currentExists) {
    setDefaultChapterId();
  }

  // Update Top Navigation Bar Indicators
  const switchIcon = document.getElementById("switch-icon-indicator");
  const switchLabel = document.getElementById("active-subject-label");

  const iconMap = {
    sejarah: "📘",
    sains: "🔬",
    matematik: "📐",
    kimia: "⚗️",
    fizik: "🔭",
    biologi: "🧬",
    perakaunan: "💼",
    ekonomi: "📊"
  };

  if (switchIcon) switchIcon.textContent = iconMap[currentSubject] || "📘";
  if (switchLabel) switchLabel.textContent = `${currentSubject.toUpperCase()} TINGKATAN ${currentForm}`;

  // Update Header Form Pill Buttons
  const btn4 = document.getElementById("header-form-4");
  const btn5 = document.getElementById("header-form-5");
  if (btn4 && btn5) {
    if (currentForm === 5) {
      btn5.classList.add("active");
      btn4.classList.remove("active");
    } else {
      btn4.classList.add("active");
      btn5.classList.remove("active");
    }
  }

  // Update Hero Section safely
  try { updateHeroSectionUI(); } catch (e) { console.error("updateHeroSectionUI error:", e); }

  // Populate Chapter Dropdown in Hero safely
  try { populateChapterDropdown(); } catch (e) { console.error("populateChapterDropdown error:", e); }

  // Render Workspace Components safely
  try { renderChapterPills(); } catch (e) { console.error("renderChapterPills error:", e); }
  try { renderActiveChapterContent(); } catch (e) { console.error("renderActiveChapterContent error:", e); }
  try { initComprehensiveExam("all"); } catch (e) { console.error("initComprehensiveExam error:", e); }
  try { renderVerbatimArchive(""); } catch (e) { console.error("renderVerbatimArchive error:", e); }
  try { updateUserStatsUI(); } catch (e) { console.error("updateUserStatsUI error:", e); }
}

function updateHeroSectionUI() {
  const heroSubjectSpan = document.getElementById("hero-subject-span");
  const heroSubtitle = document.getElementById("hero-main-subtitle");
  const heroCharImg = document.getElementById("hero-character-img");
  const fallbackEmoji = document.getElementById("fallback-emoji");
  const fallbackCaption = document.getElementById("fallback-caption");
  const symbolsContainer = document.getElementById("floating-symbols-container");
  const bookStackContainer = document.getElementById("mini-book-stack");
  const ribbonEyebrow = document.getElementById("ribbon-eyebrow");
  const ribbonTitle = document.getElementById("ribbon-title");
  const guideStep1P = document.getElementById("guide-step-1-p");
  const viewNotaDesc = document.getElementById("view-nota-desc");

  if (currentSubject === "sejarah") {
    if (heroSubjectSpan) heroSubjectSpan.textContent = "Sejarah";
    if (heroSubtitle) heroSubtitle.textContent = currentForm === 5 ? "Kuasai Semua 10 Bab & 51 Subtopik Sejarah Tingkatan 5 KSSM" : "Kuasai Semua 10 Bab Sejarah Tingkatan 4 KSSM";
    if (heroCharImg) {
      heroCharImg.src = "assets/hero-tutor.png";
      heroCharImg.alt = "Sejarah 3D Tutor";
    }
    if (fallbackEmoji) fallbackEmoji.textContent = "🧑‍🎓👑📜";
    if (fallbackCaption) fallbackCaption.textContent = `Mod Sejarah Tingkatan ${currentForm} Aktif`;
    if (ribbonEyebrow) ribbonEyebrow.textContent = `SILIBUS LENGKAP SEJARAH TINGKATAN ${currentForm} KSSM`;
    if (ribbonTitle) ribbonTitle.textContent = `Pilih Bab Sejarah Pembelajaran Anda (100% Mengikut Buku Teks)`;
    if (guideStep1P) guideStep1P.textContent = currentForm === 5 ? "Pilih daripada 10 Bab & 51 Subtopik Sejarah Tingkatan 5 mengikut sukatan KSSM" : "Pilih daripada 10 Bab Sejarah Tingkatan 4 mengikut sukatan KSSM";
    if (viewNotaDesc) viewNotaDesc.innerHTML = "Setiap nota di bawah disusun mengikut sukatan rasmi Sejarah KSSM berserta penerangan kontekstual yang jelas.";

    // Floating Neon History Symbols
    if (symbolsContainer) {
      if (currentForm === 5) {
        symbolsContainer.innerHTML = `
          <div class="floating-symbol sym-1" title="Konsep Kedaulatan">👑</div>
          <div class="floating-symbol sym-2" title="Perlembagaan Persekutuan">📜</div>
          <div class="floating-symbol sym-3" title="Pembentukan Malaysia 1963">1963</div>
          <div class="floating-symbol sym-4" title="Raja Berperlembagaan">🏛️</div>
          <div class="floating-symbol sym-5" title="Dasar Kemakmuran Ekonomi">📈</div>
          <div class="floating-symbol sym-6" title="Hubungan Antarabangsa">🌐</div>
        `;
      } else {
        symbolsContainer.innerHTML = `
          <div class="floating-symbol sym-1" title="Waadat & Kedaulatan">👑</div>
          <div class="floating-symbol sym-2" title="Perundangan & Perlembagaan">📜</div>
          <div class="floating-symbol sym-3" title="Tarikh Keramat 1957">1957</div>
          <div class="floating-symbol sym-4" title="Perjuangan Nasionalisme">⚔️</div>
          <div class="floating-symbol sym-5" title="Demokrasi & Pilihan Raya">🗳️</div>
          <div class="floating-symbol sym-6" title="Kemerdekaan Negara">🏛️</div>
        `;
      }
    }

    // Mini Book Stack for Sejarah
    if (bookStackContainer) {
      if (currentForm === 5) {
        bookStackContainer.innerHTML = `
          <div class="book-spine book-blue" onclick="selectChapterAndScroll('sej5-bab1')">📘 Bab 1: Kedaulatan Negara</div>
          <div class="book-spine book-green" onclick="selectChapterAndScroll('sej5-bab5')">📗 Bab 5: Pembentukan Malaysia</div>
          <div class="book-spine book-purple" onclick="selectChapterAndScroll('sej5-bab10')">📕 Bab 10: Kecemerlangan Malaysia</div>
        `;
      } else {
        bookStackContainer.innerHTML = `
          <div class="book-spine book-blue" onclick="selectChapterAndScroll('bab1')">📘 Bab 1: Warisan Bangsa</div>
          <div class="book-spine book-green" onclick="selectChapterAndScroll('bab2')">📗 Bab 2: Nasionalisme</div>
          <div class="book-spine book-purple" onclick="selectChapterAndScroll('bab10')">📕 Bab 10: Kemerdekaan</div>
        `;
      }
    }
  } else if (currentSubject === "sains") {
    // Current Subject: SAINS
    if (heroSubjectSpan) heroSubjectSpan.textContent = "Sains";
    if (heroSubtitle) heroSubtitle.textContent = currentForm === 5 ? "Kuasai Semua 9 Bab & 27 Subtopik Sains Tingkatan 5 KSSM" : "Kuasai Semua 12 Bab Sains Tingkatan 4 KSSM";
    if (heroCharImg) {
      heroCharImg.src = "assets/hero-science-tutor.png";
      heroCharImg.alt = "Sains 3D Tutor";
    }
    if (fallbackEmoji) fallbackEmoji.textContent = "🧑‍🔬🧪⚛️";
    if (fallbackCaption) fallbackCaption.textContent = `Mod Sains Tingkatan ${currentForm} Aktif`;
    if (ribbonEyebrow) ribbonEyebrow.textContent = `SILIBUS LENGKAP SAINS TINGKATAN ${currentForm} KSSM`;
    if (ribbonTitle) ribbonTitle.textContent = `Pilih Bab Sains Pembelajaran Anda (100% Mengikut Buku Teks)`;
    if (guideStep1P) guideStep1P.textContent = currentForm === 5 ? "Pilih daripada 9 Bab & 27 Subtopik Sains Tingkatan 5 merangkumi eksperimen & formula KSSM" : "Pilih daripada 12 Bab Sains Tingkatan 4 merangkumi semua subtopik";
    if (viewNotaDesc) viewNotaDesc.innerHTML = "Setiap nota di bawah merangkumi fakta saintifik dan eksperimen lengkap berlandaskan sukatan KSSM.";

    // Floating Neon Science Symbols
    if (symbolsContainer) {
      if (currentForm === 5) {
        symbolsContainer.innerHTML = `
          <div class="floating-symbol sym-1" title="Mikroorganisma & Patogen">🦠</div>
          <div class="floating-symbol sym-2" title="Kalori & Nutrisi">🥗</div>
          <div class="floating-symbol sym-3" title="Kelestarian Alam Sekitar">🌱</div>
          <div class="floating-symbol sym-4" title="Hidrokarbon & Karbon">⌬</div>
          <div class="floating-symbol sym-5" title="Sel Kimia & Elektrolisis">⚡</div>
          <div class="floating-symbol sym-6" title="Teknologi Angkasa Lepas">🛰️</div>
        `;
      } else {
        symbolsContainer.innerHTML = `
          <div class="floating-symbol sym-1" title="Langkah Keselamatan Makmal">🥽</div>
          <div class="floating-symbol sym-2" title="Resusitasi Jantung (CPR)">🫀</div>
          <div class="floating-symbol sym-3" title="Struktur Atom & Jirim">⚛️</div>
          <div class="floating-symbol sym-4" title="Genetik & DNA">🧬</div>
          <div class="floating-symbol sym-5" title="Teknologi Hijau">🌱</div>
          <div class="floating-symbol sym-6" title="Tenaga Nuklear">☢️</div>
        `;
      }
    }

    // Mini Book Stack for Sains
    if (bookStackContainer) {
      if (currentForm === 5) {
        bookStackContainer.innerHTML = `
          <div class="book-spine book-blue" onclick="selectChapterAndScroll('sains5-bab1')">🧪 Bab 1: Mikroorganisma</div>
          <div class="book-spine book-green" onclick="selectChapterAndScroll('sains5-bab5')">🌿 Bab 5: Sebatian Karbon</div>
          <div class="book-spine book-purple" onclick="selectChapterAndScroll('sains5-bab9')">🚀 Bab 9: Angkasa Lepas</div>
        `;
      } else {
        bookStackContainer.innerHTML = `
          <div class="book-spine book-blue" onclick="selectChapterAndScroll('sains-bab1')">🧪 Bab 1: Keselamatan Makmal</div>
          <div class="book-spine book-green" onclick="selectChapterAndScroll('sains-bab5')">🧬 Bab 5: Genetik & Sel</div>
          <div class="book-spine book-purple" onclick="selectChapterAndScroll('sains-bab12')">☢️ Bab 12: Tenaga Nuklear</div>
        `;
      }
    }
  } else if (currentSubject === "matematik") {
    // Current Subject: MATEMATIK
    if (heroSubjectSpan) heroSubjectSpan.textContent = "Math";
    if (heroSubtitle) heroSubtitle.textContent = currentForm === 5 ? "Solve All Your Math Problems • Kuasai Semua 8 Bab & 16 Subtopik Matematik Tingkatan 5 KSSM" : "Solve All Your Math Problems • Kuasai Semua 10 Bab Matematik Tingkatan 4 KSSM";
    if (heroCharImg) {
      heroCharImg.src = "assets/hero-math-tutor.png";
      heroCharImg.alt = "Matematik 3D Tutor";
    }
    if (fallbackEmoji) fallbackEmoji.textContent = "🧑‍🎓📐➗";
    if (fallbackCaption) fallbackCaption.textContent = `Mod Matematik Tingkatan ${currentForm} Aktif`;
    if (ribbonEyebrow) ribbonEyebrow.textContent = `SILIBUS LENGKAP MATEMATIK TINGKATAN ${currentForm} KSSM`;
    if (ribbonTitle) ribbonTitle.textContent = `Pilih Bab Matematik Pembelajaran Anda (Disertai Jalan Kira Lengkap)`;
    if (guideStep1P) guideStep1P.textContent = currentForm === 5 ? "Pilih daripada 8 Bab & 16 Subtopik Matematik Tingkatan 5 berserta panduan formula & jalan kira" : "Pilih daripada 10 Bab Matematik Tingkatan 4 berserta panduan formula & jalan kira langkah demi langkah";
    if (viewNotaDesc) viewNotaDesc.innerHTML = "Setiap nota dan kaedah dilengkapi dengan <strong>jalan kira terperinci</strong> langkah demi langkah agar benar-benar difahami pelajar.";

    // Floating Neon Math Symbols
    if (symbolsContainer) {
      if (currentForm === 5) {
        symbolsContainer.innerHTML = `
          <div class="floating-symbol sym-1" title="Ubahan Langsung y=kx">y∝x</div>
          <div class="floating-symbol sym-2" title="Matriks Songsang">A⁻¹</div>
          <div class="floating-symbol sym-3" title="Polisi Insurans">🛡️</div>
          <div class="floating-symbol sym-4" title="Pembesaran & Transformasi">k²</div>
          <div class="floating-symbol sym-5" title="Nisbah Trigonometri">sin θ</div>
          <div class="floating-symbol sym-6" title="Sukatan Serakan Data">σ²</div>
        `;
      } else {
        symbolsContainer.innerHTML = `
          <div class="floating-symbol sym-1" title="Punca Kuasa Tiga & Surd">√3</div>
          <div class="floating-symbol sym-2" title="Pi & Geometri Bulatan">π</div>
          <div class="floating-symbol sym-3" title="Hasil Tambah & Sukatan Serakan">∑</div>
          <div class="floating-symbol sym-4" title="Pemboleh Ubah & Algebra">x²</div>
          <div class="floating-symbol sym-5" title="Operasi Set Kesatuan & Persilangan">∩∪</div>
          <div class="floating-symbol sym-6" title="Penaakulan & Logik Matik">⇒</div>
        `;
      }
    }

    // Mini Book Stack for Matematik
    if (bookStackContainer) {
      if (currentForm === 5) {
        bookStackContainer.innerHTML = `
          <div class="book-spine book-blue" onclick="selectChapterAndScroll('math5-bab1')">📐 Bab 1: Ubahan</div>
          <div class="book-spine book-green" onclick="selectChapterAndScroll('math5-bab2')">🔢 Bab 2: Matriks</div>
          <div class="book-spine book-purple" onclick="selectChapterAndScroll('math5-bab5')">📏 Bab 5: Kekongruenan</div>
        `;
      } else {
        bookStackContainer.innerHTML = `
          <div class="book-spine book-blue" onclick="selectChapterAndScroll('math-bab1')">📐 Bab 1: Fungsi Kuadratik</div>
          <div class="book-spine book-green" onclick="selectChapterAndScroll('math-bab2')">🔢 Bab 2: Asas Nombor</div>
          <div class="book-spine book-purple" onclick="selectChapterAndScroll('math-bab7')">📈 Bab 7: Graf Gerakan</div>
        `;
      }
    }
  } else if (currentSubject === "kimia") {
    // Current Subject: KIMIA
    if (heroSubjectSpan) heroSubjectSpan.textContent = "Chemistry";
    if (heroSubtitle) heroSubtitle.textContent = currentForm === 5 ? "Explore Redox, Carbon & Polymers • Kuasai Semua 5 Bab & 22 Subtopik Kimia Tingkatan 5 KSSM" : "Explore Reactions & Elements • Kuasai Semua 8 Bab Kimia Tingkatan 4 KSSM";
    if (heroCharImg) {
      heroCharImg.src = "assets/hero-chemistry-tutor.png";
      heroCharImg.alt = "Kimia 3D Tutor";
    }
    if (fallbackEmoji) fallbackEmoji.textContent = "🧑‍🔬⚗️🧪";
    if (fallbackCaption) fallbackCaption.textContent = `Mod Kimia Tingkatan ${currentForm} Aktif`;
    if (ribbonEyebrow) ribbonEyebrow.textContent = `SILIBUS LENGKAP KIMIA TINGKATAN ${currentForm} KSSM`;
    if (ribbonTitle) ribbonTitle.textContent = `Pilih Bab Kimia Pembelajaran Anda (100% Mengikut Buku Teks)`;
    if (guideStep1P) guideStep1P.textContent = currentForm === 5 ? "Pilih daripada 5 Bab & 22 Subtopik Kimia Tingkatan 5 merangkumi semua eksperimen & redoks" : "Pilih daripada 8 Bab Kimia Tingkatan 4 merangkumi semua subtopik";
    if (viewNotaDesc) viewNotaDesc.innerHTML = "Setiap nota di bawah merangkumi konsep redoks, sebatian karbon, termokimia dan polimer berlandaskan sukatan KSSM.";

    // Floating Neon Chemistry Symbols
    if (symbolsContainer) {
      if (currentForm === 5) {
        symbolsContainer.innerHTML = `
          <div class="floating-symbol sym-1" title="Keupayaan Elektrod Piawai">E°</div>
          <div class="floating-symbol sym-2" title="Siri Homolog Organik">CₙH₂ₙ</div>
          <div class="floating-symbol sym-3" title="Haba Tindak Balas Termokimia">ΔH</div>
          <div class="floating-symbol sym-4" title="Polimer Sintetik">⚗️</div>
          <div class="floating-symbol sym-5" title="Mekanisme Tindakan Sabun">🧼</div>
          <div class="floating-symbol sym-6" title="Nanoteknologi Konsumer">🔬</div>
        `;
      } else {
        symbolsContainer.innerHTML = `
          <div class="floating-symbol sym-1" title="Kelalang Kon & Larutan">⚗️</div>
          <div class="floating-symbol sym-2" title="Molekul Air">H₂O</div>
          <div class="floating-symbol sym-3" title="Skala pH Keasidan">pH</div>
          <div class="floating-symbol sym-4" title="Tenaga Pengaktifan">Eₐ</div>
          <div class="floating-symbol sym-5" title="Kekisi Sebatian Ion">NaCl</div>
          <div class="floating-symbol sym-6" title="Struktur Cincin Benzena">⌬</div>
        `;
      }
    }

    // Mini Book Stack for Kimia
    if (bookStackContainer) {
      if (currentForm === 5) {
        bookStackContainer.innerHTML = `
          <div class="book-spine book-blue" onclick="selectChapterAndScroll('kimia5-bab1')">⚡ Bab 1: Keseimbangan Redoks</div>
          <div class="book-spine book-green" onclick="selectChapterAndScroll('kimia5-bab2')">🔬 Bab 2: Sebatian Karbon</div>
          <div class="book-spine book-purple" onclick="selectChapterAndScroll('kimia5-bab3')">🔥 Bab 3: Termokimia</div>
        `;
      } else {
        bookStackContainer.innerHTML = `
          <div class="book-spine book-blue" onclick="selectChapterAndScroll('kimia-bab2')">⚛️ Bab 2: Struktur Atom</div>
          <div class="book-spine book-green" onclick="selectChapterAndScroll('kimia-bab3')">⚖️ Bab 3: Konsep Mol</div>
          <div class="book-spine book-purple" onclick="selectChapterAndScroll('kimia-bab6')">🧪 Bab 6: Asid, Bes & Garam</div>
        `;
      }
    }
  } else if (currentSubject === "fizik") {
    // Current Subject: FIZIK
    if (heroSubjectSpan) heroSubjectSpan.textContent = "Physics";
    if (heroSubtitle) heroSubtitle.textContent = currentForm === 5 ? "Master Forces, Electromagnetism & Quanta • Kuasai Semua 7 Bab & 25 Subtopik Fizik Tingkatan 5 KSSM" : "Master Forces, Energy & Waves • Kuasai Semua 6 Bab Fizik Tingkatan 4 KSSM";
    if (heroCharImg) {
      heroCharImg.src = "assets/hero-physics-tutor.png";
      heroCharImg.alt = "Fizik 3D Tutor";
    }
    if (fallbackEmoji) fallbackEmoji.textContent = "🧑‍🔬🔭⚡";
    if (fallbackCaption) fallbackCaption.textContent = `Mod Fizik Tingkatan ${currentForm} Aktif`;
    if (ribbonEyebrow) ribbonEyebrow.textContent = `SILIBUS LENGKAP FIZIK TINGKATAN ${currentForm} KSSM`;
    if (ribbonTitle) ribbonTitle.textContent = `Pilih Bab Fizik Pembelajaran Anda (100% Mengikut Buku Teks)`;
    if (guideStep1P) guideStep1P.textContent = currentForm === 5 ? "Pilih daripada 7 Bab & 25 Subtopik Fizik Tingkatan 5 merangkumi formula, litar & fizik kuantum" : "Pilih daripada 6 Bab Fizik Tingkatan 4 merangkumi semua subtopik, formula & jalan kira";
    if (viewNotaDesc) viewNotaDesc.innerHTML = "Setiap nota di bawah merangkumi konsep fizik, formula matematik, hukum alam semesta dan penyelesaian berangka berlandaskan sukatan KSSM.";

    // Floating Neon Physics Symbols
    if (symbolsContainer) {
      if (currentForm === 5) {
        symbolsContainer.innerHTML = `
          <div class="floating-symbol sym-1" title="Hukum Hooke F=kx">F=kx</div>
          <div class="floating-symbol sym-2" title="Tekanan Cecair P=hρg">P=hρg</div>
          <div class="floating-symbol sym-3" title="d.g.e. dan Rintangan Dalam">E=V+Ir</div>
          <div class="floating-symbol sym-4" title="Aruhan Elektromagnet & Transformer">Vp/Vs</div>
          <div class="floating-symbol sym-5" title="Kesetaraan Jisim-Tenaga Einstein">E=mc²</div>
          <div class="floating-symbol sym-6" title="Teori Kuantum Cahaya">E=hf</div>
        `;
      } else {
        symbolsContainer.innerHTML = `
          <div class="floating-symbol sym-1" title="Hukum Newton II (F=ma)">F=ma</div>
          <div class="floating-symbol sym-2" title="Panjang Gelombang (Lambda)">λ</div>
          <div class="floating-symbol sym-3" title="Laju Gelombang">v=fλ</div>
          <div class="floating-symbol sym-4" title="Pecutan Graviti Bumi (9.81 m s⁻²)">g=9.81</div>
          <div class="floating-symbol sym-5" title="Muatan Haba Tentu (Q=mcΔθ)">Q=mcΔθ</div>
          <div class="floating-symbol sym-6" title="Hukum Pantulan & Pembiasan">n₁sinθ₁</div>
        `;
      }
    }

    // Mini Book Stack for Fizik
    if (bookStackContainer) {
      if (currentForm === 5) {
        bookStackContainer.innerHTML = `
          <div class="book-spine book-blue" onclick="selectChapterAndScroll('fizik5-bab1')">⚙️ Bab 1: Daya & Gerakan II</div>
          <div class="book-spine book-green" onclick="selectChapterAndScroll('fizik5-bab3')">⚡ Bab 3: Elektrik & d.g.e.</div>
          <div class="book-spine book-purple" onclick="selectChapterAndScroll('fizik5-bab7')">🌌 Bab 7: Fizik Kuantum</div>
        `;
      } else {
        bookStackContainer.innerHTML = `
          <div class="book-spine book-blue" onclick="selectChapterAndScroll('fizik-bab2')">⚡ Bab 2: Daya & Gerakan I</div>
          <div class="book-spine book-green" onclick="selectChapterAndScroll('fizik-bab3')">🪐 Bab 3: Kegravitian Newton</div>
          <div class="book-spine book-purple" onclick="selectChapterAndScroll('fizik-bab6')">🔍 Bab 6: Cahaya & Optik</div>
        `;
      }
    }
  } else if (currentSubject === "biologi") {
    // Current Subject: BIOLOGI
    if (heroSubjectSpan) heroSubjectSpan.textContent = "Biology";
    if (heroSubtitle) heroSubtitle.textContent = currentForm === 5 ? "Explore Plant Physiology, Ecosystems & Genetics • Kuasai Semua 13 Bab & 42 Subtopik Biologi Tingkatan 5 KSSM" : "Explore Cells, Physiology & Genetics • Kuasai Semua 15 Bab Biologi Tingkatan 4 KSSM";
    if (heroCharImg) {
      heroCharImg.src = "assets/hero-biology-tutor.png";
      heroCharImg.alt = "Biologi 3D Tutor";
    }
    if (fallbackEmoji) fallbackEmoji.textContent = "👩‍🔬🧬🌿";
    if (fallbackCaption) fallbackCaption.textContent = `Mod Biologi Tingkatan ${currentForm} Aktif`;
    if (ribbonEyebrow) ribbonEyebrow.textContent = `SILIBUS LENGKAP BIOLOGI TINGKATAN ${currentForm} KSSM`;
    if (ribbonTitle) ribbonTitle.textContent = `Pilih Bab Biologi Pembelajaran Anda (100% Mengikut Buku Teks)`;
    if (guideStep1P) guideStep1P.textContent = currentForm === 5 ? "Pilih daripada 13 Bab & 42 Subtopik Biologi Tingkatan 5 merangkumi fisiologi tumbuhan & genetik" : "Pilih daripada 15 Bab Biologi Tingkatan 4 merangkumi semua subtopik & fisiologi";
    if (viewNotaDesc) viewNotaDesc.innerHTML = "Setiap nota di bawah merangkumi konsep biologi tumbuhan, ekosistem dan genetik berlandaskan sukatan KSSM.";

    // Floating Neon Biology Symbols
    if (symbolsContainer) {
      if (currentForm === 5) {
        symbolsContainer.innerHTML = `
          <div class="floating-symbol sym-1" title="Tisu Meristem & Vaskular">🌱</div>
          <div class="floating-symbol sym-2" title="Mekanisme Stoma Ion K+">🍃</div>
          <div class="floating-symbol sym-3" title="Persenyawaan Ganda Dua (2n & 3n)">🌺</div>
          <div class="floating-symbol sym-4" title="Penyesuaian Pokok Bakau">🌵</div>
          <div class="floating-symbol sym-5" title="Hukum Segregasi & Asortmen Mendel">9:3:3:1</div>
          <div class="floating-symbol sym-6" title="Teknologi DNA Rekombinan">🧬</div>
        `;
      } else {
        symbolsContainer.innerHTML = `
          <div class="floating-symbol sym-1" title="Heliks Ganda Dua DNA">DNA</div>
          <div class="floating-symbol sym-2" title="Mata Wang Tenaga Sel (ATP)">ATP</div>
          <div class="floating-symbol sym-3" title="Glukosa Respirasi Sel">C₆H₁₂O₆</div>
          <div class="floating-symbol sym-4" title="Gas Karbon Dioksida">CO₂</div>
          <div class="floating-symbol sym-5" title="Oksihemoglobin Darah">Hb(O₂)₄</div>
          <div class="floating-symbol sym-6" title="Hormon Antidiuresis Ginjal">ADH</div>
        `;
      }
    }

    // Mini Book Stack for Biologi
    if (bookStackContainer) {
      if (currentForm === 5) {
        bookStackContainer.innerHTML = `
          <div class="book-spine book-blue" onclick="selectChapterAndScroll('bio5-bab1')">🌱 Bab 1: Tisu Tumbuhan</div>
          <div class="book-spine book-green" onclick="selectChapterAndScroll('bio5-bab6')">🌺 Bab 6: Pembiakan Seks</div>
          <div class="book-spine book-purple" onclick="selectChapterAndScroll('bio5-bab11')">🧬 Bab 11: Pewarisan Mendel</div>
        `;
      } else {
        bookStackContainer.innerHTML = `
          <div class="book-spine book-blue" onclick="selectChapterAndScroll('bio-bab2')">🧫 Bab 2: Biologi Sel</div>
          <div class="book-spine book-green" onclick="selectChapterAndScroll('bio-bab7')">🫁 Bab 7: Respirasi Sel</div>
          <div class="book-spine book-purple" onclick="selectChapterAndScroll('bio-bab13')">💧 Bab 13: Homeostasis</div>
        `;
      }
    }
  } else if (currentSubject === "perakaunan") {
    // Subject: PRINSIP PERAKAUNAN
    if (heroSubjectSpan) heroSubjectSpan.textContent = "Accounting";
    if (heroSubtitle) heroSubtitle.textContent = currentForm === 5 ? "Kuasai Analisis Nisbah, Rekod Tak Lengkap, Belanjawan Tunai, Perkongsian & TPM • 7 Modul Lengkap Tingkatan 5 KSSM" : "Kuasai Catatan Bergu, Lejar, Imbangan Duga, Penyata Kewangan & Pelarasan • 9 Modul Lengkap Tingkatan 4 KSSM";
    if (heroCharImg) {
      heroCharImg.src = "assets/hero-accounting-tutor.png";
      heroCharImg.alt = "Tutor Perakaunan 3D";
    }
    if (fallbackEmoji) fallbackEmoji.textContent = "🧑‍💼📊💰";
    if (fallbackCaption) fallbackCaption.textContent = `Mod Prinsip Perakaunan Tingkatan ${currentForm} Aktif`;
    if (ribbonEyebrow) ribbonEyebrow.textContent = `SILIBUS LENGKAP PRINSIP PERAKAUNAN TINGKATAN ${currentForm} KSSM`;
    if (ribbonTitle) ribbonTitle.textContent = `Pilih Modul Perakaunan Pembelajaran Anda (Fokus Jalan Kerja Pengiraan Lengkap)`;
    if (guideStep1P) guideStep1P.textContent = currentForm === 5 ? "Pilih daripada 7 Modul Prinsip Perakaunan Tingkatan 5 dengan fokus jalan kerja pengiraan nisbah & kos" : "Pilih daripada 9 Modul Prinsip Perakaunan Tingkatan 4 dengan fokus persamaan & pelarasan";
    if (viewNotaDesc) viewNotaDesc.innerHTML = "Setiap nota di bawah merangkumi jalan kerja pengiraan lengkap, format lejar/penyata, dan prinsip catatan bergu KSSM.";

    // Floating Neon Accounting Symbols
    if (symbolsContainer) {
      if (currentForm === 5) {
        symbolsContainer.innerHTML = `
          <div class="floating-symbol sym-1" title="Persamaan Titik Pulang Modal">TPM</div>
          <div class="floating-symbol sym-2" title="Nisbah Semasa & Ujian Asid">Nisbah</div>
          <div class="floating-symbol sym-3" title="Belanjawan Tunai">Tunai</div>
          <div class="floating-symbol sym-4" title="Perkongsian & Realisasi">Kongsi</div>
          <div class="floating-symbol sym-5" title="Syer Syarikat Berhad">Dividen</div>
          <div class="floating-symbol sym-6" title="Kos Pengeluaran & Prima">Kos</div>
        `;
      } else {
        symbolsContainer.innerHTML = `
          <div class="floating-symbol sym-1" title="Persamaan Perakaunan: Aset = Liabiliti + Ekuiti">A=L+EP</div>
          <div class="floating-symbol sym-2" title="Catatan Bergu: Debit & Kredit">DR/CR</div>
          <div class="floating-symbol sym-3" title="Ringgit Malaysia">RM</div>
          <div class="floating-symbol sym-4" title="Imbangan Duga">Baki</div>
          <div class="floating-symbol sym-5" title="Untung Kasar & Untung Bersih">Untung</div>
          <div class="floating-symbol sym-6" title="Susut Nilai & Hutang Ragu">Pelarasan</div>
        `;
      }
    }

    // Mini Book Stack for Perakaunan
    if (bookStackContainer) {
      if (currentForm === 5) {
        bookStackContainer.innerHTML = `
          <div class="book-spine book-yellow" onclick="selectChapterAndScroll('akaun5-bab1')">📊 Modul 10: Analisis Nisbah</div>
          <div class="book-spine book-green" onclick="selectChapterAndScroll('akaun5-bab4')">🤝 Modul 13: Perkongsian</div>
          <div class="book-spine book-purple" onclick="selectChapterAndScroll('akaun5-bab7')">🏭 Modul 16: Perakaunan Kos</div>
        `;
      } else {
        bookStackContainer.innerHTML = `
          <div class="book-spine book-yellow" onclick="selectChapterAndScroll('akaun-bab2')">⚖️ Modul 2: Persamaan Akaun</div>
          <div class="book-spine book-blue" onclick="selectChapterAndScroll('akaun-bab5')">📑 Modul 5: Lejar & Catatan Bergu</div>
          <div class="book-spine book-green" onclick="selectChapterAndScroll('akaun-bab8')">🔍 Modul 8: Pelarasan & Penyata</div>
        `;
      }
    }
  } else if (currentSubject === "ekonomi") {
    // Subject: EKONOMI
    if (heroSubjectSpan) heroSubjectSpan.textContent = "Economics";
    if (heroSubtitle) heroSubtitle.textContent = currentForm === 5 ? "Kuasai Dasar Fiskal, Dasar Kewangan, Inflasi, Imbangan Pembayaran & KPA • 2 Bab Lengkap Tingkatan 5 KSSM" : "Kuasai Konsep Kekurangan, Keseimbangan Pasaran, Keanjalan Harga, Yd & Kos Pengeluaran • 4 Bab Lengkap Tingkatan 4 KSSM";
    if (heroCharImg) {
      heroCharImg.src = "assets/hero-economics-tutor.png";
      heroCharImg.alt = "Tutor Ekonomi 3D";
    }
    if (fallbackEmoji) fallbackEmoji.textContent = "👨‍💼📈🌐";
    if (fallbackCaption) fallbackCaption.textContent = `Mod Ekonomi Tingkatan ${currentForm} Aktif`;
    if (ribbonEyebrow) ribbonEyebrow.textContent = `SILIBUS LENGKAP EKONOMI TINGKATAN ${currentForm} KSSM`;
    if (ribbonTitle) ribbonTitle.textContent = `Pilih Bab Ekonomi Pembelajaran Anda (Fokus Jalan Kerja Pengiraan Lengkap)`;
    if (guideStep1P) guideStep1P.textContent = currentForm === 5 ? "Pilih daripada 2 Bab Ekonomi Tingkatan 5 dengan fokus jalan kerja pengiraan makroekonomi & kadar pertukaran asing" : "Pilih daripada 4 Bab Ekonomi Tingkatan 4 dengan fokus jalan kerja pengiraan keanjalan & kos pengeluaran";
    if (viewNotaDesc) viewNotaDesc.innerHTML = "Setiap nota di bawah merangkumi jalan kerja pengiraan lengkap, formula kuantitatif, jadual dan analisis ekonomi KSSM.";

    // Floating Neon Economics Symbols
    if (symbolsContainer) {
      if (currentForm === 5) {
        symbolsContainer.innerHTML = `
          <div class="floating-symbol sym-1" title="Kadar Inflasi IHP">IHP</div>
          <div class="floating-symbol sym-2" title="Kadar Pertumbuhan Ekonomi">KDNK</div>
          <div class="floating-symbol sym-3" title="Kadar Pengangguran & Buruh">Guna Tenaga</div>
          <div class="floating-symbol sym-4" title="Dasar Fiskal & Kewangan">OPR/SRR</div>
          <div class="floating-symbol sym-5" title="Kadar Pertukaran Asing">KPA</div>
          <div class="floating-symbol sym-6" title="Akaun Semasa & Imbangan Dagangan">Akaun Semasa</div>
        `;
      } else {
        symbolsContainer.innerHTML = `
          <div class="floating-symbol sym-1" title="Keluk Kemungkinan Pengeluaran">KKP</div>
          <div class="floating-symbol sym-2" title="Keseimbangan Pasaran: Permintaan = Penawaran">Qd=Qs</div>
          <div class="floating-symbol sym-3" title="Keanjalan Harga Permintaan">Ed</div>
          <div class="floating-symbol sym-4" title="Pendapatan Boleh Guna">Yd</div>
          <div class="floating-symbol sym-5" title="Jumlah Kos & Kos Purata">TC/AC</div>
          <div class="floating-symbol sym-6" title="Kos Sut & Hasil Sut">MC=MR</div>
        `;
      }
    }

    // Mini Book Stack for Ekonomi
    if (bookStackContainer) {
      if (currentForm === 5) {
        bookStackContainer.innerHTML = `
          <div class="book-spine book-blue" onclick="selectChapterAndScroll('eko5-bab1')">🏛️ Bab 1: Ekonomi & Kerajaan</div>
          <div class="book-spine book-purple" onclick="selectChapterAndScroll('eko5-bab2')">🌐 Bab 2: Malaysia & Ekonomi Global</div>
        `;
      } else {
        bookStackContainer.innerHTML = `
          <div class="book-spine book-blue" onclick="selectChapterAndScroll('eko-bab1')">📉 Bab 1: Kekurangan & KKP</div>
          <div class="book-spine book-green" onclick="selectChapterAndScroll('eko-bab2')">⚖️ Bab 2: Keseimbangan & Keanjalan</div>
          <div class="book-spine book-purple" onclick="selectChapterAndScroll('eko-bab4')">🏭 Bab 4: Kos & Hasil Pengeluaran</div>
        `;
      }
    }
  }
}

function populateChapterDropdown() {
  const select = document.getElementById("chapter-select");
  if (!select) return;

  const data = getActiveSubjectData();
  select.innerHTML = data
    .map((bab) => `<option value="${bab.id}">${bab.babNum}: ${bab.title}</option>`)
    .join("");
  select.value = currentBabId;
}

/* ==========================================================================
   2. DATA GETTERS
   ========================================================================== */
function getActiveSubjectData() {
  if (currentForm === 5) {
    if (currentSubject === "sains") return (typeof SAINS_T5_DATA !== "undefined" ? SAINS_T5_DATA : []);
    if (currentSubject === "matematik") return (typeof MATEMATIK_T5_DATA !== "undefined" ? MATEMATIK_T5_DATA : []);
    if (currentSubject === "kimia") return (typeof KIMIA_T5_DATA !== "undefined" ? KIMIA_T5_DATA : []);
    if (currentSubject === "fizik") return (typeof FIZIK_T5_DATA !== "undefined" ? FIZIK_T5_DATA : []);
    if (currentSubject === "biologi") return (typeof BIOLOGI_T5_DATA !== "undefined" ? BIOLOGI_T5_DATA : []);
    if (currentSubject === "perakaunan") return (typeof PERAKAUNAN_T5_DATA !== "undefined" ? PERAKAUNAN_T5_DATA : []);
    if (currentSubject === "ekonomi") return (typeof EKONOMI_T5_DATA !== "undefined" ? EKONOMI_T5_DATA : []);
    return (typeof SEJARAH_T5_DATA !== "undefined" ? SEJARAH_T5_DATA : []);
  } else {
    if (currentSubject === "sains") return (typeof SAINS_DATA !== "undefined" ? SAINS_DATA : []);
    if (currentSubject === "matematik") return (typeof MATEMATIK_DATA !== "undefined" ? MATEMATIK_DATA : []);
    if (currentSubject === "kimia") return (typeof KIMIA_DATA !== "undefined" ? KIMIA_DATA : []);
    if (currentSubject === "fizik") return (typeof FIZIK_DATA !== "undefined" ? FIZIK_DATA : []);
    if (currentSubject === "biologi") return (typeof BIOLOGI_DATA !== "undefined" ? BIOLOGI_DATA : []);
    if (currentSubject === "perakaunan") return (typeof PERAKAUNAN_DATA !== "undefined" ? PERAKAUNAN_DATA : []);
    if (currentSubject === "ekonomi") return (typeof EKONOMI_DATA !== "undefined" ? EKONOMI_DATA : []);
    return (typeof SEJARAH_DATA !== "undefined" ? SEJARAH_DATA : []);
  }
}

function getCurrentChapterObj() {
  const data = getActiveSubjectData();
  return data.find((b) => b.id === currentBabId) || data[0];
}

/* ==========================================================================
   3. AMBIENT PARTICLES
   ========================================================================== */
function initAmbientParticles() {
  const container = document.getElementById("particles-container");
  if (!container) return;
  container.innerHTML = "";
  for (let i = 0; i < 24; i++) {
    const dot = document.createElement("div");
    dot.className = "particle-dot";
    const size = Math.random() * 5 + 3;
    dot.style.width = `${size}px`;
    dot.style.height = `${size}px`;
    dot.style.left = `${Math.random() * 100}%`;
    dot.style.top = `${Math.random() * 100}%`;
    dot.style.animationDuration = `${Math.random() * 7 + 6}s`;
    dot.style.animationDelay = `${Math.random() * 5}s`;
    container.appendChild(dot);
  }
}

/* ==========================================================================
   4. NAVIGATION & CONTROLS
   ========================================================================== */
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function scrollToWorkspace() {
  const el = document.getElementById("workspace-anchor");
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function focusChapterSelect() {
  const sel = document.getElementById("chapter-select");
  if (sel) {
    sel.focus();
    sel.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

function selectChapterAndScroll(babId) {
  handleChapterChange(babId);
  scrollToWorkspace();
}

function handleChapterChange(babId) {
  currentBabId = babId;
  const selectEl = document.getElementById("chapter-select");
  if (selectEl && selectEl.value !== babId) {
    selectEl.value = babId;
  }

  const bab = getCurrentChapterObj();
  const deskBannerText = document.getElementById("desk-banner-text");
  if (deskBannerText && bab) {
    deskBannerText.innerHTML = `Sedang Dipelajari: <strong>${bab.babNum} : ${bab.title}</strong>`;
  }

  renderChapterPills();
  renderActiveChapterContent();
}

function handleModeSelectChange(viewName) {
  switchMainView(viewName, false);
}

function triggerGenerateAction() {
  const selectedBab = document.getElementById("chapter-select").value;
  const selectedMode = document.getElementById("mode-select").value;
  currentBabId = selectedBab;
  renderChapterPills();
  renderActiveChapterContent();
  switchMainView(selectedMode, true);
  addXP(10);
}

function switchMainView(viewName, shouldScroll = true) {
  currentMainView = viewName;

  // Update Top Nav Tabs
  document.querySelectorAll(".nav-tab").forEach((tab) => {
    tab.classList.toggle("active", tab.getAttribute("data-view") === viewName);
  });

  // Sync hero dropdown if applicable
  const modeSelect = document.getElementById("mode-select");
  if (modeSelect && ["nota", "step", "keypoint", "kuiz-topik", "kuiz-keseluruhan", "chatbot"].includes(viewName)) {
    modeSelect.value = viewName;
  }

  // Toggle Workspace Views
  document.querySelectorAll(".workspace-view").forEach((sec) => {
    sec.classList.remove("active");
  });
  const targetSec = document.getElementById(`view-${viewName}`);
  if (targetSec) {
    targetSec.classList.add("active");
  }

  if (viewName === "chatbot") {
    const bab = getCurrentChapterObj();
    if (bab) renderTopicChatbot(bab);
    setTimeout(() => {
      const input = document.getElementById("cb-user-input");
      if (input) input.focus();
    }, 250);
  }

  if (shouldScroll) {
    scrollToWorkspace();
  }
}

/* ==========================================================================
   5. QUICK SEARCH ENGINE (MERENTAS SUBJEK AKTIF)
   ========================================================================== */
function handleQuickSearch(query) {
  const dropdown = document.getElementById("search-suggestions");
  if (!dropdown) return;

  const trimmed = query.trim().toLowerCase();
  if (trimmed.length < 2) {
    dropdown.classList.add("hidden");
    dropdown.innerHTML = "";
    return;
  }

  const data = getActiveSubjectData();
  const matches = [];

  data.forEach((bab) => {
    // Check title & synopsis
    if (bab.title.toLowerCase().includes(trimmed) || bab.synopsis.toLowerCase().includes(trimmed)) {
      matches.push({
        babId: bab.id,
        view: "nota",
        label: `${bab.babNum}: ${bab.title}`,
        snippet: bab.synopsis.slice(0, 95) + "..."
      });
    }
    // Check keypoints
    (bab.keypoints || []).forEach((kp) => {
      const term = typeof kp === "string" ? kp : (kp.term || "");
      const meaning = typeof kp === "string" ? kp : (kp.meaning || "");
      if (term.toLowerCase().includes(trimmed) || meaning.toLowerCase().includes(trimmed)) {
        matches.push({
          babId: bab.id,
          view: "keypoint",
          label: `${term.slice(0, 40)} (${bab.babNum})`,
          snippet: meaning.slice(0, 95)
        });
      }
    });
    // Check verbatim lines
    (bab.notes || []).forEach((n) => {
      const vLines = n.verbatim || n.points || [];
      vLines.forEach((line) => {
        if (line.toLowerCase().includes(trimmed)) {
          matches.push({
            babId: bab.id,
            view: "nota",
            label: `${n.subtopic || ""} (${bab.babNum})`,
            snippet: line
          });
        }
      });
    });
  });

  const uniqueMatches = matches.slice(0, 8);
  if (uniqueMatches.length === 0) {
    dropdown.innerHTML = `<div class="search-item">Tiada padanan ditemui untuk "${query}" dalam subjek ini.</div>`;
    dropdown.classList.remove("hidden");
    return;
  }

  dropdown.innerHTML = uniqueMatches
    .map(
      (m) => `
      <div class="search-item" onclick="selectSearchMatch('${m.babId}', '${m.view}')">
        <strong>${m.label}</strong>
        <span>${m.snippet}</span>
      </div>
    `
    )
    .join("");
  dropdown.classList.remove("hidden");
}

function selectSearchMatch(babId, viewName) {
  const dropdown = document.getElementById("search-suggestions");
  if (dropdown) dropdown.classList.add("hidden");
  handleChapterChange(babId);
  switchMainView(viewName, true);
}

/* ==========================================================================
   6. RENDER CHAPTER PILLS & ACTIVE CHAPTER BANNER
   ========================================================================== */
function renderChapterPills() {
  const container = document.getElementById("chapter-pills-container");
  if (!container) return;

  const data = getActiveSubjectData();
  container.innerHTML = data
    .map((bab) => {
      const isActive = bab.id === currentBabId;
      const isDone = completedQuizzes.has(bab.id);
      return `
        <div class="chapter-pill-card ${isActive ? "active" : ""}" onclick="handleChapterChange('${bab.id}')">
          <div class="cp-top">
            <span class="cp-num">${bab.babNum}</span>
            <span class="cp-icon">${bab.icon}</span>
          </div>
          <div class="cp-title">${bab.title}</div>
          <div class="cp-status">
            <span>${bab.notes.length} Subtopik</span>
            <span>${isDone ? "✅ Selesai" : "📘 Pelajari"}</span>
          </div>
        </div>
      `;
    })
    .join("");
}

function renderActiveChapterContent() {
  const bab = getCurrentChapterObj();
  if (!bab) return;

  const cleanPages = (bab.anyflipPages || "").replace(/\s*\([^\)]*anyflip[^\)]*\)/gi, "").replace(/\s*\(Nota Digital[^\)]*\)/gi, "").trim();

  // 1. Active Chapter Header Banner
  const banner = document.getElementById("active-chapter-banner");
  if (banner) {
    banner.innerHTML = `
      <div class="ach-left">
        <div class="ach-badge-row">
          <span class="ach-bab-pill">${bab.icon} ${bab.babNum}</span>
          <span class="ach-page-pill">📄 ${cleanPages || bab.anyflipPages}</span>
          <span class="ach-page-pill">🎯 ${bab.questions.length} Soalan Objektif + ${bab.struktur.length} Struktur</span>
        </div>
        <h2 class="ach-title">${bab.title}</h2>
        <p class="ach-synopsis">${bab.synopsis}</p>
      </div>
      <div class="ach-QuickActions">
        <button class="btn-outline-cyan" onclick="switchMainView('nota', false)">📖 Nota</button>
        <button class="btn-outline-cyan" onclick="switchMainView('step', false)">🧭 Step-by-Step</button>
        <button class="btn-outline-cyan" onclick="switchMainView('keypoint', false)">⚡ Key Point</button>
        <button class="btn-Cyan-sm" onclick="switchMainView('kuiz-topik', false)">🎯 Uji Topik Ini</button>
        <button class="btn-tutor-glow" onclick="switchMainView('chatbot', true)">🤖 Tanya Tutor AI</button>
      </div>
    `;
  }

  // 2. Render Sub-Views
  renderNotesView(bab);
  renderStepGuideView(bab);
  renderKeypointsView(bab);
  renderTopicQuizView(bab);
  renderTopicChatbot(bab);
}

/* ==========================================================================
   7. VIEW 1: NOTA VERBATIM & PENERANGAN LENGKAP
   ========================================================================== */
function setNoteDisplayMode(mode) {
  noteDisplayMode = mode;
  document.getElementById("btn-show-both").classList.toggle("active", mode === "both");
  document.getElementById("btn-show-verbatim").classList.toggle("active", mode === "verbatim");
  renderNotesView(getCurrentChapterObj());
}

function renderNotesView(bab) {
  const container = document.getElementById("notes-cards-container");
  if (!container || !bab) return;

  container.innerHTML = (bab.notes || [])
    .map((n) => {
      const verbatimLines = n.verbatim || n.points || [];
      const explanationText = n.explanation || n.summary || "";
      const summaryLead = (n.summary && n.explanation && n.summary !== n.explanation)
        ? `<p class="subtopic-summary-lead" style="font-size: 0.95rem; color: #bae6fd; margin-bottom: 0.8rem; line-height: 1.55; background: rgba(0,242,254,0.08); padding: 0.6rem 0.85rem; border-radius: 8px; border-left: 3px solid #00f2fe;"><strong>📌 Ringkasan:</strong> ${n.summary}</p>`
        : "";
      return `
        <article class="note-card">
          <div class="note-card-header">
            <h3 class="note-subtopic-title">${n.subtopic || ""}</h3>
            <span class="verbatim-tag">✓ Fakta Sukatan KSSM</span>
          </div>

          ${summaryLead}

          <div class="verbatim-box">
            <span class="verbatim-box-label">${currentSubject === "matematik" ? "📐 Kaedah & Jalan Kira Lengkap:" : "📌 Nota & Fakta Penting:"}</span>
            <ul class="verbatim-list">
              ${verbatimLines
                .map((line) => {
                  const trimmed = line.trim();
                  const isStep = trimmed.startsWith("Langkah") || trimmed.startsWith("CONTOH") || trimmed.startsWith("JALAN") || trimmed.startsWith("Jawapan:");
                  const isIndentedCalc = line.startsWith("           ");
                  const extraClass = (isStep || isIndentedCalc) ? "math-step-highlight" : "";
                  return `<li class="${extraClass}">${line}</li>`;
                })
                .join("")}
            </ul>
          </div>

          ${
            noteDisplayMode === "both" && explanationText
              ? `
            <div class="explanation-box">
              <span class="explanation-label">💡 Penerangan Lengkap & Huraian Konsep:</span>
              <p class="explanation-text">${explanationText}</p>
            </div>
          `
              : ""
          }
        </article>
      `;
    })
    .join("");
}

/* ==========================================================================
   8. VIEW 2: PANDUAN STEP-BY-STEP & ANIMASI KRONOLOGI
   ========================================================================== */
function renderStepGuideView(bab) {
  const container = document.getElementById("step-guide-container");
  if (!container || !bab) return;

  container.innerHTML = (bab.steps || [])
    .map((s, idx) => {
      const stepTitle = s.title ? `: ${s.title}` : "";
      const stepDesc = s.desc || s.detail || s.guide || "";
      const stepTip = s.tip ? `🔑 Tip Ingatan Pantas: ${s.tip}` : "🔑 Kuasai fakta dan formula ini mengikut sukatan SPM KSSM";
      return `
        <div class="step-item-card" id="step-card-${idx}">
          <div class="step-number-badge">
            <small>STEP</small>
            <span>0${idx + 1}</span>
          </div>
          <div class="step-content">
            <h4>${s.step || `Langkah ${idx + 1}`}${stepTitle}</h4>
            <p>${stepDesc}</p>
            <span class="step-tip">${stepTip}</span>
          </div>
        </div>
      `;
    })
    .join("");
}

function animateStepWalkthrough() {
  const bab = getCurrentChapterObj();
  if (!bab) return;
  const total = (bab.steps || []).length;
  let idx = 0;

  document.querySelectorAll(".step-item-card").forEach((el) => el.classList.remove("highlight-step"));

  const interval = setInterval(() => {
    document.querySelectorAll(".step-item-card").forEach((el) => el.classList.remove("highlight-step"));
    const currentEl = document.getElementById(`step-card-${idx}`);
    if (currentEl) {
      currentEl.classList.add("highlight-step");
      currentEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
    idx++;
    if (idx >= total) {
      clearInterval(interval);
      addXP(15);
    }
  }, 1100);
}

/* ==========================================================================
   9. VIEW 3: KEY POINT PENTING
   ========================================================================== */
function renderKeypointsView(bab) {
  const container = document.getElementById("keypoints-container");
  if (!container || !bab) return;

  container.innerHTML = (bab.keypoints || [])
    .map((kp, idx) => {
      if (typeof kp === "string") {
        return `
          <div class="kp-card">
            <span class="kp-badge">⚡ Fakta Kunci ${idx + 1}</span>
            <p class="kp-meaning" style="font-size: 0.96rem; font-weight: 600; color: #ffffff; margin-top: 0.5rem; line-height: 1.5;">${kp}</p>
          </div>
        `;
      }
      return `
        <div class="kp-card">
          <span class="kp-badge">⚡ ${kp.badge || "Konsep Kunci"}</span>
          <h4 class="kp-term">${kp.term || ""}</h4>
          <p class="kp-meaning">${kp.meaning || ""}</p>
        </div>
      `;
    })
    .join("");
}

/* ==========================================================================
   10. VIEW 4: SOALAN MENGIKUT TOPIK (OBJEKTIF + STRUKTUR)
   ========================================================================== */
function renderTopicQuizView(bab) {
  const container = document.getElementById("topic-quiz-container");
  if (!container || !bab) return;

  if (!topicQuizState[bab.id]) {
    topicQuizState[bab.id] = { answered: {}, score: 0 };
  }
  const state = topicQuizState[bab.id];
  const totalQ = (bab.questions || []).length;
  const answeredCount = Object.keys(state.answered).length;

  let html = `
    <div class="quiz-score-banner">
      <div>
        <span class="eyebrow-tag">PRESTASI TOPIK SEMASA: ${bab.babNum}</span>
        <h3>Skor Anda: <span id="topic-score-val">${state.score}</span> / ${totalQ} (${totalQ > 0 ? Math.round((state.score / totalQ) * 100) : 0}%)</h3>
      </div>
      <div>
        <span>Dijawab: <strong>${answeredCount} / ${totalQ}</strong> Soalan Objektif</span>
      </div>
    </div>
  `;

  // Objective Questions
  html += (bab.questions || [])
    .map((qObj, qIdx) => {
      const userChoice = state.answered[qIdx];
      const isAnswered = userChoice !== undefined;
      const qText = qObj.q || qObj.question || "";
      const isCorrectOption = (oIdx) => {
        if (typeof qObj.answer === "number") return oIdx === qObj.answer;
        return (qObj.options[oIdx] === qObj.answer || oIdx === qObj.options.indexOf(qObj.answer));
      };

      return `
        <div class="q-card">
          <div class="q-header">
            <span class="q-num-pill">Soalan Topik ${qIdx + 1} (${bab.babNum})</span>
            <span class="verbatim-tag">Berdasarkan Fakta Silibus</span>
          </div>
          <p class="q-text">${qText}</p>
          <div class="options-list">
            ${(qObj.options || [])
              .map((opt, oIdx) => {
                let btnClass = "opt-btn";
                if (isAnswered) {
                  if (isCorrectOption(oIdx)) btnClass += " correct";
                  else if (oIdx === userChoice) btnClass += " wrong";
                }
                const letter = ["A", "B", "C", "D"][oIdx];
                return `
                  <button class="${btnClass}" ${isAnswered ? "disabled" : ""} onclick="answerTopicQuestion('${bab.id}', ${qIdx}, ${oIdx})">
                    <strong>${letter}.</strong> ${opt}
                  </button>
                `;
              })
              .join("")}
          </div>
          <div class="q-feedback ${isAnswered ? "show " + (isCorrectOption(userChoice) ? "fb-ok" : "fb-err") : ""}">
            <strong>${isCorrectOption(userChoice) ? "✅ Tepat Sekali!" : "❌ Kurang Tepat."}</strong> ${qObj.explanation || ""}
          </div>
        </div>
      `;
    })
    .join("");

  // Structured Questions for Chapter
  html += (bab.struktur || [])
    .map((sObj, sIdx) => {
      const sQuestion = sObj.soalan || sObj.q || "";
      const sMarkah = sObj.markah ? `<span class="markah-badge">${sObj.markah}</span>` : "";
      const sAnswer = sObj.jawapan || sObj.skema || "";
      const sPanduan = sObj.panduanKoreksi ? `<div class="panduan-koreksi"><em>Panduan Penskoran:</em> ${sObj.panduanKoreksi}</div>` : "";
      let skemaHtml = "";
      if (Array.isArray(sAnswer)) {
        skemaHtml = sAnswer.map(line => `<li>${line}</li>`).join("");
      } else if (typeof sAnswer === "string") {
        skemaHtml = `<li>${sAnswer}</li>`;
      }

      return `
        <div class="struktur-card">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span class="q-num-pill">✍️ Latihan Soalan Struktur ${bab.babNum}</span>
            ${sMarkah}
          </div>
          <p class="q-text" style="margin-top:0.6rem;">${sQuestion}</p>
          <textarea class="struktur-textarea" placeholder="Taipkan isi jawapan anda di sini sebelum menyemak skema rasmi..."></textarea>
          <button class="btn-Cyan-sm" onclick="toggleSkema('skema-${bab.id}-${sIdx}')">👁️ Semak Skema Jawapan Tepat</button>
          <div class="skema-box" id="skema-${bab.id}-${sIdx}">
            <strong style="color:#4ade80; display:block; margin-bottom:0.4rem;">✓ Skema Jawapan 100% Silibus:</strong>
            <ul class="verbatim-list">
              ${skemaHtml}
            </ul>
            ${sPanduan}
          </div>
        </div>
      `;
    })
    .join("");

  container.innerHTML = html;
}

function answerTopicQuestion(babId, qIdx, chosenIdx) {
  const data = getActiveSubjectData();
  const bab = data.find((b) => b.id === babId);
  if (!bab || !bab.questions) return;

  if (!topicQuizState[babId]) {
    topicQuizState[babId] = { answered: {}, score: 0 };
  }
  const state = topicQuizState[babId];
  if (state.answered[qIdx] !== undefined) return;

  state.answered[qIdx] = chosenIdx;
  const qObj = bab.questions[qIdx];
  let isCorrect = false;
  if (typeof qObj.answer === "number") {
    isCorrect = (chosenIdx === qObj.answer);
  } else {
    isCorrect = (qObj.options[chosenIdx] === qObj.answer || chosenIdx === qObj.options.indexOf(qObj.answer));
  }

  if (isCorrect) {
    state.score += 1;
    addXP(20);
  } else {
    addXP(5);
  }

  if (Object.keys(state.answered).length === bab.questions.length) {
    completedQuizzes.add(babId);
    updateUserStatsUI();
    renderChapterPills();
  }

  renderTopicQuizView(bab);
}

function resetTopicQuiz() {
  topicQuizState[currentBabId] = { answered: {}, score: 0 };
  renderTopicQuizView(getCurrentChapterObj());
}

function toggleSkema(id) {
  const el = document.getElementById(id);
  if (el) {
    el.classList.toggle("show");
    addXP(10);
  }
}

/* ==========================================================================
   11. VIEW 5: SOALAN KESELURUHAN (MERENTAS SEMUA BAB SUBJEK AKTIF)
   ========================================================================== */
let activeExamQuestions = [];

function initComprehensiveExam(mode = "all") {
  const container = document.getElementById("comprehensive-exam-container");
  if (!container) return;

  if (mode === "struktur") {
    renderAllStrukturExam(container);
    return;
  }

  const data = getActiveSubjectData();
  const allPool = [];
  data.forEach((bab) => {
    bab.questions.forEach((qObj) => {
      allPool.push({
        babId: bab.id,
        babNum: bab.babNum,
        babTitle: bab.title,
        ...qObj
      });
    });
  });

  if (mode === "random15") {
    activeExamQuestions = [...allPool].sort(() => Math.random() - 0.5).slice(0, 15);
  } else {
    activeExamQuestions = allPool;
  }

  examQuizState = { answered: {}, score: 0 };
  renderComprehensiveExamUI();
}

function renderComprehensiveExamUI() {
  const container = document.getElementById("comprehensive-exam-container");
  if (!container) return;

  const total = activeExamQuestions.length;
  const answeredCount = Object.keys(examQuizState.answered).length;
  const pct = total > 0 ? Math.round((examQuizState.score / total) * 100) : 0;
  const subjectName = currentSubject.toUpperCase();

  let html = `
    <div class="quiz-score-banner">
      <div>
        <span class="eyebrow-tag">SIMULASI PEPERIKSAAN KESELURUHAN ${subjectName} TINGKATAN ${currentForm}</span>
        <h3>Markah Keseluruhan: ${examQuizState.score} / ${total} (${pct}%)</h3>
      </div>
      <div>
        <span>Kemajuan: <strong>${answeredCount} / ${total}</strong> Soalan Dijawab</span>
      </div>
    </div>
  `;

  html += activeExamQuestions
    .map((qObj, idx) => {
      const userChoice = examQuizState.answered[idx];
      const isAnswered = userChoice !== undefined;
      const qText = qObj.q || qObj.question || "";
      const isCorrectAnswer = (chosenIdx) => {
        if (typeof qObj.answer === "number") return chosenIdx === qObj.answer;
        return (qObj.options[chosenIdx] === qObj.answer || chosenIdx === qObj.options.indexOf(qObj.answer));
      };

      return `
        <div class="q-card">
          <div class="q-header">
            <span class="q-num-pill">Soalan #${idx + 1} • ${qObj.babNum}: ${qObj.babTitle}</span>
            <span class="verbatim-tag">Kertas 1</span>
          </div>
          <p class="q-text">${qText}</p>
          <div class="options-list">
            ${(qObj.options || [])
              .map((opt, oIdx) => {
                let btnClass = "opt-btn";
                if (isAnswered) {
                  if (isCorrectAnswer(oIdx)) btnClass += " correct";
                  else if (oIdx === userChoice) btnClass += " wrong";
                }
                const letter = ["A", "B", "C", "D"][oIdx];
                return `
                  <button class="${btnClass}" ${isAnswered ? "disabled" : ""} onclick="answerExamQuestion(${idx}, ${oIdx})">
                    <strong>${letter}.</strong> ${opt}
                  </button>
                `;
              })
              .join("")}
          </div>
          <div class="q-feedback ${isAnswered ? "show " + (isCorrectAnswer(userChoice) ? "fb-ok" : "fb-err") : ""}">
            <strong>${isCorrectAnswer(userChoice) ? "✅ Jawapan Tepat!" : "❌ Jawapan Kurang Tepat."}</strong> ${qObj.explanation || ""}
          </div>
        </div>
      `;
    })
    .join("");

  container.innerHTML = html;
}

function answerExamQuestion(idx, chosenIdx) {
  if (examQuizState.answered[idx] !== undefined) return;
  const qObj = activeExamQuestions[idx];
  if (!qObj) return;

  examQuizState.answered[idx] = chosenIdx;
  let isCorrect = false;
  if (typeof qObj.answer === "number") {
    isCorrect = (chosenIdx === qObj.answer);
  } else {
    isCorrect = (qObj.options[chosenIdx] === qObj.answer || chosenIdx === qObj.options.indexOf(qObj.answer));
  }

  if (isCorrect) {
    examQuizState.score += 1;
    addXP(25);
  } else {
    addXP(5);
  }
  renderComprehensiveExamUI();
}

function renderAllStrukturExam(container) {
  const data = getActiveSubjectData();
  const subjectName = currentSubject.toUpperCase();

  let html = `
    <div class="quiz-score-banner">
      <div>
        <span class="eyebrow-tag">KERTAS 2: KOLEKSI LENGKAP SOALAN STRUKTUR ${subjectName} TINGKATAN ${currentForm}</span>
        <h3>Latih Tubi Penulisan Fakta Tepat Mengikut Silibus Lengkap SPM</h3>
      </div>
    </div>
  `;

  data.forEach((bab) => {
    (bab.struktur || []).forEach((sObj, sIdx) => {
      const sQuestion = sObj.soalan || sObj.q || "";
      const sMarkah = sObj.markah ? `<span class="markah-badge">${sObj.markah}</span>` : "";
      const sAnswer = sObj.jawapan || sObj.skema || "";
      const sPanduan = sObj.panduanKoreksi ? `<div class="panduan-koreksi"><em>Panduan Penskoran:</em> ${sObj.panduanKoreksi}</div>` : "";
      let skemaHtml = "";
      if (Array.isArray(sAnswer)) {
        skemaHtml = sAnswer.map(line => `<li>${line}</li>`).join("");
      } else if (typeof sAnswer === "string") {
        skemaHtml = `<li>${sAnswer}</li>`;
      }

      html += `
        <div class="struktur-card">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span class="q-num-pill">${bab.babNum}: ${bab.title}</span>
            ${sMarkah}
          </div>
          <p class="q-text" style="margin-top:0.6rem;">${sQuestion}</p>
          <textarea class="struktur-textarea" placeholder="Tulis jawapan anda berdasarkan fakta teks..."></textarea>
          <button class="btn-Cyan-sm" onclick="toggleSkema('exam-skema-${bab.id}-${sIdx}')">👁️ Papar Skema Pemarkahan</button>
          <div class="skema-box" id="exam-skema-${bab.id}-${sIdx}">
            <strong style="color:#4ade80; display:block; margin-bottom:0.4rem;">✓ Skema Jawapan Rasmi:</strong>
            <ul class="verbatim-list">
              ${skemaHtml}
            </ul>
            ${sPanduan}
          </div>
        </div>
      `;
    });
  });

  container.innerHTML = html;
}

/* ==========================================================================
   12. VIEW 6: ARKIB TEKS ASAL 100%
   ========================================================================== */
function renderVerbatimArchive(filterQuery = "") {
  const container = document.getElementById("verbatim-archive-container");
  if (!container) return;

  const data = getActiveSubjectData();
  const q = filterQuery.trim().toLowerCase();

  const filteredBabs = data.filter((bab) => {
    if (!q) return true;
    if (bab.title.toLowerCase().includes(q) || bab.babNum.toLowerCase().includes(q)) return true;
    return (bab.notes || []).some(
      (n) => {
        const vLines = n.verbatim || n.points || [];
        return (n.subtopic || "").toLowerCase().includes(q) ||
          vLines.some((line) => line.toLowerCase().includes(q));
      }
    );
  });

  container.innerHTML = filteredBabs
    .map(
      (bab) => {
        const cleanPages = (bab.anyflipPages || "").replace(/\s*\([^\)]*anyflip[^\)]*\)/gi, "").replace(/\s*\(Nota Digital[^\)]*\)/gi, "").trim();
        return `
      <div class="archive-bab-block">
        <div class="ach-badge-row" style="margin-bottom:0.8rem;">
          <span class="ach-bab-pill">${bab.icon} ${bab.babNum}: ${bab.title}</span>
          <span class="ach-page-pill">📄 ${cleanPages || bab.anyflipPages}</span>
        </div>
        <div class="notes-grid">
          ${(bab.notes || [])
            .map(
              (n) => {
                const vLines = n.verbatim || n.points || [];
                return `
              <div class="verbatim-box">
                <span class="verbatim-box-label">${n.subtopic || ""}</span>
                <ul class="verbatim-list">
                  ${vLines.map((line) => `<li>${line}</li>`).join("")}
                </ul>
              </div>
            `;
              }
            )
            .join("")}
        </div>
      </div>
    `;
      }
    )
    .join("");
}

function filterVerbatimArchive(val) {
  renderVerbatimArchive(val);
}

/* ==========================================================================
   13. 3D FLASHCARD MODAL
   ========================================================================== */
function openFlashcardModal() {
  const bab = getCurrentChapterObj();
  if (!bab) return;

  flashcardList = (bab.keypoints || []).map((kp, idx) => {
    if (typeof kp === "string") {
      return {
        front: `Fakta Utama #${idx + 1}`,
        back: kp,
        badge: `${bab.babNum} • Fakta Kunci`
      };
    }
    return {
      front: kp.term || `Konsep #${idx + 1}`,
      back: kp.meaning || "",
      badge: `${bab.babNum} • ${kp.badge || "Konsep Kunci"}`
    };
  });
  currentFlashcardIndex = 0;

  document.getElementById("flashcard-modal-title").textContent = `Kad Imbasan: ${bab.babNum} - ${bab.title}`;
  document.getElementById("flashcard-modal").classList.remove("hidden");
  updateFlashcardDisplay();
}

function closeFlashcardModal() {
  document.getElementById("flashcard-modal").classList.add("hidden");
}

function flipCurrentCard() {
  const card = document.getElementById("flashcard-element");
  if (card) card.classList.toggle("is-flipped");
}

function updateFlashcardDisplay() {
  const card = document.getElementById("flashcard-element");
  if (card) card.classList.remove("is-flipped");

  const item = flashcardList[currentFlashcardIndex];
  if (!item) return;

  setTimeout(() => {
    document.getElementById("fc-front-text").textContent = item.front;
    document.getElementById("fc-back-text").textContent = item.back;
    document.getElementById("fc-bab-label").textContent = item.badge;
    document.getElementById("fc-counter").textContent = `${currentFlashcardIndex + 1} / ${flashcardList.length}`;
  }, 150);
}

function nextFlashcard() {
  if (flashcardList.length === 0) return;
  currentFlashcardIndex = (currentFlashcardIndex + 1) % flashcardList.length;
  updateFlashcardDisplay();
  addXP(5);
}

function prevFlashcard() {
  if (flashcardList.length === 0) return;
  currentFlashcardIndex = (currentFlashcardIndex - 1 + flashcardList.length) % flashcardList.length;
  updateFlashcardDisplay();
}

/* ==========================================================================
   14. GAMIFIKASI (XP & KEMAJUAN)
   ========================================================================== */
function addXP(amount) {
  userXP += amount;
  updateUserStatsUI();
}

function updateUserStatsUI() {
  const xpEl = document.getElementById("xp-count");
  const masteryEl = document.getElementById("mastery-percent");
  if (xpEl) xpEl.textContent = userXP;
  if (masteryEl) {
    const data = getActiveSubjectData();
    let doneInSubject = 0;
    data.forEach((b) => {
      if (completedQuizzes.has(b.id)) doneInSubject++;
    });
    const pct = Math.round((doneInSubject / data.length) * 100);
    masteryEl.textContent = `${pct}%`;
  }
}

/* ==========================================================================
   15. TUTOR AI CHATBOT INTERAKTIF (PER-TOPIC & FLOATING FAB)
   ========================================================================== */

let topicChatHistory = {}; // Key: `${currentSubject}_${babId}`

function getSubjectTutorInfo() {
  const map = {
    sejarah: {
      name: `Tutor AI Sejarah T${currentForm}`,
      avatar: "assets/hero-tutor.png",
      subjectDisplayName: `Sejarah Tingkatan ${currentForm} KSSM`
    },
    sains: {
      name: `Tutor AI Sains T${currentForm}`,
      avatar: "assets/hero-science-tutor.png",
      subjectDisplayName: `Sains Tingkatan ${currentForm} KSSM`
    },
    matematik: {
      name: `Tutor AI Matematik T${currentForm}`,
      avatar: "assets/hero-math-tutor.png",
      subjectDisplayName: `Matematik Tingkatan ${currentForm} KSSM`
    },
    kimia: {
      name: `Tutor AI Kimia T${currentForm}`,
      avatar: "assets/hero-chemistry-tutor.png",
      subjectDisplayName: `Kimia Tingkatan ${currentForm} KSSM`
    },
    fizik: {
      name: `Tutor AI Fizik T${currentForm}`,
      avatar: "assets/hero-physics-tutor.png",
      subjectDisplayName: `Fizik Tingkatan ${currentForm} KSSM`
    },
    biologi: {
      name: `Tutor AI Biologi T${currentForm}`,
      avatar: "assets/hero-biology-tutor.png",
      subjectDisplayName: `Biologi Tingkatan ${currentForm} KSSM`
    },
    perakaunan: {
      name: `Tutor AI Perakaunan T${currentForm}`,
      avatar: "assets/hero-accounting-tutor.png",
      subjectDisplayName: `Prinsip Perakaunan Tingkatan ${currentForm} KSSM`
    },
    ekonomi: {
      name: `Tutor AI Ekonomi T${currentForm}`,
      avatar: "assets/hero-economics-tutor.png",
      subjectDisplayName: `Ekonomi Tingkatan ${currentForm} KSSM`
    }
  };
  return map[currentSubject] || map.sejarah;
}

function updateChatbotTutorUI() {
  const tutor = getSubjectTutorInfo();
  const fabImg = document.getElementById("fab-tutor-img");
  if (fabImg) fabImg.src = tutor.avatar;
  const cbImg = document.getElementById("cb-tutor-img");
  if (cbImg) cbImg.src = tutor.avatar;
  const cbName = document.getElementById("cb-tutor-name");
  if (cbName) cbName.textContent = tutor.name;
}

function renderTopicChatbot(bab) {
  if (!bab) bab = getCurrentChapterObj();
  if (!bab) return;

  const tutor = getSubjectTutorInfo();
  updateChatbotTutorUI();

  // 1. Update Chapter Badge
  const pill = document.getElementById("cb-chapter-pill");
  if (pill) {
    pill.textContent = `${bab.babNum}: ${bab.title}`;
  }

  // 2. Dynamic Suggestion Chips
  const chipsContainer = document.getElementById("cb-chips-container");
  if (chipsContainer) {
    const chipItems = [];

    // Chip 1: Ringkasan Bab
    chipItems.push({
      icon: "📚",
      text: `Ringkaskan konsep penting ${bab.babNum}`
    });

    // Subtopic chips (up to 3 subtopics)
    if (bab.notes && Array.isArray(bab.notes)) {
      bab.notes.slice(0, 3).forEach((n) => {
        let label = n.subtopic;
        if (label.includes(":")) {
          label = label.split(":")[1].trim();
        }
        chipItems.push({
          icon: "💡",
          text: `Terangkan ${label}`
        });
      });
    }

    // Chip: Formula & Kata Kunci
    chipItems.push({
      icon: "⚡",
      text: `Apakah kata kunci & formula penting ${bab.babNum}?`
    });

    // Chip: Contoh Soalan SPM
    chipItems.push({
      icon: "🎯",
      text: `Beri 1 soalan SPM berserta skema markah penuh untuk ${bab.babNum}`
    });

    chipsContainer.innerHTML = chipItems
      .map(
        (c) => `
        <button class="cb-chip" onclick="askSuggestedQuestion('${c.text.replace(/'/g, "\\'")}')">
          <span>${c.icon}</span>
          <span>${c.text}</span>
        </button>
      `
      )
      .join("");
  }

  // 3. Initialize Chat History if empty
  const chatKey = `${currentSubject}_${bab.id}`;
  if (!topicChatHistory[chatKey] || topicChatHistory[chatKey].length === 0) {
    topicChatHistory[chatKey] = [
      {
        sender: "tutor",
        text: `👋 **Hai! Saya ${tutor.name}!**\n\nSelamat datang ke modul interaktif **${bab.babNum}: ${bab.title}** (${tutor.subjectDisplayName}).\n\nSaya boleh bantu anda menerangkan konsep dengan mudah, menghafal fakta & eksperimen, memberikan kata kunci soalan struktur, atau menyediakan latihan SPM berserta skema pemarkahan penuh!\n\n💡 *Klik mana-mana cadangan soalan di atas atau taipkan soalan anda di bawah untuk mula bertanya.*`,
        time: getCurrentChatTime()
      }
    ];
  }

  // 4. Render Messages
  renderChatMessages(chatKey);
}

function getCurrentChatTime() {
  const d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  if (m < 10) m = "0" + m;
  return `${h}:${m}`;
}

function renderChatMessages(chatKey) {
  const area = document.getElementById("cb-messages-area");
  if (!area) return;

  const messages = topicChatHistory[chatKey] || [];
  const tutor = getSubjectTutorInfo();

  area.innerHTML = messages
    .map((msg) => {
      if (msg.sender === "user") {
        return `
          <div class="cb-msg-row user-row">
            <div class="cb-bubble">
              <div class="cb-bubble-content">${escapeHTML(msg.text)}</div>
            </div>
          </div>
        `;
      } else {
        const formatted = formatChatMarkdown(msg.text);
        const xpBadge = msg.xp ? `<div class="cb-xp-awarded-pill">✨ +${msg.xp} XP Diperoleh!</div>` : "";
        return `
          <div class="cb-msg-row tutor-row">
            <div class="cb-msg-avatar">
              <img src="${tutor.avatar}" alt="Tutor AI" />
            </div>
            <div class="cb-bubble">
              <div class="cb-bubble-content">${formatted}</div>
              ${xpBadge}
            </div>
          </div>
        `;
      }
    })
    .join("");

  area.scrollTop = area.scrollHeight;
}

function escapeHTML(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatChatMarkdown(str) {
  if (!str) return "";
  let html = str;

  // Escape HTML tags first
  html = escapeHTML(html);

  // Bold **text**
  html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

  // Italic *text*
  html = html.replace(/\*(.*?)\*/g, "<em>$1</em>");

  // Format Formula Box: ```formula ... ``` or [FORMULA: ...]
  html = html.replace(/\[FORMULA:\s*(.*?)\]/g, '<div class="cb-formula-box">📐 $1</div>');

  // Format SPM Exam Tip Box: [TIP_SPM:\s*(.*?)]
  html = html.replace(/\[TIP_SPM:\s*(.*?)\]/g, '<div class="cb-exam-tip">🎯 <strong>Tip Skor SPM:</strong> $1</div>');

  // Replace newlines with <br> or paragraphs
  const paragraphs = html.split(/\n\n+/);
  html = paragraphs
    .map((p) => {
      // Check if it's a bulleted list
      const lines = p.split("\n");
      const isBullet = lines.every((l) => l.trim().startsWith("- ") || l.trim().startsWith("• ") || /^\d+\.\s/.test(l.trim()) || l.trim() === "");
      if (isBullet && lines.length > 1) {
        const listItems = lines
          .filter((l) => l.trim() !== "")
          .map((l) => {
            const clean = l.replace(/^[-•]\s*/, "").replace(/^\d+\.\s*/, "");
            return `<li>${clean}</li>`;
          })
          .join("");
        return `<ul>${listItems}</ul>`;
      }
      return `<p>${lines.join("<br>")}</p>`;
    })
    .join("");

  return html;
}

function askSuggestedQuestion(qText) {
  sendChatUserMessage(qText);
}

function sendChatUserMessage(customText) {
  const input = document.getElementById("cb-user-input");
  const text = (customText || (input ? input.value : "")).trim();
  if (!text) return;

  if (input) input.value = "";

  const bab = getCurrentChapterObj();
  const chatKey = `${currentSubject}_${bab.id}`;
  if (!topicChatHistory[chatKey]) topicChatHistory[chatKey] = [];

  // Add User Message
  topicChatHistory[chatKey].push({
    sender: "user",
    text: text,
    time: getCurrentChatTime()
  });

  renderChatMessages(chatKey);

  // Add Typing Indicator
  const area = document.getElementById("cb-messages-area");
  const tutor = getSubjectTutorInfo();
  if (area) {
    const typingDiv = document.createElement("div");
    typingDiv.className = "cb-msg-row tutor-row";
    typingDiv.id = "cb-typing-indicator-row";
    typingDiv.innerHTML = `
      <div class="cb-msg-avatar">
        <img src="${tutor.avatar}" alt="Tutor" />
      </div>
      <div class="cb-bubble cb-typing-indicator">
        <span></span><span></span><span></span>
      </div>
    `;
    area.appendChild(typingDiv);
    area.scrollTop = area.scrollHeight;
  }

  // Generate Answer with natural micro-delay
  setTimeout(() => {
    // Remove typing indicator
    const typingRow = document.getElementById("cb-typing-indicator-row");
    if (typingRow) typingRow.remove();

    const tutorReply = generateTutorAnswer(text, bab, currentSubject);

    topicChatHistory[chatKey].push({
      sender: "tutor",
      text: tutorReply,
      time: getCurrentChatTime(),
      xp: 5
    });

    addXP(5);
    renderChatMessages(chatKey);
  }, 450);
}

function generateTutorAnswer(query, bab, subject) {
  const q = query.toLowerCase().trim();

  // 1. Greetings & Courtesy
  if (/^(hai|hello|salam|assalam|hi|selamat pagi|selamat petang|terima kasih|tq|thanks)/i.test(q)) {
    return `Hai! Sama-sama! Saya amat berbesar hati membimbing anda menguasai **${bab.babNum}: ${bab.title}**. Jangan segan untuk bertanya sebarang konsep atau minta saya terangkan subtopik tertentu ya! 📚✨`;
  }

  // 2. Identity Query
  if (q.includes("siapa awak") || q.includes("siapa anda") || q.includes("nama awak")) {
    const tutor = getSubjectTutorInfo();
    return `Saya adalah **${tutor.name}** dari **MasterAcademiq.ai**! Saya dilatih khusus menggunakan sukatan KSSM Tingkatan ${currentForm} untuk membimbing anda menguasai fakta, formula, eksperimen, dan teknik menjawab soalan SPM dengan cemerlang. 🤖🎓`;
  }

  // 3. Ringkasan Bab / Synopsis / Overview
  if (q.includes("ringkas") || q.includes("sinopsis") || q.includes("overview") || q.includes("gambaran") || q.includes("tentang apa") || q.includes("terangkan bab ini")) {
    let subtopicsList = "";
    if (bab.notes && Array.isArray(bab.notes)) {
      subtopicsList = bab.notes.map((n, i) => `\n- **${n.subtopic}**`).join("");
    }
    return `### 📘 Gambaran Keseluruhan ${bab.babNum}: ${bab.title}\n\n**Sinopsis Utama:**\n${bab.synopsis}\n\n**Subtopik yang dipelajari dalam bab ini:**${subtopicsList}\n\n[TIP_SPM: Pastikan anda menguasai setiap subtopik di atas kerana soalan SPM Kertas 1 (Objektif) dan Kertas 2 (Bahagian A/B) kerap menggabungkan konsep merentas subtopik!]`;
  }

  // 4. Minta Soalan SPM / Skema Jawapan / Latihan
  if (q.includes("soalan") || q.includes("skema") || q.includes("struktur") || q.includes("latihan") || q.includes("spm") || q.includes("kuiz")) {
    let response = "";
    if (bab.struktur && bab.struktur.length > 0) {
      const s = bab.struktur[0];
      const sQ = s.soalan || s.q || "";
      const sAns = s.jawapan || s.skema || "";
      const skemaText = Array.isArray(sAns) ? sAns.map((sk, idx) => `${idx + 1}. ${sk}`).join("\n") : sAns;
      const markStr = s.markah ? ` (${s.markah})` : "";
      const panduanStr = s.panduanKoreksi ? `\n\n*Panduan Pemarkahan:* ${s.panduanKoreksi}` : "";
      response = `### 🎯 Contoh Soalan Peperiksaan SPM (Format Kertas 2)\n\n**Soalan Struktur${markStr}:**\n${sQ}\n\n**Skema Pemarkahan Penuh:**\n${skemaText}${panduanStr}\n\n[TIP_SPM: Dalam soalan struktur atau esei, gunakan kata kunci tepat seperti dalam skema di atas untuk memastikan anda mendapat markah maksimum!]`;
      return response;
    } else if (bab.questions && bab.questions.length > 0) {
      const mcq = bab.questions[0];
      const qText = mcq.question || mcq.q || "";
      const optStr = (mcq.options || []).map((opt, i) => `(${String.fromCharCode(65 + i)}) ${opt}`).join("\n");
      let correctChar = "";
      if (typeof mcq.answer === "number") {
        correctChar = String.fromCharCode(65 + mcq.answer);
      } else {
        const idx = (mcq.options || []).indexOf(mcq.answer);
        correctChar = idx >= 0 ? String.fromCharCode(65 + idx) : mcq.answer;
      }
      return `### 🎯 Contoh Soalan Objektif SPM (${bab.babNum})\n\n**Soalan:**\n${qText}\n\n${optStr}\n\n**Jawapan Tepat:** **${correctChar}**\n\n**Penerangan:** ${mcq.explanation || ""}\n\n[TIP_SPM: Teliti kata kunci dalam soalan sebelum memilih jawapan untuk mengelakkan perangkap soalan!]`;
    }
  }

  // 5. Formula & Key Points / Kata Kunci
  if (q.includes("formula") || q.includes("kata kunci") || q.includes("key point") || q.includes("istilah") || q.includes("definisi") || q.includes("maksud")) {
    if (bab.keypoints && bab.keypoints.length > 0) {
      const pointsList = bab.keypoints
        .map((kp, idx) => {
          if (typeof kp === "string") return `- **Fakta ${idx + 1}:** ${kp}`;
          return `- **${kp.term}** (${kp.badge}): ${kp.meaning}`;
        })
        .join("\n\n");
      return `### ⚡ Kata Kunci & Istilah Wajib Ingat (${bab.babNum})\n\nBerikut adalah senarai fakta kunci dan istilah penting bagi bab ini:\n\n${pointsList}\n\n[TIP_SPM: Hafal istilah dan definisi tepat ini kerana ia membawa markah terus dalam Bahagian A dan B!]`;
    }
  }

  // 6. Langkah demi Langkah / Proses / Kronologi / Eksperimen
  if (q.includes("langkah") || q.includes("step") || q.includes("proses") || q.includes("aliran") || q.includes("kronologi") || q.includes("eksperimen")) {
    if (bab.steps && bab.steps.length > 0) {
      const stepsList = bab.steps
        .map((st, idx) => {
          const title = st.title ? `: ${st.title}` : "";
          const desc = st.desc || st.detail || st.guide || "";
          const tip = st.tip ? `\n  💡 *Tip: ${st.tip}*` : "";
          return `- **${st.step || `Langkah ${idx + 1}`}${title}**\n  ${desc}${tip}`;
        })
        .join("\n\n");
      return `### 🧭 Aliran Langkah Demi Langkah (${bab.babNum})\n\n${stepsList}\n\n[TIP_SPM: Untuk soalan kronologi atau prosedur eksperimen, susun fakta mengikut urutan logik bermula dari langkah pertama hingga akhir!]`;
    }
  }

  // 7. Subtopic Search inside Active Chapter (Exact or Keyword Matching)
  if (bab.notes && Array.isArray(bab.notes)) {
    // Check if query matches a subtopic number or title
    for (let note of bab.notes) {
      const subtopicLower = note.subtopic.toLowerCase();
      const numMatch = note.subtopic.match(/(\d+\.\d+)/);
      const subNum = numMatch ? numMatch[1] : "";

      // Check subtopic match
      const isSubtopicMatch = (subNum && q.includes(subNum)) ||
        q.split(/\s+/).some((w) => w.length > 3 && subtopicLower.includes(w));

      if (isSubtopicMatch) {
        const verbatimPoints = Array.isArray(note.verbatim)
          ? note.verbatim.map((v) => `- ${v}`).join("\n")
          : `- ${note.verbatim}`;

        return `### 📖 Penerangan Terperinci: ${note.subtopic}\n\n**Ringkasan:**\n${note.summary || ""}\n\n**Fakta Buku Teks:**\n${verbatimPoints}\n\n**Huraian Konsep:**\n${note.explanation || ""}\n\n[TIP_SPM: Soalan KBAT kerap mengaitkan subtopik ini dengan situasi semasa. Fahami 'sebab dan akibat' daripada fakta di atas!]`;
      }
    }

    // Check query words against verbatim or explanation
    for (let note of bab.notes) {
      const textToSearch = (
        (note.summary || "") + " " +
        (Array.isArray(note.verbatim) ? note.verbatim.join(" ") : note.verbatim || "") + " " +
        (note.explanation || "")
      ).toLowerCase();

      const matchedWords = q.split(/\s+/).filter((w) => w.length > 3 && textToSearch.includes(w));
      if (matchedWords.length >= 1) {
        const verbatimPoints = Array.isArray(note.verbatim)
          ? note.verbatim.slice(0, 3).map((v) => `- ${v}`).join("\n")
          : `- ${note.verbatim}`;

        return `### 💡 Maklumat Berkaitan: ${note.subtopic}\n\nBerdasarkan soalan anda mengenai *"${matchedWords.join(', ')}"*, berikut adalah fakta silibus berkaitan:\n\n${verbatimPoints}\n\n**Huraian:**\n${note.explanation || note.summary || ""}\n\n[TIP_SPM: Pastikan anda menulis huraian lengkap bersama contoh atau bukti sejarah/sains untuk mendapat markah penuh!]`;
      }
    }
  }

  // 8. Cross-chapter lookup in same subject
  const allSubjectData = getActiveSubjectData();
  for (let otherBab of allSubjectData) {
    if (otherBab.id !== bab.id && otherBab.notes) {
      for (let note of otherBab.notes) {
        const textToSearch = (note.subtopic + " " + (note.summary || "")).toLowerCase();
        if (q.split(/\s+/).some((w) => w.length > 3 && textToSearch.includes(w))) {
          return `Topik yang anda tanyakan (*${query}*) dipelajari dalam **${otherBab.babNum}: ${otherBab.title}** (Subtopik: **${note.subtopic}**).\n\n**Ringkasan Konsep:**\n${note.summary || note.explanation}\n\n💡 *Anda boleh menukar ke ${otherBab.babNum} di menu atas untuk membaca nota penuh, langkah eksperimen, dan menjawab soalan latih tubi bab tersebut!*`;
        }
      }
    }
  }

  // 9. Intelligent General Fallback
  return `Saya memahami soalan anda mengenai: **"${query}"**.\n\nDalam konteks **${bab.babNum}: ${bab.title}**, konsep ini berkait rapat dengan: **${bab.synopsis}**.\n\nUntuk maklumat lebih khusus, anda boleh:\n1. Klik butang subtopik di atas seperti **"${bab.notes && bab.notes[0] ? bab.notes[0].subtopic : 'Ringkasan Bab'}"**\n2. Tanya soalan seperti *"Apakah faktor peristiwa ini berlaku?"* atau *"Beri soalan struktur SPM"*.\n\nSaya sedia membimbing anda sehingga betul-betul faham! 🌟`;
}

function resetTopicChat() {
  const bab = getCurrentChapterObj();
  if (!bab) return;
  const chatKey = `${currentSubject}_${bab.id}`;
  delete topicChatHistory[chatKey];
  renderTopicChatbot(bab);
}

function toggleFloatingChatbot() {
  switchMainView("chatbot", true);
}

