import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

import applyOrdinalSuffix from 'utils/applyOrdinalSuffix';

/**
 * Format a date nicely by wrapping the ordinal suffix method and formatting it
 * @param date
 * @param formatRelative
 * @param displayYear
 */
const getPleasantlyFormattedDate = (
  date: string | dayjs.Dayjs,
  formatRelative = false,
  displayYear = false,
) => {
  const d: dayjs.Dayjs = typeof date === 'string' ? dayjs(date) : date;
  const formatted = `${applyOrdinalSuffix(Number(d.format('DD')))} ${d.format(
    `MMMM ${displayYear ? 'YYYY' : ''}`,
  )}`;
  if (!formatRelative) {
    return formatted;
  } else {
    if (d.isSame(dayjs(), 'day')) {
      return 'Today';
    }
    if (d.isSame(dayjs().subtract(1, 'day'), 'day')) {
      return 'Yesterday';
    } else {
      return formatted;
    }
  }
};

export default getPleasantlyFormattedDate;
