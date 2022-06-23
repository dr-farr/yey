/*
  Warnings:

  - You are about to drop the column `roi` on the `campaigns` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "campaigns" DROP COLUMN "roi",
ADD COLUMN     "roi_actual" DOUBLE PRECISION,
ADD COLUMN     "roi_predicted" DOUBLE PRECISION;


-- Adding a function that will grab all of the funnel conversions for a given funnelId
CREATE OR REPLACE FUNCTION get_funnel_conversions(funnelId text)
RETURNS table(fromNodeId text, toNodeId text, rate float, averageEgress float, averageIngress float)
AS $$
BEGIN
RETURN QUERY SELECT fromNode.id as "fromNodeId", toNode.id as "toNodeId", AVG(toNodes."value") / AVG(fromNodes."value") as "rate", AVG(toNodes."value") as "averageEgress", AVG(fromNodes."value") as "averageIngress"
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

-- Function that returns a conversion rate from a given node to the final node, for example conversion between visits - revenue, or sales - revenue etc.
CREATE OR REPLACE FUNCTION return_conversion(nodeId text)
RETURNS numeric
AS $$
DECLARE
conversion numeric := 1;
funnelId text;
conversionRow record;
foundNode boolean := false;
BEGIN
  SELECT INTO funnelId funnel_nodes.funnel_id FROM funnel_nodes WHERE funnel_nodes.id = nodeId;
  FOR conversionRow IN (SELECT fromNodeId, rate FROM get_funnel_conversions(funnelId)) LOOP
    IF conversionRow.fromNodeId = nodeId OR foundNode = true THEN
      conversion = conversion * conversionRow.rate;
      foundNode := true;
    END IF;
  END LOOP;
  RETURN conversion;
END;
$$
LANGUAGE 'plpgsql';

-- Function to be triggered when a data point is added/updated.
-- Checks to see if it is linked to a campaign, and if it is does the ROI calculation
CREATE OR REPLACE FUNCTION data_point_calculation()
RETURNS TRIGGER
AS $$
DECLARE
conversionRate decimal;
returnValue float;
spendValue float;
resultValue float;
spendId text;
resultId text;
campaignId text;
funnelNodeId text;
roiLock boolean;
BEGIN
SELECT INTO resultId, spendId, funnelNodeId, campaignId, roiLock campaigns.result_aggregated_id, campaigns.spend_aggregated_id, campaigns.funnel_node_id, campaigns.id, campaigns.roi_lock FROM campaigns WHERE campaigns.result_aggregated_id = NEW.id OR campaigns.spend_aggregated_id = NEW.id;
  IF (resultId = NEW.id OR spendId = NEW.id) AND roiLock = FALSE THEN
    SELECT ROUND(return_conversion(funnelNodeId)::numeric,2) INTO conversionRate;
    IF resultId = NEW.id THEN
      returnValue := NEW.value * conversionRate;
      SELECT INTO spendValue campaign_data_points_aggregated."value" FROM campaign_data_points_aggregated WHERE campaign_data_points_aggregated.id = spendId;
    ELSEIF spendId = NEW.id THEN
      SELECT INTO resultValue campaign_data_points_aggregated."value" FROM campaign_data_points_aggregated WHERE campaign_data_points_aggregated.id = resultId;
      returnValue := resultValue * conversionRate;
	  spendValue := NEW.value;
    END IF;
    UPDATE campaigns SET roi_actual = ((returnValue - spendValue) / spendValue) * 100 WHERE campaigns.id = campaignId;
  END IF;
  RETURN NEW;
END;
$$
LANGUAGE 'plpgsql';

-- Function to be triggered when a campaign is updated.
-- Checks to see if the change would impact the ROI and then recalculates.
CREATE OR REPLACE FUNCTION campaign_calculation()
RETURNS TRIGGER
AS $$
DECLARE
conversionRate decimal;
returnValue float;
spendValue float;
resultValue float;
BEGIN
  IF (OLD.funnel_node_id != NEW.funnel_node_id OR OLD.spend_aggregated_id != NEW.spend_aggregated_id OR OLD.result_aggregated_id != NEW.result_aggregated_id OR OLD.roi_lock != NEW.roi_lock) AND NEW.roi_lock = FALSE THEN
    SELECT ROUND(return_conversion(NEW.funnel_node_id)::numeric,2) INTO conversionRate;
    SELECT INTO spendValue campaign_data_points_aggregated."value" FROM campaign_data_points_aggregated WHERE campaign_data_points_aggregated.id = NEW.spend_aggregated_id;
    SELECT INTO resultValue campaign_data_points_aggregated."value" FROM campaign_data_points_aggregated WHERE campaign_data_points_aggregated.id = NEW.result_aggregated_id;
    returnValue := resultValue * conversionRate;
    UPDATE campaigns SET roi_actual = ((returnValue - spendValue) / spendValue) * 100 WHERE campaigns.id = NEW.id;
  END IF;
  RETURN NEW;
END;
$$
LANGUAGE 'plpgsql';

-- Setup the triggers!
CREATE TRIGGER aggregated_data_point_changes AFTER UPDATE ON campaign_data_points_aggregated FOR EACH ROW EXECUTE PROCEDURE data_point_calculation();
CREATE TRIGGER aggregated_data_point_inserted AFTER INSERT ON campaign_data_points_aggregated FOR EACH ROW EXECUTE PROCEDURE data_point_calculation();

CREATE TRIGGER campaign_changes AFTER UPDATE ON campaigns FOR EACH ROW EXECUTE PROCEDURE campaign_calculation();
