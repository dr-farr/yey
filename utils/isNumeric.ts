/**
 * Checks if a value is a number.
 * Useful for performing validity checks on inputs that don't fail a standard
 * `!number` falsy check.
 * @param n
 */
export default function isNumeric(n: any): n is number {
  return (
    n !== undefined && n !== null && !isNaN(parseFloat(n)) && !isNaN(n - 0)
  );
}
