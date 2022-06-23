/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[campaign_id,source_type]` on the table `campaign_data_points_aggregated`. If there are existing duplicate values, the migration will fail.

*/
-- AlterTable
ALTER TABLE "campaign_data_points_aggregated" ADD COLUMN     "campaign_id" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "campaign_data_points_aggregated.campaign_id_source_type_unique" ON "campaign_data_points_aggregated"("campaign_id", "source_type");

-- AddForeignKey
ALTER TABLE "campaign_data_points_aggregated" ADD FOREIGN KEY ("campaign_id") REFERENCES "campaigns"("id") ON DELETE SET NULL ON UPDATE CASCADE;
