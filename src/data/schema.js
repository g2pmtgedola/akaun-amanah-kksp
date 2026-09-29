// Data Schemas, Validation Rules, Formatters, & Generators

/**
 * Format currency to standard MYR format: RM #,##0.00
 */
export function formatCurrency(amount) {
  if (amount === undefined || amount === null || isNaN(amount)) {
    return "RM 0.00";
  }
  const num = Number(amount);
  const formatted = num.toLocaleString("en-MY", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return `RM ${formatted}`;
}

/**
 * Format date to standard DD/MM/YYYY
 */
export function formatDate(dateInput) {
  if (!dateInput) return "-";
  if (typeof dateInput === "string" && dateInput.includes("/")) return dateInput;
  try {
    const d = new Date(dateInput);
    if (isNaN(d.getTime())) return dateInput;
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  } catch (e) {
    return dateInput;
  }
}

/**
 * Generate unique stable IDs with year and padded counter
 */
export function generateId(prefix, existingRecords = []) {
  const currentYear = new Date().getFullYear();
  const yearPrefix = `${prefix}-${currentYear}-`;
  
  const existingNums = existingRecords
    .map((r) => r.id)
    .filter((id) => id && id.startsWith(prefix))
    .map((id) => {
      const parts = id.split("-");
      const last = parts[parts.length - 1];
      return parseInt(last, 10);
    })
    .filter((num) => !isNaN(num));

  const maxNum = existingNums.length > 0 ? Math.max(...existingNums) : 0;
  const nextNum = maxNum + 1;
  return `${yearPrefix}${String(nextNum).padStart(4, "0")}`;
}

/**
 * Predefined Status Styles & Colors
 */
export const STATUS_STYLES = {
  // Green - Completed / Paid / Approved
  Paid: "bg-emerald-100 text-emerald-800 border-emerald-300",
  Approved: "bg-emerald-100 text-emerald-800 border-emerald-300",
  Completed: "bg-emerald-100 text-emerald-800 border-emerald-300",
  Active: "bg-emerald-100 text-emerald-800 border-emerald-300",
  Healthy: "bg-emerald-100 text-emerald-800 border-emerald-300",
  Reconciled: "bg-emerald-100 text-emerald-800 border-emerald-300",

  // Blue - Issued / Submitted / In Progress
  Submitted: "bg-blue-100 text-blue-800 border-blue-300",
  Issued: "bg-blue-100 text-blue-800 border-blue-300",
  "In Progress": "bg-blue-100 text-blue-800 border-blue-300",
  "Partially Paid": "bg-sky-100 text-sky-800 border-sky-300",

  // Yellow / Amber - Pending / Draft / Warning
  Pending: "bg-amber-100 text-amber-800 border-amber-300",
  Draft: "bg-amber-100 text-amber-800 border-amber-300",
  "Low Stock": "bg-amber-100 text-amber-800 border-amber-300",
  "Requires Verification": "bg-amber-100 text-amber-800 border-amber-300",

  // Red - Overdue / Rejected / Cancelled / Out of Stock / Discrepancy
  Overdue: "bg-rose-100 text-rose-800 border-rose-300 font-semibold",
  Rejected: "bg-rose-100 text-rose-800 border-rose-300",
  Cancelled: "bg-rose-100 text-rose-800 border-rose-300",
  "Out of Stock": "bg-rose-100 text-rose-800 border-rose-300 font-semibold",
  "Data Discrepancy": "bg-rose-100 text-rose-800 border-rose-300 font-semibold",

  // Grey - Inactive / Deleted / Default
  Inactive: "bg-slate-100 text-slate-700 border-slate-300",
  DELETED: "bg-slate-100 text-slate-500 line-through border-slate-300",
};

/**
 * Standard Months List
 */
export const MONTHS_LIST = [
  "JAN", "FEB", "MAC", "APR", "MEI", "JUN", "JUL", "OGOS", "SEPT", "OKT", "NOV", "DIS"
];
