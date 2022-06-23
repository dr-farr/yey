/*
  Warnings:

  - You are about to drop the column `isRevenue` on the `funnel_nodes` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "funnel_nodes" DROP COLUMN "isRevenue",
ADD COLUMN     "is_revenue" BOOLEAN DEFAULT false;
