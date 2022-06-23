CREATE OR REPLACE FUNCTION public.campaign_metric_dropped()
 RETURNS trigger
AS $$
DECLARE
BEGIN
  PERFORM roi_calculation(OLD.campaign_id);
  RETURN OLD;
END;
$$
LANGUAGE 'plpgsql';

CREATE TRIGGER campaign_metric_deleted AFTER DELETE ON campaign_result_metric FOR EACH ROW EXECUTE PROCEDURE campaign_metric_dropped();