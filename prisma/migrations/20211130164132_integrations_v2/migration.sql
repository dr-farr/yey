/*
  Warnings:

  - You are about to drop the column `campaign_mirror_id` on the `campaigns` table. All the data in the column will be lost.
  - You are about to drop the column `result_aggregated_id` on the `campaigns` table. All the data in the column will be lost.
  - You are about to drop the column `spend_aggregated_id` on the `campaigns` table. All the data in the column will be lost.
  - You are about to drop the column `connector_id` on the `funnel_datapoint_value` table. All the data in the column will be lost.
  - You are about to drop the column `connector_id` on the `goal_data_point_values` table. All the data in the column will be lost.
  - You are about to drop the column `progressDataPointId` on the `goal_data_point_values` table. All the data in the column will be lost.
  - You are about to drop the `jobs` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `connectors` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `campaign_data_points_aggregated` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `campaign_mirror` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `campaign_data_points` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "IntegrationTaskType" AS ENUM ('FUNNEL', 'CAMPAIGN');

-- CreateEnum
CREATE TYPE "IntegrationStatusType" AS ENUM ('CREATED', 'ERROR', 'SUCCESS', 'CANCELLED');

-- CreateEnum
CREATE TYPE "IntegrationScheduleType" AS ENUM ('DAILY', 'WEEKLY', 'MONTHLY', 'ONCE');

-- DropForeignKey
ALTER TABLE "jobs" DROP CONSTRAINT "jobs_connector_id_fkey";

-- DropForeignKey
ALTER TABLE "connectors" DROP CONSTRAINT "connectors_account_id_fkey";

-- DropForeignKey
ALTER TABLE "connectors" DROP CONSTRAINT "connectors_funnel_id_fkey";

-- DropForeignKey
ALTER TABLE "connectors" DROP CONSTRAINT "connectors_funnel_node_id_fkey";

-- DropForeignKey
ALTER TABLE "connectors" DROP CONSTRAINT "connectors_team_id_fkey";

-- DropForeignKey
ALTER TABLE "connectors" DROP CONSTRAINT "connectors_user_id_fkey";

-- DropForeignKey
ALTER TABLE "campaign_data_points_aggregated" DROP CONSTRAINT "campaign_data_points_aggregated_campaign_id_fkey";

-- DropForeignKey
ALTER TABLE "campaign_data_points_aggregated" DROP CONSTRAINT "campaign_data_points_aggregated_campaign_mirror_id_fkey";

-- DropForeignKey
ALTER TABLE "campaign_mirror" DROP CONSTRAINT "campaign_mirror_connector_id_fkey";

-- DropForeignKey
ALTER TABLE "campaign_mirror" DROP CONSTRAINT "campaign_mirror_team_id_fkey";

-- DropForeignKey
ALTER TABLE "campaign_data_points" DROP CONSTRAINT "campaign_data_points_campaign_mirror_id_fkey";

-- DropForeignKey
ALTER TABLE "goal_data_point_values" DROP CONSTRAINT "goal_data_point_values_connector_id_fkey";

-- DropForeignKey
ALTER TABLE "goal_data_point_values" DROP CONSTRAINT "goal_data_point_values_progressDataPointId_fkey";

-- DropForeignKey
ALTER TABLE "funnel_datapoint_value" DROP CONSTRAINT "funnel_datapoint_value_connector_id_fkey";

-- DropForeignKey
ALTER TABLE "campaigns" DROP CONSTRAINT "campaigns_campaign_mirror_id_fkey";

-- DropForeignKey
ALTER TABLE "campaigns" DROP CONSTRAINT "campaigns_result_aggregated_id_fkey";

-- DropForeignKey
ALTER TABLE "campaigns" DROP CONSTRAINT "campaigns_spend_aggregated_id_fkey";

-- AlterTable
ALTER TABLE "campaigns" DROP COLUMN "campaign_mirror_id",
DROP COLUMN "result_aggregated_id",
DROP COLUMN "spend_aggregated_id",
ADD COLUMN     "integration_config" JSONB,
ADD COLUMN     "integration_id" TEXT,
ADD COLUMN     "spend_metric_id" TEXT;

-- AlterTable
ALTER TABLE "funnel_datapoint_value" DROP COLUMN "connector_id",
ADD COLUMN     "integrationId" TEXT;

-- AlterTable
ALTER TABLE "goal_data_point_values" DROP COLUMN "connector_id",
DROP COLUMN "progressDataPointId",
ADD COLUMN     "integration_id" TEXT,
ADD COLUMN     "progress_data_point_id" TEXT;

-- DropTable
DROP TABLE "jobs";

-- DropTable
DROP TABLE "connectors";

-- DropTable
DROP TABLE "campaign_data_points_aggregated";

-- DropTable
DROP TABLE "campaign_mirror";

-- DropTable
DROP TABLE "campaign_data_points";

-- DropEnum
DROP TYPE "ConnectorTrigger";

-- DropEnum
DROP TYPE "ConnectorType";

-- DropEnum
DROP TYPE "JobStatus";

-- CreateTable
CREATE TABLE "campaign_result" (
    "id" TEXT NOT NULL,
    "campaign_id" TEXT,
    "provider_metric_name" TEXT NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "value_type" "CampaignDataValueType" NOT NULL DEFAULT E'RESULT',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "campaign_result_metric" (
    "id" TEXT NOT NULL,
    "provider_metric_name" TEXT NOT NULL,
    "provider_name" TEXT NOT NULL,
    "total_value" DOUBLE PRECISION NOT NULL,
    "campaign_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "campaign_result_map" (
    "funnel_node_id" TEXT NOT NULL,
    "campaign_id" TEXT NOT NULL,
    "provider_metric_name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("campaign_id","funnel_node_id")
);

-- CreateTable
CREATE TABLE "integration" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "job_run" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "owner_id" TEXT NOT NULL,
    "team_id" TEXT NOT NULL,
    "integration_account_id" TEXT,
    "funnel_node_id" TEXT,
    "task_status" "IntegrationStatusType" NOT NULL,
    "task_type" "IntegrationTaskType" NOT NULL,
    "tasker_ids" TEXT[],
    "tasker_schedule" "IntegrationScheduleType" NOT NULL,
    "config" JSONB NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "campaign_result.campaign_id_provider_metric_name_date_unique" ON "campaign_result"("campaign_id", "provider_metric_name", "date");

-- CreateIndex
CREATE UNIQUE INDEX "campaign_result_metric.campaign_id_provider_metric_name_unique" ON "campaign_result_metric"("campaign_id", "provider_metric_name");

-- AddForeignKey
ALTER TABLE "campaign_result_map" ADD FOREIGN KEY ("funnel_node_id") REFERENCES "funnel_nodes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campaign_result_map" ADD FOREIGN KEY ("campaign_id", "provider_metric_name") REFERENCES "campaign_result_metric"("campaign_id", "provider_metric_name") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campaign_result_map" ADD FOREIGN KEY ("campaign_id") REFERENCES "campaigns"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "integration" ADD FOREIGN KEY ("owner_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "integration" ADD FOREIGN KEY ("team_id") REFERENCES "teams"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "integration" ADD FOREIGN KEY ("integration_account_id") REFERENCES "accounts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "integration" ADD FOREIGN KEY ("funnel_node_id") REFERENCES "funnel_nodes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campaign_result" ADD FOREIGN KEY ("campaign_id") REFERENCES "campaigns"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campaign_result" ADD FOREIGN KEY ("campaign_id", "provider_metric_name") REFERENCES "campaign_result_metric"("campaign_id", "provider_metric_name") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campaign_result_metric" ADD FOREIGN KEY ("campaign_id") REFERENCES "campaigns"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "goal_data_point_values" ADD FOREIGN KEY ("integration_id") REFERENCES "integration"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "goal_data_point_values" ADD FOREIGN KEY ("progress_data_point_id") REFERENCES "progress_data_points"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "funnel_datapoint_value" ADD FOREIGN KEY ("integrationId") REFERENCES "integration"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campaigns" ADD FOREIGN KEY ("spend_metric_id") REFERENCES "campaign_result_metric"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campaigns" ADD FOREIGN KEY ("integration_id") REFERENCES "integration"("id") ON DELETE SET NULL ON UPDATE CASCADE;
