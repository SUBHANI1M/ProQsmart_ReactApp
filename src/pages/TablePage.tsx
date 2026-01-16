import { useLocation } from "react-router-dom";
import DataTable from "../components/DataTable/DataTable";
import type { TableRowData } from "../types/table";

export default function TablePage() {
  const { state } = useLocation();
  const data = state as TableRowData[];

  return <DataTable rows={data} />;
}
