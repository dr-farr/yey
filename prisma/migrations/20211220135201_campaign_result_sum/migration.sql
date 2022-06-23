CREATE OR REPLACE FUNCTION campaign_result_sum()
RETURNS TRIGGER
AS $$
DECLARE
	startDate timestamp;
	endDate timestamp;
	sumResult float;
BEGIN
  	SELECT campaigns."start", campaigns."end" INTO startDate, endDate FROM campaigns WHERE id = NEW.campaign_id;
    SELECT SUM("value") INTO sumResult FROM campaign_result WHERE ("date" BETWEEN SYMMETRIC startDate AND endDate ) AND campaign_id = NEW.campaign_id AND provider_metric_name = NEW.provider_metric_name;
  	UPDATE campaign_result_metric SET total_value = sumResult WHERE campaign_id = NEW.campaign_id AND provider_metric_name = NEW.provider_metric_name;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER sum_campaign_result AFTER INSERT ON campaign_result FOR EACH ROW EXECUTE PROCEDURE campaign_result_sum();
