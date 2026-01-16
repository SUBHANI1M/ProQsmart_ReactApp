import { normalize } from "../utils/heatmap";
import { interpolateGreenYellowRed } from "../utils/heatmap";

export function useHeatmap(values: number[]) {
  const min = Math.min(...values);
  const max = Math.max(...values);

  function getColor(value: number): string {
    const ratio = normalize(value, min, max);
    return interpolateGreenYellowRed(ratio);
  }

  return { min, max, getColor };
}
