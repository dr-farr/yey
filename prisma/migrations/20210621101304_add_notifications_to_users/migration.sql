/*
  Warnings:

  - You are about to drop the column `job_id` on the `campaign_data_points` table. All the data in the column will be lost.
  - You are about to drop the column `campaign_id` on the `campaign_data_points` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "NotificationType" AS ENUM ('MENTION', 'ACTION');

-- DropForeignKey
ALTER TABLE "campaign_data_points" DROP CONSTRAINT "campaign_data_points_campaign_id_fkey";

-- DropForeignKey
ALTER TABLE "campaign_data_points" DROP CONSTRAINT "campaign_data_points_job_id_fkey";

-- DropIndex
DROP INDEX "campaign_data_points.date_campaign_id_source_type_unique";

-- AlterTable
ALTER TABLE "campaign_data_points" DROP COLUMN "job_id",
DROP COLUMN "campaign_id";

-- CreateTable
CREATE TABLE "notifications" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "type" "NotificationType" NOT NULL,
    "userId" TEXT NOT NULL,
    "fromUserId" TEXT,
    "read" BOOLEAN NOT NULL DEFAULT false,
    "teamId" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "notifications" ADD FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notifications" ADD FOREIGN KEY ("fromUserId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notifications" ADD FOREIGN KEY ("teamId") REFERENCES "teams"("id") ON DELETE CASCADE ON UPDATE CASCADE;
