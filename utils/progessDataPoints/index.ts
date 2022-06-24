import dayjs from 'utils/dayjs';
import * as djs from 'dayjs';
import { ProgressDataPointType } from 'truenorth-graphql';

/**
 * Return progressDataPoints array that can be upserted into the DB
 * @param targetGoalDate
 * @param teamId
 * @param startsAt optional starting date for the milestone creation (useful for seeding)
 * @returns progessDataPoints []
 */
export const generateProgressDataPoints = (
  targetGoalDate: djs.Dayjs,
  teamId: string,
  startsAt?: djs.Dayjs,
) => {
  const diff = dayjs(targetGoalDate).diff(startsAt ?? dayjs(), 'month') + 1;
  const progressDataPoints: {
    month: number;
    year: number;
    type: ProgressDataPointType;
    teamId: string;
  }[] = [];

  // if there is no space between the start and end, dont generate points
  if (diff === 1) {
    return [];
  }

  for (let i = 0; i <= diff; i++) {
    progressDataPoints.push({
      month: (startsAt ?? dayjs()).add(i, 'month').month(),
      year: (startsAt ?? dayjs()).add(i, 'month').year(),
      type: ProgressDataPointType.MONTH,
      teamId: teamId,
    });
  }

  return progressDataPoints;
};
