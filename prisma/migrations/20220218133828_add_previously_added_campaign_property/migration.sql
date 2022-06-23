-- AlterTable
ALTER TABLE "teams"
    ADD COLUMN "has_created_campaigns" BOOLEAN NOT NULL DEFAULT false;

-- Update all teams that have at least one campaign to "has_created_campaigns" = true.
UPDATE teams m
SET has_created_campaigns = true
FROM (SELECT teams."id", COUNT(*) as no_of_campaigns
      FROM teams
               INNER JOIN campaigns ON campaigns.team_id = teams.id
      GROUP BY teams."id") d
WHERE d.id = m.id;

-- Function to be triggered when a campaign is added
CREATE OR REPLACE FUNCTION update_team_campaign_status()
    RETURNS TRIGGER
AS
$$
DECLARE
BEGIN
    UPDATE teams as t SET has_created_campaigns = true WHERE new.team_id = t.id AND t.has_created_campaigns = false;
    RETURN NEW;
END
$$
    LANGUAGE 'plpgsql';

CREATE TRIGGER update_team_state
    AFTER INSERT
    ON campaigns
    FOR ROW
EXECUTE PROCEDURE update_team_campaign_status();


