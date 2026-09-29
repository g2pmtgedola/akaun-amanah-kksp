// Main Application Controller & Router
import { getDatabase } from "./services/api.js";
import { getCurrentUser, setCurrentUserRole } from "./services/auth.js";
import { renderNavbar } from "./components/Navbar.js";
import { renderSidebar } from "./components/Sidebar.js";
import { renderDashboardView, initDashboardCharts } from "./views/DashboardView.js";
import { renderPenyataView, attachPenyataEvents } from "./views/PenyataView.js";
import { renderIncomeView, attachIncomeEvents, openIncomeFormModal } from "./views/IncomeView.js";
import { renderExpenseView, attachExpenseEvents, openExpenseFormModal } from "./views/ExpenseView.js";
import { renderClaimsView, attachClaimsEvents, openClaimFormModal } from "./views/ClaimsView.js";
import { renderInvoiceView, attachInvoiceEvents, openInvoiceFormModal } from "./views/InvoiceView.js";
import { renderQuotationView, attachQuotationEvents, openQuotationFormModal } from "./views/QuotationView.js";
import { renderInventoryView, attachInventoryEvents } from "./views/InventoryView.js";
import { renderAssetsView, attachAssetsEvents, openAssetFormModal } from "./views/AssetsView.js";
import { renderDataQualityView, attachDataQualityEvents } from "./views/DataQualityView.js";
import { renderReportsView, attachReportsEvents } from "./views/ReportsView.js";
import { renderAuditLogView } from "./views/AuditLogView.js";
import { renderSettingsView, attachSettingsEvents } from "./views/SettingsView.js";
import {
  initAutoCloudSync,
  loginFirebaseUser,
  registerFirebaseUser,
  resetPasswordFirebaseUser,
  logoutFirebaseUser,
  getCurrentFirebaseUser
} from "./services/cloudSync.js";

let state = {
  selectedYear: "2025",
  currentRoute: "dashboard",
  activeReportType: "penyata",
  stockSubTab: "SUMMARY",
};

// Register modal handlers globally on initial load
window.openIncomeFormModal = (db, rec) => openIncomeFormModal(db || getDatabase(), rec);
window.openExpenseFormModal = (db, rec) => openExpenseFormModal(db || getDatabase(), rec);
window.openClaimFormModal = (db, rec) => openClaimFormModal(db || getDatabase(), rec);
window.openInvoiceFormModal = (db, rec) => openInvoiceFormModal(db || getDatabase(), rec);
window.openQuotationFormModal = (db, rec) => openQuotationFormModal(db || getDatabase(), rec);
window.openAssetFormModal = (db, rec) => openAssetFormModal(db || getDatabase(), rec);

// Universal Modal Dismiss Helper
window.closeActiveModal = () => {
  const backdrop = document.getElementById("app-modal-backdrop");
  if (backdrop) backdrop.remove();
};

window.loginFirebaseUser = loginFirebaseUser;
window.registerFirebaseUser = registerFirebaseUser;
window.resetPasswordFirebaseUser = resetPasswordFirebaseUser;
window.logoutFirebaseUser = logoutFirebaseUser;
window.getCurrentFirebaseUser = getCurrentFirebaseUser;

export function initApp() {
  const db = getDatabase();

  // Start real-time background multi-device cloud synchronization
  initAutoCloudSync();

  // Router handler
  const handleRoute = () => {
    const hash = window.location.hash.replace("#", "");
    state.currentRoute = hash || "dashboard";
    renderUI();
  };

  window.addEventListener("hashchange", handleRoute);

  // Global search handler
  window.addEventListener("input", (e) => {
    if (e.target && e.target.id === "global-search-input") {
      const term = e.target.value;
      if (term.length > 1) {
        window.location.hash = "reports";
      }
    }
  });

  // Global UI Refresh Callback for Cloud Auto-Sync
  window.appRefreshUI = () => {
    renderUI();
  };

  // Quick Add Trigger Helper
  window.appQuickAdd = (type) => {
    const activeDb = getDatabase();
    if (type === "Income") openIncomeFormModal(activeDb);
    else if (type === "Expense") openExpenseFormModal(activeDb);
    else if (type === "Claim") openClaimFormModal(activeDb);
    else if (type === "Invoice") openInvoiceFormModal(activeDb);
    else if (type === "Quotation") openQuotationFormModal(activeDb);
    else if (type === "Asset") openAssetFormModal(activeDb);
  };

  // Initial render
  renderUI();
}

function renderUI() {
  const db = getDatabase();
  const app = document.getElementById("app");
  if (!app) return;

  app.innerHTML = `
    <div class="min-h-screen flex bg-slate-100 font-sans text-slate-900">
      <!-- Sidebar -->
      ${renderSidebar({ currentRoute: state.currentRoute })}
      
      <!-- Main Content Area -->
      <div class="flex-1 flex flex-col min-w-0 overflow-hidden">
        <!-- Top Navbar -->
        ${renderNavbar({
          selectedYear: state.selectedYear,
          onYearChange: (yr) => {
            state.selectedYear = yr;
            renderUI();
          },
        })}
        
        <!-- View Container -->
        <main class="flex-1 overflow-y-auto p-6 space-y-6">
          ${renderCurrentView(db)}
        </main>
      </div>
    </div>
  `;

  // Attach event listeners for navbar & current view
  attachGlobalEvents();
  attachViewEvents(db);
}

function renderCurrentView(db) {
  switch (state.currentRoute) {
    case "dashboard":
      return renderDashboardView(db, state.selectedYear);
    case "penyata":
      return renderPenyataView(db, state.selectedYear);
    case "income":
      return renderIncomeView(db, state.selectedYear);
    case "expense":
      return renderExpenseView(db, state.selectedYear);
    case "claims":
      return renderClaimsView(db, state.selectedYear);
    case "invoices":
      return renderInvoiceView(db, state.selectedYear);
    case "quotations":
      return renderQuotationView(db, state.selectedYear);
    case "inventory":
      return renderInventoryView(db, state.selectedYear);
    case "assets":
      return renderAssetsView(db, state.selectedYear);
    case "data_quality":
      return renderDataQualityView(db);
    case "reports":
      return renderReportsView(db, state.selectedYear);
    case "audit":
      return renderAuditLogView(db);
    case "settings":
      return renderSettingsView(db);
    default:
      return renderDashboardView(db, state.selectedYear);
  }
}

function attachGlobalEvents() {
  // Global year select
  const yearSelect = document.getElementById("global-year-select");
  if (yearSelect) {
    yearSelect.addEventListener("change", (e) => {
      state.selectedYear = e.target.value;
      renderUI();
    });
  }

  // User role switcher
  const roleSelect = document.getElementById("user-role-select");
  if (roleSelect) {
    roleSelect.addEventListener("change", (e) => {
      setCurrentUserRole(e.target.value);
      renderUI();
    });
  }
}

function attachViewEvents(db) {
  switch (state.currentRoute) {
    case "dashboard":
      initDashboardCharts(db, state.selectedYear);
      break;
    case "penyata":
      attachPenyataEvents(db);
      break;
    case "income":
      attachIncomeEvents(db, state.selectedYear);
      break;
    case "expense":
      attachExpenseEvents(db, state.selectedYear);
      break;
    case "claims":
      attachClaimsEvents(db, state.selectedYear);
      break;
    case "invoices":
      attachInvoiceEvents(db, state.selectedYear);
      break;
    case "quotations":
      attachQuotationEvents(db, state.selectedYear);
      break;
    case "inventory":
      attachInventoryEvents(db, state.selectedYear);
      break;
    case "assets":
      attachAssetsEvents(db, state.selectedYear);
      break;
    case "data_quality":
      attachDataQualityEvents(db);
      break;
    case "reports":
      attachReportsEvents(db, state.selectedYear);
      break;
    case "audit":
      break;
    case "settings":
      attachSettingsEvents(db);
      break;
    default:
      initDashboardCharts(db, state.selectedYear);
      break;
  }
}

// Guaranteed Instant App Initialization for ES Modules & Static Builds
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => initApp());
} else {
  initApp();
}
