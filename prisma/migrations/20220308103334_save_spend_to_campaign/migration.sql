CREATE OR REPLACE FUNCTION roi_calculation(campaignId text)
RETURNS void
AS $$
DECLARE
conversionRate decimal;
returnValue float;
spendValue float;
resultValue float;
resultFunnelNodeId text;
spendId text;
resultId text;
BEGIN
  -- get the spend value
  SELECT INTO spendValue, spendId campaign_result_metric.total_value, campaign_result_metric.id FROM campaigns INNER JOIN campaign_result_metric ON campaign_result_metric.id=campaigns.spend_metric_id WHERE campaigns.id=campaignId;

	-- get the result map, find last node on graph we have value for, get result value and which funnel node it was
	SELECT INTO resultValue, resultId, resultFunnelNodeId campaign_result_metric.total_value, campaign_result_metric.id, campaign_result_map."funnel_node_id" FROM campaign_result_map INNER JOIN funnel_nodes ON campaign_result_map.funnel_node_id=funnel_nodes.id INNER JOIN campaign_result_metric ON campaign_result_map.provider_metric_name=campaign_result_metric.provider_metric_name AND campaign_result_metric.campaign_id=campaign_result_map.campaign_id WHERE campaign_result_map.campaign_id=campaignId AND campaign_result_metric.total_value > 0 ORDER BY funnel_nodes."order" DESC LIMIT 1;

  -- get the conversion rate for selected funnel node
  SELECT ROUND(return_conversion(resultFunnelNodeId)::numeric,2) INTO conversionRate;

  RAISE WARNING 'resultValue %', resultValue;
  RAISE WARNING 'spendValue %', spendValue;
  RAISE WARNING 'resultFunnelNodeId %', resultFunnelNodeId;

  -- calculate result as return value
  returnValue := resultValue * conversionRate;
  IF (spendValue != 0) THEN
    UPDATE campaigns SET cost = spendValue WHERE campaigns.id = campaignId;
  END IF;
  IF (spendValue != 0 AND returnValue != 0) THEN
    UPDATE campaigns SET return_value = returnValue WHERE campaigns.id = campaignId;
  END IF;
  IF (spendValue != 0 AND returnValue != 0) THEN
    UPDATE campaigns SET roi_actual = ((returnValue - spendValue) / spendValue) * 100 WHERE campaigns.id = campaignId;
  ELSE
    UPDATE campaigns SET roi_actual = NULL WHERE campaigns.id = campaignId;
  END IF;
END;
$$
LANGUAGE 'plpgsql';
