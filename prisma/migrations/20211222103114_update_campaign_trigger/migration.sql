CREATE OR REPLACE FUNCTION public.campaign_update()
 RETURNS trigger
AS $$
DECLARE
BEGIN
  RAISE WARNING 'CAMPAIGN UPDATE';
  IF (OLD.spend_metric_id <> NEW.spend_metric_id) OR (OLD.spend_metric_id IS NULL AND NEW.spend_metric_id IS NOT NULL) OR (OLD.spend_metric_id IS NOT NULL AND NEW.spend_metric_id IS NULL) OR (OLD.roi_lock = true AND NEW.roi_lock = false) THEN
    RAISE WARNING 'CAMPAIGN TRUE';
    PERFORM roi_calculation(NEW.id);
  END IF;
  RETURN NEW;
END;
$$
LANGUAGE 'plpgsql';