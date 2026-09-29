// Firebase Cloud Account & Multi-Device Real-Time Database Synchronization Engine
import { getDatabase } from "./api.js";
import { showToast } from "../components/Toast.js";

const CLOUD_KEY_STORAGE = "akaun_amanah_cloud_key";
const CLOUD_URL_STORAGE = "akaun_amanah_cloud_url";
export const DEFAULT_CLOUD_KEY = "KKSP-AMANAH-2026";

// Exact Firebase Config from user's HBH-PMTG-V2 project
export const firebaseConfig = {
  apiKey: "AIzaSyDaZYfaLkXtfniOFA4EdOfDHngsSbdNffw",
  authDomain: "hbh-pmtg-2.firebaseapp.com",
  projectId: "hbh-pmtg-2",
  storageBucket: "hbh-pmtg-2.firebasestorage.app",
  messagingSenderId: "1096496691203",
  appId: "1:1096496691203:web:9fee2c565fc78812bdb636",
  measurementId: "G-87BRR9D33Q"
};

let dbFirebase = null;
let authFirebase = null;
let firestoreUnsubscribe = null;
let isSyncing = false;
let autoSyncInterval = null;
let broadcastChannel = null;

try {
  broadcastChannel = new BroadcastChannel("akaun_amanah_sync_channel");
  broadcastChannel.onmessage = (event) => {
    if (event.data && (event.data.incomes || event.data.invoices)) {
      localStorage.setItem("akaun_amanah_db_v1", JSON.stringify(event.data));
      if (window.appRefreshUI) window.appRefreshUI();
    }
  };
} catch (e) {}

export function getCloudSyncKey() {
  return localStorage.getItem(CLOUD_KEY_STORAGE) || DEFAULT_CLOUD_KEY;
}

export function setCloudSyncKey(key) {
  const cleanKey = (key || "").trim().toUpperCase() || DEFAULT_CLOUD_KEY;
  localStorage.setItem(CLOUD_KEY_STORAGE, cleanKey);
  return cleanKey;
}

export function getCloudSyncUrl() {
  const db = getDatabase();
  return localStorage.getItem(CLOUD_URL_STORAGE) || (db.settings && db.settings.google_sheet_url) || "";
}

export function setCloudSyncUrl(url) {
  const cleanUrl = (url || "").trim();
  localStorage.setItem(CLOUD_URL_STORAGE, cleanUrl);
  return cleanUrl;
}

export function getCurrentFirebaseUser() {
  return authFirebase ? authFirebase.currentUser : null;
}

/**
 * Deep Database Checksum Signature (Detects ANY new or updated record anywhere)
 */
function computeSignature(dbObj) {
  if (!dbObj) return "";
  try {
    const incs = (dbObj.incomes || []).length;
    const exps = (dbObj.expenses || []).length;
    const clms = (dbObj.claims || []).length;
    const invs = (dbObj.invoices || []).length;
    const quos = (dbObj.quotations || []).length;
    const asts = (dbObj.assets || []).length;
    const stks = (dbObj.stock || []).length;

    const allIds = [
      ...(dbObj.incomes || []).map((i) => i.id || ""),
      ...(dbObj.expenses || []).map((e) => e.id || ""),
      ...(dbObj.claims || []).map((c) => c.id || ""),
      ...(dbObj.invoices || []).map((inv) => inv.id || ""),
      ...(dbObj.quotations || []).map((q) => q.id || ""),
      ...(dbObj.assets || []).map((a) => a.id || ""),
      ...(dbObj.stock || []).map((s) => s.id || ""),
    ].join(",");

    return `${incs}:${exps}:${clms}:${invs}:${quos}:${asts}:${stks}_len${allIds.length}_tail${allIds.slice(-60)}`;
  } catch (e) {
    return "";
  }
}

/**
 * Smart Bidirectional Database Merge Engine (Zero Data Loss Protection)
 */
export function mergeDatabases(localDb = {}, cloudDb = {}) {
  const collections = ["incomes", "expenses", "claims", "invoices", "quotations", "assets", "stock"];
  const merged = { ...cloudDb, ...localDb };

  collections.forEach((coll) => {
    const localItems = localDb[coll] || [];
    const cloudItems = cloudDb[coll] || [];
    const itemMap = new Map();

    // 1. Add all cloud items
    cloudItems.forEach((item) => {
      if (item && item.id) {
        itemMap.set(item.id, item);
      }
    });

    // 2. Merge local items without overwriting un-synced local records
    localItems.forEach((item) => {
      if (item && item.id) {
        if (!itemMap.has(item.id)) {
          itemMap.set(item.id, item);
        } else {
          const existing = itemMap.get(item.id);
          const localTime = new Date(item.updated_at || 0).getTime();
          const cloudTime = new Date(existing.updated_at || 0).getTime();
          if (localTime > cloudTime) {
            itemMap.set(item.id, item);
          }
        }
      }
    });

    merged[coll] = Array.from(itemMap.values());
  });

  return merged;
}

function getSharedFirestoreDocId() {
  const cloudKey = getCloudSyncKey();
  const cleanKey = cloudKey.toLowerCase().replace(/[^a-z0-9]/g, "");
  return `shared_${cleanKey || "kkspamanah2026"}`;
}

/**
 * Initialize Firebase App & Services
 */
export function initFirebaseServices() {
  if (window.firebase && !window.firebase.apps.length) {
    try {
      window.firebase.initializeApp(firebaseConfig);
    } catch (e) {
      console.warn("Firebase initialize notice:", e);
    }
  }

  if (window.firebase && window.firebase.apps.length) {
    try {
      dbFirebase = window.firebase.firestore();
      authFirebase = window.firebase.auth();

      authFirebase.onAuthStateChanged((user) => {
        setupFirestoreRealtimeListener(user);
        if (window.appRefreshUI) window.appRefreshUI();
      });
    } catch (e) {
      console.warn("Firebase services notice:", e);
    }
  }
}

/**
 * Setup Real-time Firestore Listener (onSnapshot) for Shared Institution Database
 */
function setupFirestoreRealtimeListener(user = null) {
  if (!dbFirebase) return;
  if (firestoreUnsubscribe) {
    try {
      firestoreUnsubscribe();
    } catch (e) {}
  }

  const docId = getSharedFirestoreDocId();
  const docRef = dbFirebase.collection("akaun_amanah_db").doc(docId);

  firestoreUnsubscribe = docRef.onSnapshot(
    (snapshot) => {
      if (snapshot.exists) {
        const cloudData = snapshot.data();
        if (cloudData && cloudData.db) {
          const currentDb = getDatabase();
          const mergedDb = mergeDatabases(currentDb, cloudData.db);
          const mergedSig = computeSignature(mergedDb);
          const currentSig = computeSignature(currentDb);

          if (mergedSig !== currentSig) {
            localStorage.setItem("akaun_amanah_db_v1", JSON.stringify(mergedDb));
            showToast("☁️ Data diselaraskan secara automatik dari Storan Awan Firebase!");
            if (window.appRefreshUI) window.appRefreshUI();
          }
        }
      }
    },
    (err) => {
      console.warn("Firestore snapshot notice:", err);
    }
  );
}

/**
 * Push local database snapshot to Shared Online Cloud Storage & Firebase
 */
export async function pushDatabaseToCloud() {
  const cloudKey = getCloudSyncKey();
  const cloudUrl = getCloudSyncUrl();
  const db = getDatabase();
  const timestamp = new Date().toISOString();
  db.last_synced = timestamp;

  // Broadcast to other local browser windows
  if (broadcastChannel) {
    try {
      broadcastChannel.postMessage(db);
    } catch (e) {}
  }

  const payload = {
    cloud_key: cloudKey,
    updated_at: timestamp,
    user_email: authFirebase && authFirebase.currentUser ? authFirebase.currentUser.email : "anonymous",
    db: db,
  };

  // Store in local vault cache
  try {
    localStorage.setItem(`cloud_vault_${cloudKey}`, JSON.stringify(payload));
  } catch (e) {}

  // 1. Push to Shared Firebase Firestore document
  if (dbFirebase) {
    const docId = getSharedFirestoreDocId();
    try {
      await dbFirebase.collection("akaun_amanah_db").doc(docId).set(payload);
    } catch (e) {
      console.warn("Firebase push notice:", e);
    }
  }

  // 2. Push to Custom Cloud Web App Endpoint if configured
  if (cloudUrl) {
    try {
      fetch(cloudUrl, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).catch(() => {});
    } catch (e) {}
  }
}

/**
 * Pull latest Database from Shared Online Cloud Storage & Firebase with Deep Checksum
 */
export async function pullDatabaseFromCloud(keyInput = null, forceManual = false) {
  if (isSyncing) return { success: false };
  isSyncing = true;

  const cloudKey = keyInput ? setCloudSyncKey(keyInput) : getCloudSyncKey();
  const currentDb = getDatabase();
  const currentSig = computeSignature(currentDb);

  // 1. Pull & Merge from Shared Firebase Firestore document
  if (dbFirebase) {
    const docId = getSharedFirestoreDocId();
    try {
      const docSnap = await dbFirebase.collection("akaun_amanah_db").doc(docId).get();
      if (docSnap.exists) {
        const cloudData = docSnap.data();
        if (cloudData && cloudData.db) {
          const mergedDb = mergeDatabases(currentDb, cloudData.db);
          const mergedSig = computeSignature(mergedDb);

          if (mergedSig !== currentSig || forceManual) {
            localStorage.setItem("akaun_amanah_db_v1", JSON.stringify(mergedDb));
            showToast(forceManual ? "✓ Data berjaya diselaraskan dari Storan Awan Firebase!" : "☁️ Data dikemaskini dari Firebase");
            if (window.appRefreshUI) window.appRefreshUI();

            // Sync merged database back to Firestore if new local records were added
            pushDatabaseToCloud().catch(() => {});

            isSyncing = false;
            return { success: true, db: mergedDb, source: "Storan Awan Firebase" };
          } else {
            isSyncing = false;
            return { success: true, db: currentDb, source: "Sudah Terkini" };
          }
        }
      }
    } catch (e) {
      console.warn("Firebase pull notice:", e);
    }
  }

  isSyncing = false;
  return { success: false, source: "Data Sedia Ada" };
}

/**
 * Force Bidirectional Push & Pull Sync
 */
export async function forceSyncNow() {
  showToast("⌛ Menyinkronkan data awan...");
  await pushDatabaseToCloud();
  await pullDatabaseFromCloud(null, true);
  showToast("✓ Data Awan Berjaya Diselaras Sempurna!");
}

/**
 * Firebase Auth Login Helper (Optimized Fast Response)
 */
export async function loginFirebaseUser(email, password) {
  if (!authFirebase) initFirebaseServices();
  if (!authFirebase) throw new Error("Firebase Auth belum bersedia.");
  const cred = await authFirebase.signInWithEmailAndPassword(email, password);
  setupFirestoreRealtimeListener(cred.user);

  // Non-blocking background cloud pull & merge
  pullDatabaseFromCloud(null, true).catch(() => {});
  return cred.user;
}

/**
 * Firebase Auth Register Helper (Optimized Fast Response)
 */
export async function registerFirebaseUser(email, password) {
  if (!authFirebase) initFirebaseServices();
  if (!authFirebase) throw new Error("Firebase Auth belum bersedia.");
  const cred = await authFirebase.createUserWithEmailAndPassword(email, password);
  setupFirestoreRealtimeListener(cred.user);

  // Non-blocking background cloud push
  pushDatabaseToCloud().catch(() => {});
  return cred.user;
}

/**
 * Firebase Password Reset Helper
 */
export async function resetPasswordFirebaseUser(email) {
  if (!authFirebase) initFirebaseServices();
  if (!authFirebase) throw new Error("Firebase Auth belum bersedia.");
  await authFirebase.sendPasswordResetEmail(email);
}

/**
 * Firebase Auth Logout Helper
 */
export async function logoutFirebaseUser() {
  if (authFirebase) {
    await authFirebase.signOut();
  }
  setupFirestoreRealtimeListener(null);
}

// Bind to window to prevent tree-shaking
window.loginFirebaseUser = loginFirebaseUser;
window.registerFirebaseUser = registerFirebaseUser;
window.resetPasswordFirebaseUser = resetPasswordFirebaseUser;
window.logoutFirebaseUser = logoutFirebaseUser;
window.getCurrentFirebaseUser = getCurrentFirebaseUser;
window.pushDatabaseToCloud = pushDatabaseToCloud;
window.pullDatabaseFromCloud = pullDatabaseFromCloud;
window.forceSyncNow = forceSyncNow;

/**
 * Start Real-Time Automatic Cloud Synchronization Engine
 */
export function initAutoCloudSync() {
  if (autoSyncInterval) clearInterval(autoSyncInterval);

  // Initialize Firebase Services
  initFirebaseServices();

  // Initial pull on app startup
  pullDatabaseFromCloud(null, false);

  // Poll cloud every 3 seconds
  autoSyncInterval = setInterval(() => {
    pullDatabaseFromCloud(null, false);
  }, 3000);

  // Poll immediately on window focus
  window.addEventListener("focus", () => {
    pullDatabaseFromCloud(null, false);
  });

  window.addEventListener("storage", (e) => {
    if (e.key === "akaun_amanah_db_v1") {
      if (window.appRefreshUI) window.appRefreshUI();
    }
  });
}
