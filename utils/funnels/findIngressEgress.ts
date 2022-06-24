import { FunnelEdge, FunnelConversion } from "truenorth-graphql";

/**
 * Find the id of the ingress and egress nodes from an array of edges or conversions.
 * For example, given the folloing array of conversion objects:
 *
 * ```
 * {__typename: "FunnelConversion", fromNodeId: 1, toNodeId: 2, rate: 0.42424242424242425}
 * {__typename: "FunnelConversion", fromNodeId: 2, toNodeId: 3, rate: 0.5142857142857142}
 * {__typename: "FunnelConversion", fromNodeId: 3, toNodeId: 4, rate: 183.33333333333331}
 * ```
 *
 * This function will determine `1` as the correct ingress node id and
 * `4` as the correct egress node id.
 * @param edgesOrConversions
 * @return an object containing the id of the ingress node and the id of the egress node
 * from the given set of edges or conversions
 */
const findIngressEgress = (
  edgesOrConversions: FunnelConversion[] | FunnelEdge[]
): { ingress: string; egress: string } => {
  const fromIds = [];
  const toIds = [];
  edgesOrConversions.forEach(
    (edgeOrConversion: FunnelConversion | FunnelEdge) => {
      fromIds.push(edgeOrConversion.fromNodeId);
      toIds.push(edgeOrConversion.toNodeId);
    }
  );
  const ingress = fromIds.find((id) => !toIds.includes(id));
  const egress = toIds.find((id) => !fromIds.includes(id));
  return { ingress, egress };
};

export default findIngressEgress;
