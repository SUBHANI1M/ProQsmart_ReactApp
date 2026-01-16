export function normalize(value: number, min: number, max: number): number {
  if (min === max) return 0.5;
  return (value - min) / (max - min);
}

export function interpolateGreenYellowRed(ratio: number): string {
  let red = 0;
  let green = 0;

  if (ratio <= 0.5) {
    // Green → Yellow
    red = Math.round(255 * (ratio * 2));
    green = 255;
  } else {
    // Yellow → Red
    red = 255;
    green = Math.round(255 * (1 - (ratio - 0.5) * 2));
  }

  return `rgb(${red}, ${green}, 0)`;
}

