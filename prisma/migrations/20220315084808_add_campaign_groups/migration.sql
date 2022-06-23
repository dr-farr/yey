-- AlterEnum
ALTER TYPE "CommentType" ADD VALUE 'CAMPAIGN_GROUP';

-- AlterTable
ALTER TABLE "campaigns" ADD COLUMN     "campaign_group_id" TEXT;

-- AlterTable
ALTER TABLE "comments" ADD COLUMN     "campaign_group_id" TEXT;

-- CreateTable
CREATE TABLE "campaign_groups" (
    "id" TEXT NOT NULL,
    "team_id" TEXT NOT NULL,
    "owner_id" TEXT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "channelId" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "campaign_groups" ADD FOREIGN KEY ("team_id") REFERENCES "teams"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campaign_groups" ADD FOREIGN KEY ("owner_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campaign_groups" ADD FOREIGN KEY ("channelId") REFERENCES "channel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD FOREIGN KEY ("campaign_group_id") REFERENCES "campaign_groups"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campaigns" ADD FOREIGN KEY ("campaign_group_id") REFERENCES "campaign_groups"("id") ON DELETE SET NULL ON UPDATE CASCADE;
