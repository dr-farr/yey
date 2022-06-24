/**
 * Get the ordinal suffix of a given number.
 * This is useful for individual day date strings that would benefit from
 * the ordinal suffix: i.e 5th, 3rd, 1st.
 * The rules for ordinal suffixes are as follows:
 * @example
 * st is used with numbers ending in 1 (e.g. 1st, pronounced first)
 * nd is used with numbers ending in 2 (e.g. 92nd, pronounced ninety-second)
 * rd is used with numbers ending in 3 (e.g. 33rd, pronounced thirty-third)
 * As an exception to the above rules, all the "teen" numbers ending with 11, 12 or 13 use -th (e.g. 11th, pronounced eleventh, 112th, pronounced one hundred [and] twelfth)
 * th is used for all other numbers (e.g. 9th, pronounced ninth).
 * @param n number to apply the suffix to
 */
export default function applyOrdinalSuffix(n: number): string {
  const s = ["th", "st", "nd", "rd"],
    v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}
