import { Campaign } from 'truenorth-graphql';
import getReturn from 'utils/funnels/getReturn';

/**
 * Combines the actual spend for a group of campaigns
 * @param campaigns
 * @returns float
 */
export const combineSpend = (campaigns: Campaign[]) => {
  return (
    campaigns
      .filter((campaign) => campaign?.spendAggregated?.value !== null)
      .map(({ spendAggregated }) => spendAggregated?.value ?? 0)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0) ?? 0
  );
};

/**
 * Combines the actual result for a group of campaigns
 * @param campaigns
 * @returns float
 */
export const combineResult = (campaigns: Campaign[]) => {
  return (
    campaigns
      .filter((campaign) => campaign?.returnValue !== null)
      .map(({ returnValue }) => returnValue)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0) ?? 0
  );
};

export const combinePredictedSpend = (campaigns: Campaign[]) => {
  return (
    campaigns
      .filter((campaign) => campaign?.budgetAverage !== null)
      .map(({ budgetAverage }) => budgetAverage ?? 0)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0) ?? 0
  );
};

export const combinePredictedResult = (campaigns: Campaign[], funnel) => {
  return (
    campaigns
      .filter((campaign) => campaign?.resultAverage !== 0)
      .map(({ resultAverage, kpi }) => {
        return getReturn(funnel, kpi?.id, resultAverage) ?? 0;
      })
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0) ?? 0
  );
};
