export function calculatePercentageDiff(
  estimated: number,
  actual: number
): number {
  if (!estimated) return 0;
  return ((actual - estimated) / estimated) * 100;
}
