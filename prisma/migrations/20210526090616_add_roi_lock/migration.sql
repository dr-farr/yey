-- AlterTable
ALTER TABLE "campaigns" ADD COLUMN     "roi_lock" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "campaigns" DROP COLUMN "roi_override";
