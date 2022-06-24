import { Timeframe } from 'utils/timeframes';

/**
 * Enum to hold information about whether tooltips represent a past month,
 * the current month, or a month in the future
 */
export enum Relativity {
  PAST,
  PRESENT,
  FUTURE,
}

interface TimelineMonthInformationBase {
  count: number;
  projected: number;
}
export type TimelineMonthInformationPast = TimelineMonthInformationBase & {
  actual: number;
  actualPercent: number;
};
export type TimelineMonthInformationPresent = TimelineMonthInformationBase & {
  expected: number;
  expectedPercent: number;
  actual: number;
  actualPercent: number;
};
export type TimelineMonthInformationFuture = TimelineMonthInformationBase & {
  expected: number;
  expectedPercent: number;
};

export type TimelineMonthInformation =
  | TimelineMonthInformationPast
  | TimelineMonthInformationFuture
  | TimelineMonthInformationPresent;

export type TimeInterval = Timeframe;

export enum CampaignSortableKeys {
  NAME = 'name',
  CHANNEL = 'channel',
  OWNER = 'user',
  CREATED = 'createdAt',
}

export enum CampaignPageType {
  ANALYTICS = 'analytics',
  TIMELINE = 'timeline',
}

export type kpiCombinedType = {
  [key: string]: { value: number; isRevenue: boolean };
};

export type InformationType = {
  actualPercent?: number;
  expectedPercent?: number;
};
