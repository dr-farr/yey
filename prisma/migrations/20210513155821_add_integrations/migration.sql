/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[user_id,provider_id]` on the table `accounts`. If there are existing duplicate values, the migration will fail.

*/
-- CreateEnum
CREATE TYPE "ConnectorType" AS ENUM ('ACCOUNTCAMPAIGN', 'CAMPAIGNLINK', 'FUNNELLINK');

-- CreateEnum
CREATE TYPE "CampaignOverrides" AS ENUM ('NAME', 'STARTDATE', 'ENDDATE', 'BUDGET');

-- CreateEnum
CREATE TYPE "ConnectorTrigger" AS ENUM ('MANUAL_ONLY', 'SCHEDULED_DAILY');

-- CreateEnum
CREATE TYPE "JobStatus" AS ENUM ('SCHEDULED', 'RUNNING', 'FAILED', 'SUCCESS');

-- AlterTable
ALTER TABLE "campaigns" ADD COLUMN     "campaign_overrides" "CampaignOverrides"[],
ADD COLUMN     "campaign_mirror_id" TEXT,
ADD COLUMN     "spend_aggregated_id" TEXT,
ADD COLUMN     "result_aggregated_id" TEXT;

-- CreateTable
CREATE TABLE "campaign_mirror" (
    "id" TEXT NOT NULL,
    "sourceId" TEXT NOT NULL,
    "sourceName" TEXT NOT NULL DEFAULT E'',
    "sourceParentName" TEXT,
    "sourceParentId" TEXT,
    "sourceAccountName" TEXT,
    "sourceAccountId" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "connector_id" TEXT NOT NULL,
    "team_id" TEXT NOT NULL,
    "start" TIMESTAMP(3),
    "end" TIMESTAMP(3),
    "active" BOOLEAN,
    "budget" DOUBLE PRECISION,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "connectors" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT DEFAULT E'',
    "active" BOOLEAN NOT NULL,
    "trigger" "ConnectorTrigger" NOT NULL,
    "channel" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "type" "ConnectorType" NOT NULL,
    "user_id" TEXT NOT NULL,
    "account_id" TEXT NOT NULL,
    "team_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "state" JSONB,
    "action_plan" JSONB NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "jobs" (
    "id" TEXT NOT NULL,
    "task_id" TEXT,
    "trigger" "ConnectorTrigger",
    "connector_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "schedule_time" TIMESTAMP(3),
    "log" TEXT,
    "output" JSONB,
    "status" "JobStatus" NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "campaign_data_points_aggregated" (
    "id" TEXT NOT NULL,
    "campaign_mirror_id" TEXT,
    "value" DOUBLE PRECISION NOT NULL,
    "source_type" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "campaign_data_points" (
    "id" TEXT NOT NULL,
    "connector_id" TEXT NOT NULL,
    "campaign_mirror_id" TEXT,
    "job_id" TEXT,
    "value" DOUBLE PRECISION NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "source_type" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "campaign_mirror.sourceId_connector_id_unique" ON "campaign_mirror"("sourceId", "connector_id");

-- CreateIndex
CREATE UNIQUE INDEX "jobs.task_id_unique" ON "jobs"("task_id");

-- CreateIndex
CREATE UNIQUE INDEX "campaign_data_points_aggregated.campaign_mirror_id_source_type_unique" ON "campaign_data_points_aggregated"("campaign_mirror_id", "source_type");

-- CreateIndex
CREATE UNIQUE INDEX "campaign_data_points.date_campaign_mirror_id_source_type_unique" ON "campaign_data_points"("date", "campaign_mirror_id", "source_type");

-- CreateIndex
CREATE UNIQUE INDEX "accounts.user_id_provider_id_unique" ON "accounts"("user_id", "provider_id");

-- AddForeignKey
ALTER TABLE "campaign_mirror" ADD FOREIGN KEY ("connector_id") REFERENCES "connectors"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campaign_mirror" ADD FOREIGN KEY ("team_id") REFERENCES "teams"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "connectors" ADD FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "connectors" ADD FOREIGN KEY ("account_id") REFERENCES "accounts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "connectors" ADD FOREIGN KEY ("team_id") REFERENCES "teams"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "jobs" ADD FOREIGN KEY ("connector_id") REFERENCES "connectors"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campaign_data_points_aggregated" ADD FOREIGN KEY ("campaign_mirror_id") REFERENCES "campaign_mirror"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campaign_data_points" ADD FOREIGN KEY ("connector_id") REFERENCES "connectors"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campaign_data_points" ADD FOREIGN KEY ("campaign_mirror_id") REFERENCES "campaign_mirror"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campaign_data_points" ADD FOREIGN KEY ("job_id") REFERENCES "jobs"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "accounts" ADD FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campaigns" ADD FOREIGN KEY ("campaign_mirror_id") REFERENCES "campaign_mirror"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campaigns" ADD FOREIGN KEY ("spend_aggregated_id") REFERENCES "campaign_data_points_aggregated"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campaigns" ADD FOREIGN KEY ("result_aggregated_id") REFERENCES "campaign_data_points_aggregated"("id") ON DELETE SET NULL ON UPDATE CASCADE;
