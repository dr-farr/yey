-- CreateEnum
CREATE TYPE "StatementTracking" AS ENUM ('CONVERSION', 'ABSOLUTE');

-- AlterTable
ALTER TABLE "goal_data_point_values" ADD COLUMN     "conversionRate" DOUBLE PRECISION,
ADD COLUMN     "statement" "StatementTracking";
