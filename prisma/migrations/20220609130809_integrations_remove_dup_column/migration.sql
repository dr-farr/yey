/*
  Warnings:

  - You are about to drop the column `last_run_status` on the `integration` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "integration" DROP COLUMN "last_run_status";
