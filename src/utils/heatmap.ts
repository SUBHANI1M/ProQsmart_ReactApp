export function normalize(value: number, min: number, max: number): number {
  if (min === max) return 0.5;
  return (value - min) / (max - min);
}

export function interpolateGreenToRed(ratio: number): string {
  const red = Math.round(255 * ratio);
  const green = Math.round(255 * (1 - ratio));
  return `rgb(${red}, ${green}, 0)`;
}
