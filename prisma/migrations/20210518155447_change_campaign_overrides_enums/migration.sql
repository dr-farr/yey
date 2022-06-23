/*
  Warnings:

  - The migration will remove the values [STARTDATE,ENDDATE,BUDGET] on the enum `CampaignOverrides`. If these variants are still used in the database, the migration will fail.

*/
-- AlterEnum
BEGIN;
ALTER TYPE "CampaignOverrides" ADD VALUE 'DATE';
ALTER TYPE "CampaignOverrides" ADD VALUE 'RESULT';
ALTER TYPE "CampaignOverrides" ADD VALUE 'SPEND';
COMMIT;
