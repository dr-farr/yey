-- AlterEnum
ALTER TYPE "IntegrationStatusType" ADD VALUE 'RUNNING';

-- AlterTable
ALTER TABLE "campaigns" ADD COLUMN     "last_run" TIMESTAMP(3),
ADD COLUMN     "last_run_status" "IntegrationStatusType";
