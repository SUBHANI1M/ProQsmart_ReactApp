import { calculatePercentageDiff } from "../../utils/math";

type Props = {
  value: number;
  estimated: number;
  getColor: (value: number) => string;
};

export default function HeatCell({ value, estimated, getColor }: Props) {
  const diff = calculatePercentageDiff(estimated, value);

  return (
    <td
      style={{
        backgroundColor: getColor(value),
        color: "#000",
        padding: "6px",
      }}
    >
      <div>{value.toFixed(2)}</div>
      <small>{diff.toFixed(2)}%</small>
    </td>
  );
}
