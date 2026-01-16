export type RawCsvRow = Record<string, string>;

export type TableRowData = {
  category: string;
  suppliers: Record<string, number>;
  estimatedRate: number;
  quantity: number;
};

export type SortConfig = {
  column: string;
  direction: "asc" | "desc";
} | null;
``
