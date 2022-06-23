/*
  Warnings:

  - You are about to drop the column `type` on the `campaigns` table. All the data in the column will be lost.
  - Made the column `summary` on table `campaigns` required. The migration will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "campaigns" DROP COLUMN "type",
ADD COLUMN     "channel" TEXT NOT NULL DEFAULT E'',
ALTER COLUMN "name" SET DEFAULT E'',
ALTER COLUMN "summary" SET NOT NULL,
ALTER COLUMN "summary" SET DEFAULT E'';
