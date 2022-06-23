/*
  Warnings:

  - The migration will change the primary key for the `simulations` table. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `name` on the `simulations` table. All the data in the column will be lost.
  - The migration will add a unique constraint covering the columns `[team_id]` on the table `simulations`. If there are existing duplicate values, the migration will fail.

*/
-- AlterTable
ALTER TABLE "simulations" DROP CONSTRAINT "simulations_pkey",
DROP COLUMN "name",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD PRIMARY KEY ("id");
DROP SEQUENCE "simulations_id_seq";

-- CreateIndex
CREATE UNIQUE INDEX "simulations.team_id_unique" ON "simulations"("team_id");
