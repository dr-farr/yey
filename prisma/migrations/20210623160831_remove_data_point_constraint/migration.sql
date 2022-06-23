/*
  Warnings:

  - You are about to drop the column `campaign_id` on the `campaign_data_points` table. All the data in the column will be lost.
  - You are about to drop the column `job_id` on the `campaign_data_points` table. All the data in the column will be lost.

*/

-- AlterTable
ALTER TABLE "goal_data_point_values" ALTER COLUMN "data_point_id" DROP NOT NULL;
