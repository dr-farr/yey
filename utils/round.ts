export default function round(val: number, dp: number = 2): number {
  if (isNaN(val)) {
    return 0;
  } else {
    return Math.floor(val * Math.pow(10, dp)) / Math.pow(10, dp);
  }
}
