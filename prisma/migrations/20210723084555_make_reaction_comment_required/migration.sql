/*
  Warnings:

  - Made the column `commentId` on table `reactions` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "reactions" ALTER COLUMN "commentId" SET NOT NULL;
