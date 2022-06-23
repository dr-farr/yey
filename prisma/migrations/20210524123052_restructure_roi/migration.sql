/*
  Warnings:

  - You are about to drop the column `return` on the `campaigns` table. All the data in the column will be lost.
  - You are about to drop the column `result_actual` on the `campaigns` table. All the data in the column will be lost.
  - You are about to drop the column `budget_actual` on the `campaigns` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "campaigns" DROP COLUMN "return",
DROP COLUMN "result_actual",
DROP COLUMN "budget_actual";


ALTER TABLE "campaigns" ADD COLUMN "roi_override" DOUBLE PRECISION;
