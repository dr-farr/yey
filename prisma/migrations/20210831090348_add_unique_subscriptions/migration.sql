/*
  Warnings:

  - A unique constraint covering the columns `[team_id]` on the table `subscriptions` will be added. If there are existing duplicate values, this will fail.

*/

-- AlterTable
ALTER TABLE "subscriptions" ALTER COLUMN "subscription_id" DROP NOT NULL;

DO $$
    DECLARE
        team record;
        adminId text;
        endDate timestamp;
        subscriptionStatus "SubscriptionStatus";
    BEGIN
        SET plpgsql.cuid_hostid = "011001110";
        FOR team IN (SELECT teams.* FROM teams
                                             LEFT JOIN subscriptions ON subscriptions.team_id = teams.id
                     WHERE subscriptions.team_id IS NULL)
            LOOP
                SELECT user_teams.user_id INTO adminId FROM user_teams WHERE user_teams.team_id=team.id AND user_teams."role"='ADMIN';
                SELECT team.created_at + INTERVAL '31 day' INTO endDate;
                IF (endDate > now()) THEN
                    SELECT 'TRIALING' INTO subscriptionStatus;
                ELSE
                    SELECT 'TRIAL_EXPIRED' INTO subscriptionStatus;
                END IF;
                INSERT INTO subscriptions (id, status, user_id, team_id, updated_at, end_date) VALUES (cuid(), subscriptionStatus, adminId, team.id, now(), endDate);
            END LOOP;
    END$$;

-- CreateIndex
CREATE UNIQUE INDEX "subscriptions.team_id_unique" ON "subscriptions"("team_id");
