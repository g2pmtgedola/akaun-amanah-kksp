// Role-Based Access Control (RBAC) Service

export const ROLES = {
  ADMIN: "ADMIN",
  BENDAHARI: "BENDAHARI",
  SETIAUSAHA: "SETIAUSAHA",
  STOCK_OFFICER: "STOCK OFFICER",
  VIEWER: "VIEWER",
};

export const ROLE_PERMISSIONS = {
  [ROLES.ADMIN]: ["*"],
  [ROLES.BENDAHARI]: ["dashboard", "penyata", "income", "expenses", "claims", "assets", "reports", "data_quality", "audit"],
  [ROLES.SETIAUSAHA]: ["dashboard", "penyata", "invoices", "quotations", "assets", "reports", "data_quality"],
  [ROLES.STOCK_OFFICER]: ["dashboard", "inventory", "assets", "reports", "data_quality"],
  [ROLES.VIEWER]: ["dashboard", "penyata", "income", "expenses", "claims", "invoices", "quotations", "inventory", "assets", "reports"],
};

let currentUser = {
  id: "USR-001",
  name: "Pentadbir Utama",
  email: "admin@akaunamanah.gov.my",
  role: ROLES.ADMIN,
};

export function getCurrentUser() {
  const saved = localStorage.getItem("akaun_amanah_current_user");
  if (saved) {
    try {
      currentUser = JSON.parse(saved);
    } catch (e) {}
  }
  return currentUser;
}

export function setCurrentUserRole(roleName) {
  currentUser.role = roleName;
  if (roleName === ROLES.ADMIN) currentUser.name = "Pentadbir Utama";
  else if (roleName === ROLES.BENDAHARI) currentUser.name = "Bendahari Utama";
  else if (roleName === ROLES.SETIAUSAHA) currentUser.name = "Setiausaha Jabatan";
  else if (roleName === ROLES.STOCK_OFFICER) currentUser.name = "Pegawai Stok";
  else currentUser.name = "Pemeriksa Audit";

  localStorage.setItem("akaun_amanah_current_user", JSON.stringify(currentUser));
  window.dispatchEvent(new CustomEvent("user-role-changed", { detail: currentUser }));
}

export function hasPermission(moduleKey) {
  const user = getCurrentUser();
  const perms = ROLE_PERMISSIONS[user.role] || [];
  if (perms.includes("*")) return true;
  return perms.includes(moduleKey);
}

export function canEdit() {
  const user = getCurrentUser();
  return user.role !== ROLES.VIEWER;
}
