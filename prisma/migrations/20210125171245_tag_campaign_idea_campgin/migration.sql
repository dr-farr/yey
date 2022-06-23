/*
  Warnings:

  - You are about to drop the column `ideaId` on the `tags` table. All the data in the column will be lost.
  - You are about to drop the column `campaignId` on the `tags` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "tags" DROP CONSTRAINT "tags_campaignId_fkey";

-- DropForeignKey
ALTER TABLE "tags" DROP CONSTRAINT "tags_ideaId_fkey";

-- AlterTable
ALTER TABLE "tags" DROP COLUMN "ideaId",
DROP COLUMN "campaignId";

-- CreateTable
CREATE TABLE "_IdeaToTag" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CampaignToTag" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_IdeaToTag_AB_unique" ON "_IdeaToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_IdeaToTag_B_index" ON "_IdeaToTag"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CampaignToTag_AB_unique" ON "_CampaignToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_CampaignToTag_B_index" ON "_CampaignToTag"("B");

-- AddForeignKey
ALTER TABLE "_IdeaToTag" ADD FOREIGN KEY("A")REFERENCES "ideas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IdeaToTag" ADD FOREIGN KEY("B")REFERENCES "tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CampaignToTag" ADD FOREIGN KEY("A")REFERENCES "campaigns"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CampaignToTag" ADD FOREIGN KEY("B")REFERENCES "tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;
