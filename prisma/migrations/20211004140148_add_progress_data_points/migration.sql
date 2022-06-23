/*
  Warnings:

  - You are about to drop the column `retrospectiveId` on the `comments` table. All the data in the column will be lost.
  - You are about to drop the column `end_of_retro_period` on the `retrospectives` table. All the data in the column will be lost.
  - You are about to drop the column `milestone_date` on the `retrospectives` table. All the data in the column will be lost.
  - You are about to drop the column `start_of_retro_period` on the `retrospectives` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[progress_data_point_id,month,year]` on the table `retrospectives` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `month` to the `retrospectives` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `retrospectives` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ProgressDataPointType" AS ENUM ('MONTH');

-- AlterEnum
ALTER TYPE "CommentType" ADD VALUE 'PROGRESSDATAPOINT';

-- DropForeignKey
ALTER TABLE "comments" DROP CONSTRAINT "comments_retrospectiveId_fkey";

-- DropIndex
DROP INDEX "retrospectives.milestone_date_team_id_unique";

-- AlterTable
ALTER TABLE "comments" DROP COLUMN "retrospectiveId",
ADD COLUMN     "progressDataPointId" TEXT;

-- AlterTable
ALTER TABLE "goal_data_point_values" ADD COLUMN     "progressDataPointId" TEXT;

-- AlterTable
ALTER TABLE "retrospectives" DROP COLUMN "end_of_retro_period",
DROP COLUMN "milestone_date",
DROP COLUMN "start_of_retro_period",
ADD COLUMN     "month" INTEGER NOT NULL,
ADD COLUMN     "progress_data_point_id" TEXT,
ADD COLUMN     "year" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "progress_data_points" (
    "id" TEXT NOT NULL,
    "type" "ProgressDataPointType" NOT NULL,
    "goal_id" TEXT NOT NULL,
    "team_id" TEXT NOT NULL,
    "month" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "retrospectives.progress_data_point_id_month_year_unique" ON "retrospectives"("progress_data_point_id", "month", "year");

-- CreateIndex
CREATE UNIQUE INDEX "progress_data_points.goal_id_month_year_unique" ON "progress_data_points"("goal_id", "month", "year");

-- AddForeignKey
ALTER TABLE "progress_data_points" ADD FOREIGN KEY ("goal_id") REFERENCES "goals"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "progress_data_points" ADD FOREIGN KEY ("team_id") REFERENCES "teams"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD FOREIGN KEY ("progressDataPointId") REFERENCES "progress_data_points"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "retrospectives" ADD FOREIGN KEY ("progress_data_point_id") REFERENCES "progress_data_points"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "goal_data_point_values" ADD FOREIGN KEY ("progressDataPointId") REFERENCES "progress_data_points"("id") ON DELETE SET NULL ON UPDATE CASCADE;
