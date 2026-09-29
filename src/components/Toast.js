// Toast Notification Component with Bright Modern Visual Feedback
export function showToast(message, type = "success") {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.className = "fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-md w-full no-print pointer-events-none";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  const normType = type === "danger" ? "error" : type;

  const bgColors = {
    success: "bg-emerald-50 text-emerald-950 border-emerald-300 ring-1 ring-emerald-400/40 shadow-xl",
    error: "bg-rose-50 text-rose-950 border-rose-300 ring-1 ring-rose-400/40 shadow-xl",
    warning: "bg-amber-50 text-amber-950 border-amber-300 ring-1 ring-amber-400/40 shadow-xl",
    info: "bg-blue-50 text-blue-950 border-blue-300 ring-1 ring-blue-400/40 shadow-xl",
  };

  const badgeColors = {
    success: "bg-emerald-600 text-white",
    error: "bg-rose-600 text-white",
    warning: "bg-amber-600 text-white",
    info: "bg-blue-600 text-white",
  };

  const icons = {
    success: "✓",
    error: "✕",
    warning: "⚠",
    info: "ℹ",
  };

  toast.className = `pointer-events-auto flex items-center justify-between p-4 rounded-xl border text-xs sm:text-sm font-semibold transition-all duration-300 animate-fade-in ${bgColors[normType] || bgColors.info}`;
  toast.innerHTML = `
    <div class="flex items-center gap-3">
      <span class="w-6 h-6 flex items-center justify-center rounded-full font-bold text-xs shrink-0 ${badgeColors[normType] || badgeColors.info}">
        ${icons[normType] || "ℹ"}
      </span>
      <span class="leading-snug">${message}</span>
    </div>
    <button class="ml-3 opacity-60 hover:opacity-100 text-base font-bold leading-none shrink-0" onclick="this.parentElement.remove()">&times;</button>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    if (toast.parentElement) toast.remove();
  }, 4000);
}
