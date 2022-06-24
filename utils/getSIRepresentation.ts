import round from "./round";

/**
 * Convert numbers into their SI representation:
 * 10000 -> 10k
 * 10000000 -> 1M
 * etc
 * @param num
 * @param fractionDigits
 * @return {string}
 */
export const getSIRepresentation = (
  num: number,
  fractionDigits: number = 1
): string => {
  num = round(num, 2);
  const symbols = ["", "k", "M", "B", "T", "P", "E", "Z", "Y"];
  if (((Math.log10(num) / 3) | 0) == 0) {
    return `${num}`;
  }
  const symbol = symbols[(Math.log10(num) / 3) | 0];
  if (!symbols.includes(symbol)) {
    return num.toLocaleString();
  }

  const value = (num / Math.pow(10, ((Math.log10(num) / 3) | 0) * 3));
  // parse the result of toFixed() as a float in order to remove any trailing `.0`s
  return (parseFloat(value.toFixed(fractionDigits)).toString() + symbol);
};
