import { ProviderAccountType } from "constants/integrationMap";

/**
 * IF there is a provider spend metric that is indentifible then we return it.
 */

const spendMetrics = [
  { provider: ProviderAccountType.GOOGLE_ANALYTICS, metric: "ga:adCost" },
  { provider: ProviderAccountType.FACEBOOK_ADS, metric: "spend" },
  { provider: ProviderAccountType.LINKEDIN_ADS, metric: "costInLocalCurrency" },
];

export function isSpendMetric(provider: string, metric: string) {
  return spendMetrics.some(
    (sp) => sp.metric == metric && sp.provider == provider
  );
}

export function getProviderSpendMetric(provider) {
  return spendMetrics.find((sp) => sp.provider == provider)?.metric || "";
}
