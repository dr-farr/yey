/**
 * Clamps a number between two values
 * @param num
 * @param min
 * @param max
 * @constructor
 * @return {number}
 */
export const Clamp: (num, min, max) => any = (
  num: number,
  min: number,
  max: number
) => (num <= min ? min : num >= max ? max : num);
