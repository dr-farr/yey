import dayjs from "dayjs";

import { CampaignPropertyStatus } from "pages/campaigns/results/[id]";

const isValid = (val: string | number) => {
  if (val === undefined) {
    return false;
  }
  if (typeof val === "number") {
    return !isNaN(val);
  }
  if (typeof val === "string") {
    return val !== "";
  }
};

/**
 * Get the status of a campaign based on its start and end date
 * @param start
 * @param end
 */
const getCampaignStatus = (
  start: string | number,
  end: string | number,
  needsResults: boolean
): CampaignPropertyStatus => {
  const s = dayjs(start);
  const e = dayjs(end);
  const now = dayjs();
  if (!isValid(start) || !isValid(end)) {
    return CampaignPropertyStatus.NOT_STARTED;
  }
  if (needsResults) {
    return CampaignPropertyStatus.NEEDS_RESULTS;
  }
  if (now.isBefore(s, "day")) {
    return CampaignPropertyStatus.NOT_STARTED;
  }
  if (now.isAfter(e, "day")) {
    return CampaignPropertyStatus.ENDED;
  }
  return CampaignPropertyStatus.ACTIVE;
};

export default getCampaignStatus;
