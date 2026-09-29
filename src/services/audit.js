// Audit Logging Service

export function getAuditLogs() {
  const stored = localStorage.getItem("akaun_amanah_audit_logs");
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (e) {}
  }
  return [
    {
      id: "LOG-1723909200000",
      timestamp: "17/08/2026 18:20:00",
      user: "Pentadbir Utama",
      action: "INITIALIZE",
      module: "SYSTEM",
      record_id: "SYS-001",
      old_value: "-",
      new_value: "Migrated seed database from AKAUN AMANAH 2025.xlsx",
    },
  ];
}

export function logAction(user, action, moduleName, recordId, oldValue = "", newValue = "") {
  const logs = getAuditLogs();
  const now = new Date();
  const timestampStr = `${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${now.getFullYear()} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
  
  const newLog = {
    id: `LOG-${now.getTime()}`,
    timestamp: timestampStr,
    user: user || "System User",
    action: action,
    module: moduleName,
    record_id: recordId,
    old_value: typeof oldValue === 'object' ? JSON.stringify(oldValue) : String(oldValue),
    new_value: typeof newValue === 'object' ? JSON.stringify(newValue) : String(newValue),
  };

  logs.unshift(newLog);
  // keep last 500 logs
  if (logs.length > 500) logs.pop();
  localStorage.setItem("akaun_amanah_audit_logs", JSON.stringify(logs));
  return newLog;
}
