/*
  Warnings:

  - You are about to alter the column `value` on the `funnel_datapoint_value` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.

*/
-- AlterEnum
ALTER TYPE "Onboards" ADD VALUE 'USER';

-- AlterTable
ALTER TABLE "funnel_datapoint_value" ALTER COLUMN "value" SET DATA TYPE DOUBLE PRECISION;
