/*
  Warnings:

  - You are about to drop the `tag_campaigns` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tag_ideas` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "tag_campaigns" DROP CONSTRAINT "tag_campaigns_campaign_id_fkey";

-- DropForeignKey
ALTER TABLE "tag_campaigns" DROP CONSTRAINT "tag_campaigns_tag_id_fkey";

-- DropForeignKey
ALTER TABLE "tag_ideas" DROP CONSTRAINT "tag_ideas_idea_id_fkey";

-- DropForeignKey
ALTER TABLE "tag_ideas" DROP CONSTRAINT "tag_ideas_tag_id_fkey";

-- AlterTable
ALTER TABLE "tags" ADD COLUMN     "ideaId" TEXT,
ADD COLUMN     "campaignId" TEXT;

-- DropTable
DROP TABLE "tag_campaigns";

-- DropTable
DROP TABLE "tag_ideas";

-- AddForeignKey
ALTER TABLE "tags" ADD FOREIGN KEY("ideaId")REFERENCES "ideas"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tags" ADD FOREIGN KEY("campaignId")REFERENCES "campaigns"("id") ON DELETE SET NULL ON UPDATE CASCADE;
