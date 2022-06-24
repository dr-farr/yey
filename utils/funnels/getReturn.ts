import { Funnel } from 'truenorth-graphql';
import findIngressEgress from 'utils/funnels/findIngressEgress';
import round from 'utils/round';

export default function getReturn(funnel: Funnel, kpiId: string, kpiValue: number) {
  if (!funnel || !kpiId) {
    return NaN;
  }
  if (!funnel.conversions) {
    return NaN;
  }
  const { egress } = findIngressEgress(funnel.conversions);
  if (kpiId === egress) {
    // the value is already 'revenue'
    return kpiValue;
  }
  let value = kpiValue;
  let currentEdge = funnel.conversions.find((conversion) => conversion.fromNodeId === kpiId);
  while (currentEdge) {
    value = value * currentEdge.rate;
    if (currentEdge.toNodeId === egress) {
      currentEdge = null;
    } else {
      currentEdge = funnel.conversions.find(
        (conversion) => conversion.fromNodeId === currentEdge.toNodeId,
      );
    }
  }
  return value;
}

export const getMetricValue = (funnel: Funnel, kpiId: string) => {
  if (!funnel || !kpiId) {
    return NaN;
  }
  if (!funnel.conversions) {
    return NaN;
  }

  const currentMetricMatch = funnel.conversions.findIndex((metric) => metric.fromNodeId === kpiId);
  const applicableConversions = funnel.conversions.slice(currentMetricMatch || undefined);
  const rates = applicableConversions.map((c) => c.rate);
  let start = 1;
  rates.forEach((rate) => {
    start *= rate;
  });
  return round(start, 2);
};
