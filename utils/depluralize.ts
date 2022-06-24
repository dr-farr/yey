export default function depluralise(value: string): string {
  if (value === undefined) {
    return ""
  }
  if (value[value.length - 1].toLowerCase() === "s") {
    return value.slice(0, -1);
  }
  return value;
}
