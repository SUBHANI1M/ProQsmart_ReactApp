import Papa from "papaparse";
import type { RawCsvRow } from "../types/table";

export function parseCsv(file: File): Promise<RawCsvRow[]> {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => resolve(results.data as RawCsvRow[]),
      error: reject,
    });
  });
}
