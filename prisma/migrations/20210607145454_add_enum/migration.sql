/*
  Warnings:

  - The `source` column on the `funnel_datapoint_value` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "FunnelDataPointSource" AS ENUM ('ONBOARD', 'INTEGRATION');

-- AlterTable
ALTER TABLE "funnel_datapoint_value" ADD COLUMN     "integration" "IntegrationType",
DROP COLUMN "source",
ADD COLUMN     "source" "FunnelDataPointSource" NOT NULL DEFAULT E'ONBOARD';
