import { useState } from "react";
import type { SortConfig } from "../types/table";

export function useTableState() {
  const [hiddenColumns, setHiddenColumns] = useState<string[]>([]);
  const [freezeUntil, setFreezeUntil] = useState<string | null>(null);
  const [sortConfig, setSortConfig] = useState<SortConfig>(null);

  return {
    hiddenColumns,
    setHiddenColumns,
    freezeUntil,
    setFreezeUntil,
    sortConfig,
    setSortConfig,
  };
}
