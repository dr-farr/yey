import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import customParseFormat from "dayjs/plugin/customParseFormat";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import isBetween from "dayjs/plugin/isBetween";
import relativeTime from "dayjs/plugin/relativeTime";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(isSameOrBefore);
dayjs.extend(utc);
dayjs.extend(customParseFormat);
dayjs.extend(isBetween);
dayjs.extend(relativeTime);
dayjs.extend(timezone);
dayjs.tz.setDefault("Europe/London");

//@ts-ignore trust me typescript this works
dayjs.utc.Ls = dayjs.Ls;

export default dayjs.utc;
