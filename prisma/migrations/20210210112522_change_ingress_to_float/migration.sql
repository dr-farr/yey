/*
  Warnings:

  - You are about to alter the column `ingress` on the `simulations` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.

*/
-- AlterTable
ALTER TABLE "simulations" ALTER COLUMN "ingress" SET DATA TYPE DECIMAL(65,30);
