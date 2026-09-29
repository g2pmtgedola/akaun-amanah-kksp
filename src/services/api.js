// Database & API Synchronization Service with Cloud & File Backup Support
import {
  INITIAL_PENYATA,
  INITIAL_INCOME,
  INITIAL_EXPENSES,
  INITIAL_CLAIMS,
  INITIAL_INVOICES,
  INITIAL_QUOTATIONS,
  INITIAL_STOCK,
  INITIAL_ASSETS,
  INITIAL_USERS,
  INITIAL_SETTINGS,
} from "../data/seedData.js";
import { logAction } from "./audit.js";
import { getCurrentUser } from "./auth.js";
import { pushDatabaseToCloud } from "./cloudSync.js";

const DB_KEY = "akaun_amanah_db_v1";

/**
 * Initialize Database from LocalStorage, Cloud, or Seed Data
 */
export function getDatabase() {
  const stored = localStorage.getItem(DB_KEY);
  let db = null;
  if (stored) {
    try {
      db = JSON.parse(stored);
    } catch (e) {
      console.error("Error parsing stored database, reinitializing:", e);
    }
  }

  if (!db) {
    db = {
      penyata: INITIAL_PENYATA,
      incomes: INITIAL_INCOME,
      expenses: INITIAL_EXPENSES,
      claims: INITIAL_CLAIMS,
      invoices: INITIAL_INVOICES,
      quotations: INITIAL_QUOTATIONS,
      stock: INITIAL_STOCK,
      assets: INITIAL_ASSETS,
      users: INITIAL_USERS,
      settings: INITIAL_SETTINGS,
      last_synced: new Date().toISOString(),
    };
  }

  if (!db.assets) db.assets = INITIAL_ASSETS;

  // Default unit to PSH for 2025 income records & migrate UPB to HEP
  if (db.incomes && Array.isArray(db.incomes)) {
    db.incomes.forEach((r) => {
      if (r.unit === "UPB") {
        r.unit = "HEP";
      }
      if (!r.unit || r.year === "2025" || (!r.year && r.id.includes("2025"))) {
        if (!r.unit || r.unit === "RUC") {
          r.unit = "PSH";
        }
      }
    });
  }

  // Automatic Data Cleaning for Initial Seed Expenses ONLY (Fix swapped amount/po_no fields from raw Excel dataset)
  if (db.expenses && Array.isArray(db.expenses)) {
    db.expenses.forEach((r) => {
      // Only clean seed data records where amount is 0 and po_no contains a currency string like "800.00" or "2,500.00"
      if (!r._seed_po_cleaned && (!r.amount || r.amount === 0) && r.po_no && (r.po_no.includes(".00") || r.po_no.includes(","))) {
        const cleanStr = String(r.po_no).replace(/[^0-9.-]/g, "");
        const val = parseFloat(cleanStr);
        if (!isNaN(val) && val !== 0) {
          r.amount = Math.abs(val);
          const match = (r.description + " " + (r.remarks || "")).match(/(PO\d+)/i);
          if (match) {
            r.po_no = match[1];
          } else {
            r.po_no = "";
          }
        }
        r._seed_po_cleaned = true;
      }
    });
  }

  // Auto-Fix Mismatched Record Years: Ensure records are correctly tagged to 2026/2025 based on date
  ["invoices", "quotations", "claims", "expenses", "incomes"].forEach((key) => {
    if (db[key] && Array.isArray(db[key])) {
      db[key].forEach((r) => {
        const dStr = r.invoice_date || r.quotation_date || r.claim_date || r.payment_date || r.date || "";
        if (dStr) {
          const yMatch = dStr.match(/\b(202[4-9])\b/);
          if (yMatch) {
            r.year = yMatch[1];
          } else if (!r.year) {
            r.year = "2026";
          }
        } else if (!r.year) {
          r.year = "2026";
        }
      });
    }
  });

  localStorage.setItem(DB_KEY, JSON.stringify(db));
  return db;
}

/**
 * Save Database to Local Storage and Sync to Cloud / Cloud Sync Engine
 */
export function saveDatabase(db) {
  db.last_synced = new Date().toISOString();
  localStorage.setItem(DB_KEY, JSON.stringify(db));
  window.dispatchEvent(new CustomEvent("db-updated", { detail: db }));

  // Auto trigger background cloud sync
  pushDatabaseToCloud();

  const settings = db.settings || {};
  if (settings.google_sheet_url && settings.api_mode === "LIVE") {
    syncToGoogleSheets(db, settings.google_sheet_url);
  }
}

/**
 * Sync Data to Google Sheets Web App Endpoint
 */
async function syncToGoogleSheets(db, url) {
  try {
    await fetch(url, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(db),
    });
  } catch (e) {
    console.warn("Background cloud sync error:", e);
  }
}

export function getSettings() {
  const db = getDatabase();
  return db.settings || {};
}

export function updateSettings(newSettings) {
  const db = getDatabase();
  db.settings = { ...db.settings, ...newSettings };
  logAction(getCurrentUser().name, "UPDATE_SETTINGS", "SYSTEM", "SET-001", "", "Updated system settings");
  saveDatabase(db);
  return db.settings;
}

export function resetToSeedData() {
  localStorage.removeItem(DB_KEY);
  const db = getDatabase();
  logAction(getCurrentUser().name, "RESET_SEED", "SYSTEM", "SYS-001", "", "Reset database to initial seed dataset");
  saveDatabase(db);
  return db;
}

/**
 * Export full Database as a JSON File Download
 */
export function exportDatabaseToJson() {
  const db = getDatabase();
  const jsonStr = JSON.stringify(db, null, 2);
  const blob = new Blob([jsonStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  const filename = `eAkaunAmanah_Database_Backup_${new Date().toISOString().slice(0, 10)}.json`;
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * Import full Database from a JSON File
 */
export function importDatabaseFromJsonFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const importedData = JSON.parse(e.target.result);
        if (!importedData.incomes && !importedData.expenses && !importedData.penyata) {
          throw new Error("Format fail JSON tidak sah untuk Akaun Amanah.");
        }
        importedData.last_synced = new Date().toISOString();
        localStorage.setItem(DB_KEY, JSON.stringify(importedData));
        logAction(getCurrentUser().name, "IMPORT_DB", "SYSTEM", "IMP-001", "", "Imported database from JSON backup file");
        saveDatabase(importedData);
        resolve(importedData);
      } catch (err) {
        reject(err);
      }
    };
    reader.onerror = (err) => reject(err);
    reader.readAsText(file);
  });
}

export async function addRecord(moduleType, record) {
  const db = getDatabase();
  let key = moduleType.toLowerCase() + "s";
  if (key === "assets") key = "assets";
  if (!db[key]) db[key] = [];

  db[key].unshift(record);
  logAction(getCurrentUser().name, "CREATE", moduleType.toUpperCase(), record.id || "NEW", "", `Created ${moduleType} record`);
  saveDatabase(db);
  return record;
}

export async function updateRecord(moduleType, record) {
  const db = getDatabase();
  let key = moduleType.toLowerCase() + "s";
  if (key === "assets") key = "assets";
  if (!db[key]) return null;

  const idx = db[key].findIndex((r) => r.id === record.id);
  if (idx !== -1) {
    db[key][idx] = { ...db[key][idx], ...record };
    logAction(getCurrentUser().name, "UPDATE", moduleType.toUpperCase(), record.id, "", `Updated ${moduleType} record`);
    saveDatabase(db);
    return db[key][idx];
  }
  return null;
}

export async function deleteRecord(moduleType, recordId) {
  const db = getDatabase();
  let key = moduleType.toLowerCase() + "s";
  if (key === "assets") key = "assets";
  if (!db[key]) return false;

  const idx = db[key].findIndex((r) => r.id === recordId);
  if (idx !== -1) {
    db[key][idx].record_status = "DELETED";
    logAction(getCurrentUser().name, "DELETE", moduleType.toUpperCase(), recordId, "", `Soft deleted ${moduleType} record`);
    saveDatabase(db);
    return true;
  }
  return false;
}
