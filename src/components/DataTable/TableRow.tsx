import type { TableRowData } from "../../types/table";
import HeatCell from "./HeatCell";
import { useHeatmap } from "../../hooks/useHeatmap";

type Props = {
  row: TableRowData;
  suppliers: string[];
  tableState: any;
};

export default function TableRow({ row, suppliers }: Props) {
  const values = suppliers.map((s) => row.suppliers[s]);
  const heatmap = useHeatmap(values);

  return (
    <tr>
      <td>{row.category}</td>
      {suppliers.map((s) => (
        <HeatCell
          key={s}
          value={row.suppliers[s]}
          estimated={row.estimatedRate}
          getColor={heatmap.getColor}
        />
      ))}
      <td>{row.estimatedRate}</td>
      <td>{row.quantity}</td>
    </tr>
  );
}
