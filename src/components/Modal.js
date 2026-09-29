// Universal Modal Component with Viewport-Fixed Floating Print Button
export function renderModal({ title, bodyHtml, footerButtons = [], onClose }) {
  let backdrop = document.getElementById("app-modal-backdrop");
  if (!backdrop) {
    backdrop = document.createElement("div");
    backdrop.id = "app-modal-backdrop";
    document.body.appendChild(backdrop);
  }

  backdrop.className = "fixed inset-0 z-50 overflow-y-auto p-2 sm:p-6 bg-slate-900/80 backdrop-blur-sm animate-fade-in flex justify-center items-start pt-10 pb-16";

  backdrop.innerHTML = `
    <!-- Viewport-Fixed Floating Control Bar (Permanently Visible at Top Right of Screen) -->
    <div class="fixed top-4 right-6 z-[99999] flex items-center gap-3 no-print">
      <button onclick="window.print()" class="px-5 py-2.5 bg-purple-700 hover:bg-purple-800 text-white font-extrabold rounded-2xl shadow-2xl transition flex items-center gap-2 border-2 border-white text-xs cursor-pointer shadow-purple-900/50">
        <span class="text-base">🖨️</span> CETAK SEKARANG
      </button>
      <button id="floating-modal-close-btn" class="px-4 py-2.5 bg-slate-900 hover:bg-rose-600 text-white font-extrabold rounded-2xl shadow-2xl transition flex items-center gap-1.5 border-2 border-white text-xs cursor-pointer">
        <span>✕</span> TUTUP
      </button>
    </div>

    <div class="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-3xl flex flex-col overflow-hidden my-auto animate-fade-in relative z-10" onclick="event.stopPropagation()">
      <!-- Modal Header Bar -->
      <div class="px-5 py-3.5 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800 modal-header-bar shrink-0">
        <h3 class="text-xs sm:text-sm font-extrabold tracking-tight text-white flex items-center gap-2">
          <span>📋</span> ${title}
        </h3>
        <div class="flex items-center gap-3">
          <button onclick="window.print()" class="px-4 py-1.5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-black transition flex items-center gap-1.5 shadow-md no-print border border-purple-400">
            <span>🖨️</span> Cetak Sekarang
          </button>
          <button id="modal-close-btn" class="w-8 h-8 rounded-xl bg-white/10 hover:bg-rose-600 flex items-center justify-center text-white transition font-bold text-sm">
            ✕
          </button>
        </div>
      </div>

      <!-- Modal Body Content -->
      <div class="p-4 sm:p-6 space-y-4 text-slate-700 text-xs modal-body-content">
        ${bodyHtml}
      </div>

      <!-- Modal Footer Bar -->
      <div class="px-5 py-3 bg-slate-100 border-t border-slate-300 flex items-center justify-between gap-3 modal-footer-bar shrink-0" id="modal-footer-container">
        <div class="text-[11px] text-slate-500 font-semibold no-print flex items-center gap-1">
          <span>💡</span> Skrin pratonton. Tekan butang 'CETAK SEKARANG' di atas kanan.
        </div>
        <div class="flex items-center gap-2" id="modal-footer-buttons"></div>
      </div>
    </div>
  `;

  const footerButtonsContainer = backdrop.querySelector("#modal-footer-buttons");
  footerButtons.forEach((btn) => {
    const buttonEl = document.createElement("button");
    buttonEl.className = btn.className || "px-4 py-2 rounded-lg text-xs font-semibold transition";
    buttonEl.innerText = btn.label;
    buttonEl.onclick = (e) => {
      btn.onClick(e, closeModal);
    };
    footerButtonsContainer.appendChild(buttonEl);
  });

  const closeBtn = backdrop.querySelector("#modal-close-btn");
  const floatingCloseBtn = backdrop.querySelector("#floating-modal-close-btn");

  if (closeBtn) closeBtn.onclick = () => closeModal();
  if (floatingCloseBtn) floatingCloseBtn.onclick = () => closeModal();

  backdrop.onclick = (e) => {
    if (e.target === backdrop) closeModal();
  };

  function closeModal() {
    backdrop.remove();
    if (onClose) onClose();
  }

  window.closeActiveModal = closeModal;

  return { closeModal };
}

window.closeActiveModal = () => {
  const backdrop = document.getElementById("app-modal-backdrop");
  if (backdrop) backdrop.remove();
};

/**
 * Confirmation dialog before record deletion
 */
export function showDeleteConfirmation({ recordId, description, amount, onConfirm }) {
  renderModal({
    title: `Pengesahan Padam Rekod (${recordId})`,
    bodyHtml: `
      <div class="space-y-4 text-center py-2">
        <div class="w-12 h-12 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
          ⚠️
        </div>
        <div>
          <h4 class="font-extrabold text-slate-900 text-sm">Adakah anda pasti untuk memadam rekod ini?</h4>
          <p class="text-slate-500 text-xs mt-1">ID: <strong class="text-slate-800">${recordId}</strong></p>
          <p class="text-slate-600 text-xs mt-0.5">${description} (${amount})</p>
        </div>
      </div>
    `,
    footerButtons: [
      { label: "Batal", className: "px-4 py-2 border rounded-lg text-slate-700 font-semibold", onClick: (e, c) => c() },
      {
        label: "Ya, Padam Rekod Ini",
        className: "px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-lg font-bold shadow-md",
        onClick: (e, c) => {
          c();
          onConfirm();
        },
      },
    ],
  });
}
