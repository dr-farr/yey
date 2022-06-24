export const Timeframes = ["week", "month", "year"] as const;
export type Timeframe = typeof Timeframes[number];
