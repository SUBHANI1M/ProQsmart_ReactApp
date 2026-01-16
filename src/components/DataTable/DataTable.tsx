import type { TableRowData } from "../../types/table";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import { useTableState } from "../../hooks/useTableState";

type Props = {
  rows: TableRowData[];
};

export default function DataTable({ rows }: Props) {
  const suppliers = Object.keys(rows[0]?.suppliers || {});
  const tableState = useTableState();

  return (
    <div style={{ overflowX: "auto" }}>
      <table>
        <TableHeader suppliers={suppliers} tableState={tableState} />
        <tbody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              row={row}
              suppliers={suppliers}
              tableState={tableState}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
