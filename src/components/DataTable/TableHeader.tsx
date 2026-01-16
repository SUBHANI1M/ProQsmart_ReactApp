type Props = {
  suppliers: string[];
  tableState: any;
};

export default function TableHeader({ suppliers }: Props) {
  return (
    <thead>
      <tr>
        <th>Category</th>
        {suppliers.map((s) => (
          <th key={s}>{s}</th>
        ))}
        <th>Est. Rate</th>
        <th>Qty</th>
      </tr>
    </thead>
  );
}
