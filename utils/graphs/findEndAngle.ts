import { Clamp } from 'utils/clamp';

/**
 * Find the end angle of a pie graph that's values represent a percentage to 100%.
 * This is used specifically for the inline sim pie graph, which has two segments:
 * the contribution of the viewed campaign, and the contribution of matching campaigns.
 * We have to sum the percentage value of provided segments and figure out what
 * proportion of the circle is filled given this value.
 * This function will do that for you!
 * @constructor
 * @param values
 */
export const FindEndAngle = (...values: number[]) =>
  Clamp((values.reduce((acc, val) => acc + val, 0) / 100) * 365, 0, 365);
