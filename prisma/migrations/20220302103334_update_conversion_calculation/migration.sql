-- Updating a function that will grab all of the funnel conversions for a given funnelId
-- This needs to factor in nullish values
CREATE OR REPLACE FUNCTION get_funnel_conversions(funnelId text)
    RETURNS table(fromNodeId text, toNodeId text, rate float, averageEgress float, averageIngress float)
AS $$
BEGIN
    RETURN QUERY SELECT fromNode.id as "fromNodeId", toNode.id as "toNodeId", greatest(AVG(toNodes."value"), 1) / greatest(AVG(fromNodes."value"), 1) as "rate", AVG(toNodes."value") as "averageEgress", AVG(fromNodes."value") as "averageIngress"
                 FROM funnel_edges edges
                          JOIN funnel_nodes fromNode ON edges.from_node_id = fromNode.id
                          JOIN funnel_nodes toNode ON edges.to_node_id = toNode.id
                          JOIN funnel_datapoint_value fromNodes ON edges.from_node_id = fromNodes.node_id
                          JOIN funnel_datapoint_value toNodes ON edges.to_node_id = toNodes.node_id
                 WHERE edges.funnel_id = funnelId
                 GROUP BY edges.id, fromNode.id, toNode.id;
END;
$$
    LANGUAGE 'plpgsql';


