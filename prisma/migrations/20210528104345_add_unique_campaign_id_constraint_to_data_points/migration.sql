/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[date,campaign_mirror_id,source_type,campaign_id]` on the table `campaign_data_points`. If there are existing duplicate values, the migration will fail.

*/
-- DropIndex
DROP INDEX "campaign_data_points.date_campaign_mirror_id_source_type_unique";

-- CreateIndex
CREATE UNIQUE INDEX "campaign_data_points.date_campaign_mirror_id_source_type_campaign_id_unique" ON "campaign_data_points"("date", "campaign_mirror_id", "source_type", "campaign_id");
