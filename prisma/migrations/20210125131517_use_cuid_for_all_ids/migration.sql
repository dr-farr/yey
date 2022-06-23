/*
  Warnings:

  - The migration will change the primary key for the `accounts` table. If it partially fails, the table could be left without primary key constraint.
  - The migration will change the primary key for the `campaigns` table. If it partially fails, the table could be left without primary key constraint.
  - The migration will change the primary key for the `funnel_datapoint_value` table. If it partially fails, the table could be left without primary key constraint.
  - The migration will change the primary key for the `funnel_datapoints` table. If it partially fails, the table could be left without primary key constraint.
  - The migration will change the primary key for the `funnel_edges` table. If it partially fails, the table could be left without primary key constraint.
  - The migration will change the primary key for the `funnel_nodes` table. If it partially fails, the table could be left without primary key constraint.
  - The migration will change the primary key for the `funnels` table. If it partially fails, the table could be left without primary key constraint.
  - The migration will change the primary key for the `goals` table. If it partially fails, the table could be left without primary key constraint.
  - The migration will change the primary key for the `ideas` table. If it partially fails, the table could be left without primary key constraint.
  - The migration will change the primary key for the `integrations` table. If it partially fails, the table could be left without primary key constraint.
  - The migration will change the primary key for the `sessions` table. If it partially fails, the table could be left without primary key constraint.
  - The migration will change the primary key for the `tag_campaigns` table. If it partially fails, the table could be left without primary key constraint.
  - The migration will change the primary key for the `tag_ideas` table. If it partially fails, the table could be left without primary key constraint.
  - The migration will change the primary key for the `tags` table. If it partially fails, the table could be left without primary key constraint.
  - The migration will change the primary key for the `team_invites` table. If it partially fails, the table could be left without primary key constraint.
  - The migration will change the primary key for the `teams` table. If it partially fails, the table could be left without primary key constraint.
  - The migration will change the primary key for the `user_teams` table. If it partially fails, the table could be left without primary key constraint.
  - The migration will change the primary key for the `users` table. If it partially fails, the table could be left without primary key constraint.
  - The migration will change the primary key for the `verification_requests` table. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "campaigns" DROP CONSTRAINT "campaigns_funnel_node_id_fkey";

-- DropForeignKey
ALTER TABLE "campaigns" DROP CONSTRAINT "campaigns_team_id_fkey";

-- DropForeignKey
ALTER TABLE "campaigns" DROP CONSTRAINT "campaigns_user_id_fkey";

-- DropForeignKey
ALTER TABLE "funnel_datapoint_value" DROP CONSTRAINT "funnel_datapoint_value_data_point_id_fkey";

-- DropForeignKey
ALTER TABLE "funnel_datapoint_value" DROP CONSTRAINT "funnel_datapoint_value_node_id_fkey";

-- DropForeignKey
ALTER TABLE "funnel_datapoints" DROP CONSTRAINT "funnel_datapoints_funnel_id_fkey";

-- DropForeignKey
ALTER TABLE "funnel_edges" DROP CONSTRAINT "funnel_edges_from_node_id_fkey";

-- DropForeignKey
ALTER TABLE "funnel_edges" DROP CONSTRAINT "funnel_edges_funnel_id_fkey";

-- DropForeignKey
ALTER TABLE "funnel_edges" DROP CONSTRAINT "funnel_edges_to_node_id_fkey";

-- DropForeignKey
ALTER TABLE "funnel_nodes" DROP CONSTRAINT "funnel_nodes_funnel_id_fkey";

-- DropForeignKey
ALTER TABLE "funnels" DROP CONSTRAINT "funnels_team_id_fkey";

-- DropForeignKey
ALTER TABLE "funnels" DROP CONSTRAINT "funnels_user_id_fkey";

-- DropForeignKey
ALTER TABLE "goals" DROP CONSTRAINT "goals_funnel_id_fkey";

-- DropForeignKey
ALTER TABLE "goals" DROP CONSTRAINT "goals_team_id_fkey";

-- DropForeignKey
ALTER TABLE "goals" DROP CONSTRAINT "goals_user_id_fkey";

-- DropForeignKey
ALTER TABLE "ideas" DROP CONSTRAINT "ideas_team_id_fkey";

-- DropForeignKey
ALTER TABLE "ideas" DROP CONSTRAINT "ideas_user_id_fkey";

-- DropForeignKey
ALTER TABLE "integrations" DROP CONSTRAINT "integrations_account_id_fkey";

-- DropForeignKey
ALTER TABLE "integrations" DROP CONSTRAINT "integrations_funnel_id_fkey";

-- DropForeignKey
ALTER TABLE "integrations" DROP CONSTRAINT "integrations_team_id_fkey";

-- DropForeignKey
ALTER TABLE "integrations" DROP CONSTRAINT "integrations_user_id_fkey";

-- DropForeignKey
ALTER TABLE "simulations" DROP CONSTRAINT "simulations_funnel_id_fkey";

-- DropForeignKey
ALTER TABLE "simulations" DROP CONSTRAINT "simulations_goalId_fkey";

-- DropForeignKey
ALTER TABLE "simulations" DROP CONSTRAINT "simulations_team_id_fkey";

-- DropForeignKey
ALTER TABLE "simulations" DROP CONSTRAINT "simulations_user_id_fkey";

-- DropForeignKey
ALTER TABLE "tag_campaigns" DROP CONSTRAINT "tag_campaigns_campaign_id_fkey";

-- DropForeignKey
ALTER TABLE "tag_campaigns" DROP CONSTRAINT "tag_campaigns_tag_id_fkey";

-- DropForeignKey
ALTER TABLE "tag_ideas" DROP CONSTRAINT "tag_ideas_idea_id_fkey";

-- DropForeignKey
ALTER TABLE "tag_ideas" DROP CONSTRAINT "tag_ideas_tag_id_fkey";

-- DropForeignKey
ALTER TABLE "tags" DROP CONSTRAINT "tags_user_id_fkey";

-- DropForeignKey
ALTER TABLE "team_invites" DROP CONSTRAINT "team_invites_owner_id_fkey";

-- DropForeignKey
ALTER TABLE "team_invites" DROP CONSTRAINT "team_invites_team_id_fkey";

-- DropForeignKey
ALTER TABLE "user_teams" DROP CONSTRAINT "user_teams_team_id_fkey";

-- DropForeignKey
ALTER TABLE "user_teams" DROP CONSTRAINT "user_teams_user_id_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_selected_team_id_fkey";

-- AlterTable
ALTER TABLE "accounts" DROP CONSTRAINT "accounts_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "user_id" SET DATA TYPE TEXT,
ADD PRIMARY KEY ("id");
DROP SEQUENCE "accounts_id_seq";

-- AlterTable
ALTER TABLE "campaigns" DROP CONSTRAINT "campaigns_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "user_id" SET DATA TYPE TEXT,
ALTER COLUMN "team_id" SET DATA TYPE TEXT,
ALTER COLUMN "funnel_node_id" SET DATA TYPE TEXT,
ADD PRIMARY KEY ("id");
DROP SEQUENCE "campaigns_id_seq";

-- AlterTable
ALTER TABLE "funnel_datapoint_value" DROP CONSTRAINT "funnel_datapoint_value_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "data_point_id" SET DATA TYPE TEXT,
ALTER COLUMN "node_id" SET DATA TYPE TEXT,
ADD PRIMARY KEY ("id");
DROP SEQUENCE "funnel_datapoint_value_id_seq";

-- AlterTable
ALTER TABLE "funnel_datapoints" DROP CONSTRAINT "funnel_datapoints_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "funnel_id" SET DATA TYPE TEXT,
ADD PRIMARY KEY ("id");
DROP SEQUENCE "funnel_datapoints_id_seq";

-- AlterTable
ALTER TABLE "funnel_edges" DROP CONSTRAINT "funnel_edges_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "funnel_id" SET DATA TYPE TEXT,
ALTER COLUMN "from_node_id" SET DATA TYPE TEXT,
ALTER COLUMN "to_node_id" SET DATA TYPE TEXT,
ADD PRIMARY KEY ("id");
DROP SEQUENCE "funnel_edges_id_seq";

-- AlterTable
ALTER TABLE "funnel_nodes" DROP CONSTRAINT "funnel_nodes_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "funnel_id" SET DATA TYPE TEXT,
ADD PRIMARY KEY ("id");
DROP SEQUENCE "funnel_nodes_id_seq";

-- AlterTable
ALTER TABLE "funnels" DROP CONSTRAINT "funnels_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "user_id" SET DATA TYPE TEXT,
ALTER COLUMN "team_id" SET DATA TYPE TEXT,
ADD PRIMARY KEY ("id");
DROP SEQUENCE "funnels_id_seq";

-- AlterTable
ALTER TABLE "goals" DROP CONSTRAINT "goals_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "user_id" SET DATA TYPE TEXT,
ALTER COLUMN "funnel_id" SET DATA TYPE TEXT,
ALTER COLUMN "team_id" SET DATA TYPE TEXT,
ADD PRIMARY KEY ("id");
DROP SEQUENCE "goals_id_seq";

-- AlterTable
ALTER TABLE "ideas" DROP CONSTRAINT "ideas_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "user_id" SET DATA TYPE TEXT,
ALTER COLUMN "team_id" DROP DEFAULT,
ALTER COLUMN "team_id" SET DATA TYPE TEXT,
ADD PRIMARY KEY ("id");
DROP SEQUENCE "ideas_id_seq";
DROP SEQUENCE "ideas_team_id_seq";

-- AlterTable
ALTER TABLE "integrations" DROP CONSTRAINT "integrations_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "funnel_id" SET DATA TYPE TEXT,
ALTER COLUMN "account_id" SET DATA TYPE TEXT,
ALTER COLUMN "team_id" SET DATA TYPE TEXT,
ALTER COLUMN "user_id" SET DATA TYPE TEXT,
ADD PRIMARY KEY ("id");
DROP SEQUENCE "integrations_id_seq";

-- AlterTable
ALTER TABLE "sessions" DROP CONSTRAINT "sessions_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "user_id" SET DATA TYPE TEXT,
ADD PRIMARY KEY ("id");
DROP SEQUENCE "sessions_id_seq";

-- AlterTable
ALTER TABLE "simulations" ALTER COLUMN "user_id" SET DATA TYPE TEXT,
ALTER COLUMN "team_id" SET DATA TYPE TEXT,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "funnel_id" SET DATA TYPE TEXT,
ALTER COLUMN "goalId" SET DATA TYPE TEXT;
DROP SEQUENCE "simulations_id_seq";

-- AlterTable
ALTER TABLE "tag_campaigns" DROP CONSTRAINT "tag_campaigns_pkey",
ALTER COLUMN "tag_id" SET DATA TYPE TEXT,
ALTER COLUMN "campaign_id" SET DATA TYPE TEXT,
ADD PRIMARY KEY ("tag_id", "campaign_id");

-- AlterTable
ALTER TABLE "tag_ideas" DROP CONSTRAINT "tag_ideas_pkey",
ALTER COLUMN "tag_id" SET DATA TYPE TEXT,
ALTER COLUMN "idea_id" SET DATA TYPE TEXT,
ADD PRIMARY KEY ("tag_id", "idea_id");

-- AlterTable
ALTER TABLE "tags" DROP CONSTRAINT "tags_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "user_id" SET DATA TYPE TEXT,
ADD PRIMARY KEY ("id");
DROP SEQUENCE "tags_id_seq";

-- AlterTable
ALTER TABLE "team_invites" DROP CONSTRAINT "team_invites_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "owner_id" SET DATA TYPE TEXT,
ALTER COLUMN "team_id" SET DATA TYPE TEXT,
ADD PRIMARY KEY ("id");
DROP SEQUENCE "team_invites_id_seq";

-- AlterTable
ALTER TABLE "teams" DROP CONSTRAINT "teams_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD PRIMARY KEY ("id");
DROP SEQUENCE "teams_id_seq";

-- AlterTable
ALTER TABLE "user_teams" DROP CONSTRAINT "user_teams_pkey",
ALTER COLUMN "user_id" SET DATA TYPE TEXT,
ALTER COLUMN "team_id" SET DATA TYPE TEXT,
ADD PRIMARY KEY ("user_id", "team_id");

-- AlterTable
ALTER TABLE "users" DROP CONSTRAINT "users_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "selected_team_id" SET DATA TYPE TEXT,
ADD PRIMARY KEY ("id");
DROP SEQUENCE "users_id_seq";

-- AlterTable
ALTER TABLE "verification_requests" DROP CONSTRAINT "verification_requests_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD PRIMARY KEY ("id");
DROP SEQUENCE "verification_requests_id_seq";

-- AddForeignKey
ALTER TABLE "campaigns" ADD FOREIGN KEY("user_id")REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campaigns" ADD FOREIGN KEY("team_id")REFERENCES "teams"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campaigns" ADD FOREIGN KEY("funnel_node_id")REFERENCES "funnel_nodes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "funnel_datapoint_value" ADD FOREIGN KEY("data_point_id")REFERENCES "funnel_datapoints"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "funnel_datapoint_value" ADD FOREIGN KEY("node_id")REFERENCES "funnel_nodes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "funnel_datapoints" ADD FOREIGN KEY("funnel_id")REFERENCES "funnels"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "funnel_edges" ADD FOREIGN KEY("funnel_id")REFERENCES "funnels"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "funnel_edges" ADD FOREIGN KEY("from_node_id")REFERENCES "funnel_nodes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "funnel_edges" ADD FOREIGN KEY("to_node_id")REFERENCES "funnel_nodes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "funnel_nodes" ADD FOREIGN KEY("funnel_id")REFERENCES "funnels"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "funnels" ADD FOREIGN KEY("user_id")REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "funnels" ADD FOREIGN KEY("team_id")REFERENCES "teams"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "goals" ADD FOREIGN KEY("user_id")REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "goals" ADD FOREIGN KEY("team_id")REFERENCES "teams"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "goals" ADD FOREIGN KEY("funnel_id")REFERENCES "funnels"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ideas" ADD FOREIGN KEY("user_id")REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ideas" ADD FOREIGN KEY("team_id")REFERENCES "teams"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "integrations" ADD FOREIGN KEY("funnel_id")REFERENCES "funnels"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "integrations" ADD FOREIGN KEY("account_id")REFERENCES "accounts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "integrations" ADD FOREIGN KEY("team_id")REFERENCES "teams"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "integrations" ADD FOREIGN KEY("user_id")REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "simulations" ADD FOREIGN KEY("funnel_id")REFERENCES "funnels"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "simulations" ADD FOREIGN KEY("user_id")REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "simulations" ADD FOREIGN KEY("team_id")REFERENCES "teams"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "simulations" ADD FOREIGN KEY("goalId")REFERENCES "goals"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tag_campaigns" ADD FOREIGN KEY("tag_id")REFERENCES "tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tag_campaigns" ADD FOREIGN KEY("campaign_id")REFERENCES "campaigns"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tag_ideas" ADD FOREIGN KEY("tag_id")REFERENCES "tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tag_ideas" ADD FOREIGN KEY("idea_id")REFERENCES "ideas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tags" ADD FOREIGN KEY("user_id")REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team_invites" ADD FOREIGN KEY("owner_id")REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team_invites" ADD FOREIGN KEY("team_id")REFERENCES "teams"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_teams" ADD FOREIGN KEY("user_id")REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_teams" ADD FOREIGN KEY("team_id")REFERENCES "teams"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD FOREIGN KEY("selected_team_id")REFERENCES "teams"("id") ON DELETE SET NULL ON UPDATE CASCADE;
