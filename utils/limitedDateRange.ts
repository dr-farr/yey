import dayjs from 'utils/dayjs';
import * as djs from 'dayjs';
import Range from 'utils/range';

/**
 * Retrieve all days in a month that are before today.
 *
 * Provide this function with a date, and it will return all days in that month that are
 * in the past, exclusive of today.
 */
export default function limitedDateRange(date: djs.Dayjs) {
  const d = dayjs(date);
  const days = Range(1, d.daysInMonth())
    .map((day) => dayjs().year(d.year()).month(d.month()).date(day).startOf('day'))
    .filter((x) => {
      if (x.isBefore(dayjs(), 'month')) {
        return true;
      } else {
        return x.isBefore(dayjs(), 'day');
      }
    });

  return days;
}
