/**
 *
 * Return true if the metric for a campaign is manual entered
 *
 * @param providerMetric
 * @returns
 */

export const providerMetricIsManual = (
  providerMetric: string | null
): boolean => {
  return providerMetric?.startsWith("manual.result") ?? false;
};
