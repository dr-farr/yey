/*
  Warnings:

  - You are about to drop the column `channelId` on the `campaign_groups` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "campaign_groups" DROP CONSTRAINT "campaign_groups_channelId_fkey";

-- AlterTable
ALTER TABLE "campaign_groups" DROP COLUMN "channelId",
ADD COLUMN     "expected_result" INTEGER,
ADD COLUMN     "expected_spend" INTEGER,
ADD COLUMN     "funnel_node_id" TEXT,
ALTER COLUMN "title" DROP NOT NULL,
ALTER COLUMN "description" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "campaign_groups" ADD FOREIGN KEY ("funnel_node_id") REFERENCES "funnel_nodes"("id") ON DELETE SET NULL ON UPDATE CASCADE;
