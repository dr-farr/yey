/*
  Warnings:

  - You are about to drop the column `campaignId` on the `campaign_data_points` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "campaign_data_points" DROP CONSTRAINT "campaign_data_points_campaignId_fkey";

-- AlterTable
ALTER TABLE "campaign_data_points" DROP COLUMN "campaignId",
ADD COLUMN     "campaign_id" TEXT;

-- AddForeignKey
ALTER TABLE "campaign_data_points" ADD FOREIGN KEY ("campaign_id") REFERENCES "campaigns"("id") ON DELETE SET NULL ON UPDATE CASCADE;
