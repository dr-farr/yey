-- AlterTable
ALTER TABLE "campaign_data_points" ADD COLUMN     "campaignId" TEXT;

-- AddForeignKey
ALTER TABLE "campaign_data_points" ADD FOREIGN KEY ("campaignId") REFERENCES "campaigns"("id") ON DELETE SET NULL ON UPDATE CASCADE;
