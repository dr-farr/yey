/*
  Warnings:

  - You are about to drop the column `lead_quality` on the `campaigns` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "campaigns" DROP COLUMN "lead_quality",
ADD COLUMN     "cost" INTEGER,
ADD COLUMN     "priority" INTEGER;

-- AlterTable
ALTER TABLE "ideas" ADD COLUMN     "priority" INTEGER,
ALTER COLUMN "name" SET DEFAULT E'';
