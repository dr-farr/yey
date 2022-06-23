/*
  Warnings:

  - You are about to drop the column `user_id` on the `simulations` table. All the data in the column will be lost.
  - The migration will add a unique constraint covering the columns `[funnel_id,team_id]` on the table `simulations`. If there are existing duplicate values, the migration will fail.

*/
-- DropIndex
DROP INDEX "simulations.funnel_id_team_id_user_id_unique";

-- DropForeignKey
ALTER TABLE "simulations" DROP CONSTRAINT "simulations_user_id_fkey";

-- AlterTable
ALTER TABLE "simulations" DROP COLUMN "user_id",
ADD COLUMN     "userId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "simulations.funnel_id_team_id_unique" ON "simulations"("funnel_id", "team_id");

-- AddForeignKey
ALTER TABLE "simulations" ADD FOREIGN KEY("userId")REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
