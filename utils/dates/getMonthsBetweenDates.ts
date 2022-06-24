import { Dayjs, OpUnitType } from "dayjs";

/**
 * Returns a range of units between two provided dates.
 * The `Inclusive` property determines whether the head and tail of the list are included
 * or nah.
 * @param start
 * @param end
 * @param inclusive
 * @param unit
 * @private
 */
export default function getUnitsBetweenTwoDates(
  start: Dayjs,
  end: Dayjs,
  inclusive: boolean = false,
  unit: OpUnitType = "month"
): Dayjs[] {
  const s = start.add(!inclusive ? 1 : 0, unit).startOf(unit);
  const e = end.add(1, unit).endOf(unit);
  const unitsBetweenStartAndEnd = e.diff(s, unit);
  const units = [];
  Array(unitsBetweenStartAndEnd)
    .fill(undefined)
    .forEach((_, idx) => {
      if (!inclusive ? idx > 0 : idx >= 0) {
        units.push(start.clone().add(idx, unit).startOf(unit));
      }
    });
  return units;
}
