/*
  Warnings:

  - You are about to drop the `seasonalities` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "GoalDataType" ADD VALUE 'SPIKE_MILESTONE';
ALTER TYPE "GoalDataType" ADD VALUE 'PROPOGATE_MILESTONE';

-- UPDATE "goal_data_points" SET type = 'PROPOGATE_MILESTONE' WHERE type = 'MILESTONE';




