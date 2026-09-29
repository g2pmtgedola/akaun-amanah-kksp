// Data Quality & Validation Engine

/**
 * Scan all dataset entities for data quality issues
 */
export function scanDataQuality(db) {
  const issues = {
    incompleteExpenses: [],
    incompleteIncomes: [],
    incompleteClaims: [],
    incompleteInvoices: [],
    incompleteQuotations: [],
    potentialDuplicates: [],
    stockDiscrepancies: [],
    totalIssues: 0,
  };

  // 1. Check Expenses for missing fields
  (db.expenses || []).forEach((item) => {
    if (item.record_status === "DELETED") return;
    const missing = [];
    if (!item.date && !item.day) missing.push("Tarikh / Hari");
    if (!item.month) missing.push("Bulan");
    if (!item.supplier || item.supplier === "Pembekal") missing.push("Syarikat Pembekal");
    if (!item.po_no) missing.push("No. PO / SQ");
    if (!item.amount || item.amount <= 0) missing.push("Jumlah RM");
    if (!item.payment_status) missing.push("Status Bayaran");

    if (missing.length > 0) {
      issues.incompleteExpenses.push({
        id: item.id,
        description: item.description || "Perbelanjaan tanpa tajuk",
        amount: item.amount,
        missingFields: missing,
        record: item,
      });
    }
  });

  // 2. Check Incomes for missing fields
  (db.incomes || []).forEach((item) => {
    if (item.record_status === "DELETED") return;
    const missing = [];
    if (!item.date && !item.day) missing.push("Tarikh");
    if (!item.month) missing.push("Bulan");
    if (!item.receipt_no) missing.push("No. Resit");
    if (!item.amount || item.amount <= 0) missing.push("Jumlah RM");

    if (missing.length > 0) {
      issues.incompleteIncomes.push({
        id: item.id,
        description: item.description,
        amount: item.amount,
        missingFields: missing,
        record: item,
      });
    }
  });

  // 3. Check Claims for missing fields
  (db.claims || []).forEach((item) => {
    if (item.record_status === "DELETED") return;
    const missing = [];
    if (!item.claim_date && !item.month) missing.push("Tarikh / Bulan");
    if (!item.speaker || item.speaker === "Penceramah") missing.push("Nama Penceramah");
    if (!item.amount || item.amount <= 0) missing.push("Jumlah RM");

    if (missing.length > 0) {
      issues.incompleteClaims.push({
        id: item.id,
        description: item.programme,
        amount: item.amount,
        missingFields: missing,
        record: item,
      });
    }
  });

  // 4. Check Invoices for missing fields
  (db.invoices || []).forEach((item) => {
    if (item.record_status === "DELETED") return;
    const missing = [];
    if (!item.invoice_no) missing.push("No. Invois");
    if (!item.invoice_date && !item.month) missing.push("Tarikh Invois");
    if (!item.client || item.client === "Pelanggan / Agensi") missing.push("Klien / Pelanggan");
    if (!item.amount || item.amount <= 0) missing.push("Jumlah RM");

    if (missing.length > 0) {
      issues.incompleteInvoices.push({
        id: item.id,
        description: item.description,
        amount: item.amount,
        missingFields: missing,
        record: item,
      });
    }
  });

  // 5. Check Quotations for missing fields
  (db.quotations || []).forEach((item) => {
    if (item.record_status === "DELETED") return;
    const missing = [];
    if (!item.quotation_no) missing.push("No. Sebutharga");
    if (!item.quotation_date && !item.month) missing.push("Tarikh Sebutharga");
    if (!item.amount || item.amount <= 0) missing.push("Jumlah RM");

    if (missing.length > 0) {
      issues.incompleteQuotations.push({
        id: item.id,
        description: item.description,
        amount: item.amount,
        missingFields: missing,
        record: item,
      });
    }
  });

  // 6. Detect Potential Duplicates in Expenses
  const expMap = {};
  (db.expenses || []).forEach((item) => {
    if (item.record_status === "DELETED" || !item.amount || item.amount === 0) return;
    const key = `${item.month}_${item.supplier}_${item.amount}_${(item.po_no || '').trim()}`;
    if (!expMap[key]) {
      expMap[key] = [];
    }
    expMap[key].push(item);
  });

  Object.keys(expMap).forEach((key) => {
    if (expMap[key].length > 1) {
      issues.potentialDuplicates.push({
        type: "Perbelanjaan",
        matchingKey: key,
        count: expMap[key].length,
        records: expMap[key],
      });
    }
  });

  // 7. Check Stock Balance & Value Discrepancies
  (db.stock || []).forEach((item) => {
    if (item.record_status === "DELETED") return;
    const rx = Number(item.received_qty || 0);
    const tx = Number(item.issued_qty || 0);
    const calculatedBal = rx - tx;
    const recordedBal = Number(item.recorded_balance || 0);

    if (calculatedBal !== recordedBal) {
      issues.stockDiscrepancies.push({
        id: item.id,
        item: item.item,
        po_no: item.po_no,
        supplier: item.supplier,
        received_qty: rx,
        issued_qty: tx,
        calculatedBalance: calculatedBal,
        recordedBalance: recordedBal,
        diff: recordedBal - calculatedBal,
        record: item,
      });
    }
  });

  issues.totalIssues =
    issues.incompleteExpenses.length +
    issues.incompleteIncomes.length +
    issues.incompleteClaims.length +
    issues.incompleteInvoices.length +
    issues.incompleteQuotations.length +
    issues.potentialDuplicates.length +
    issues.stockDiscrepancies.length;

  return issues;
}
