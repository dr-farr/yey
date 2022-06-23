CREATE OR REPLACE FUNCTION public.campaign_update()
 RETURNS trigger
AS $function$
DECLARE
BEGIN
  RAISE WARNING 'CAMPAIGN UPDATE';
  IF (OLD.spend_metric_id <> NEW.spend_metric_id) OR (OLD.roi_lock <> NEW.roi_lock) OR (OLD.return_value <> NEW.return_value) OR (NEW.last_run <> OLD.last_run) THEN
    RAISE WARNING 'CAMPAIGN TRUE';
    PERFORM roi_calculation(NEW.id);
  END IF;
  RETURN NEW;
END;
$function$
LANGUAGE 'plpgsql';
