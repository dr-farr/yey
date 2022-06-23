-- AlterTable
ALTER TABLE "teams" ADD COLUMN     "completed_onboards" "Onboards"[];

-- A function designed to update a teams onboards based on some entity checks
CREATE OR REPLACE FUNCTION public.onboard_team ()
	RETURNS void
	LANGUAGE plpgsql
	AS $function$
DECLARE
	teamId text;
	completedOnboards "Onboards" [];
BEGIN
	FOR teamId IN(
		SELECT
			id FROM teams)
	LOOP
		completedOnboards := NULL;
		IF(
			SELECT
				id AS goalId FROM goals
			WHERE
				goals.team_id = teamId
			LIMIT 1) IS NOT NULL THEN
			completedOnboards = array_append(completedOnboards, 'GOALTWO');
		END IF;
		IF(
			SELECT
				id AS funnelId FROM funnels
			WHERE
				funnels.team_id = teamId
			LIMIT 1) IS NOT NULL THEN
			completedOnboards = array_append(completedOnboards, 'FUNNEL');
		END IF;
		IF(
			SELECT
				id AS subscriptionId FROM subscriptions
			WHERE
				subscriptions.team_id = teamId
			LIMIT 1) IS NOT NULL THEN
			completedOnboards = array_append(completedOnboards, 'PAYMENT');
		END IF;
		IF teamId IS NOT NULL THEN
			UPDATE
				teams
			SET
				completed_onboards = completedOnboards
			WHERE
				teams.id = teamId;
		END IF;
	END LOOP;
	RETURN;
END;
$function$
