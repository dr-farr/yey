/*
  Warnings:

  - You are about to drop the column `connector_id` on the `campaign_data_points` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "campaign_data_points" DROP CONSTRAINT "campaign_data_points_connector_id_fkey";

-- AlterTable
ALTER TABLE "campaign_data_points" DROP COLUMN "connector_id";
