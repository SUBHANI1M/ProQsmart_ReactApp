import { normalize, interpolateGreenToRed } from "../utils/heatmap";

export function useHeatmap(values: number[]) {
  const min = Math.min(...values);
  const max = Math.max(...values);

  function getColor(value: number): string {
    const ratio = normalize(value, min, max);
    return interpolateGreenToRed(ratio);
  }

  return { min, max, getColor };
}
