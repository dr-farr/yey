-- CreateEnum
CREATE TYPE "GoalDataPointValueProvider" AS ENUM ('MANUAL', 'INTEGRATION');

-- AlterTable
ALTER TABLE "goal_data_point_values" ADD COLUMN     "provider" "GoalDataPointValueProvider" NOT NULL DEFAULT E'MANUAL',
ADD COLUMN     "providerIntegration" TEXT;
