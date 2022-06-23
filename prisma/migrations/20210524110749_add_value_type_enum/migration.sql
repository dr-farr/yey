-- CreateEnum
CREATE TYPE "CampaignDataValueType" AS ENUM ('RESULT', 'SPEND');

-- AlterTable
ALTER TABLE "campaign_data_points_aggregated" ADD COLUMN     "value_type" "CampaignDataValueType" NOT NULL DEFAULT E'RESULT';
