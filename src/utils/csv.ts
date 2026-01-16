import type { RawCsvRow, TableRowData } from "../types/table";

export function transformCsvData(rows: RawCsvRow[]): TableRowData[] {
  if (!rows.length) return [];

  const knownKeys = ["Category / Item", "Est. Rate", "Qty"];

  return rows.map((row) => {
    const suppliers: Record<string, number> = {};

    Object.keys(row).forEach((key) => {
      if (!knownKeys.includes(key)) {
        const value = Number(row[key]);
        if (!isNaN(value)) {
          suppliers[key] = value;
        }
      }
    });

    return {
      category: row["Category / Item"] || "",
      estimatedRate: Number(row["Est. Rate"]) || 0,
      quantity: Number(row["Qty"]) || 0,
      suppliers,
    };
  });
}
