/*
  Warnings:

  - The migration will change the primary key for the `simulations` table. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `simulations` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `name` to the `simulations` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "simulations" DROP CONSTRAINT "simulations_pkey",
ADD COLUMN     "name" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN "id" SERIAL,
ADD PRIMARY KEY ("name");
