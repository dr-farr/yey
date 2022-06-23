/*
  Warnings:

  - You are about to drop the column `goal_id` on the `simulations` table. All the data in the column will be lost.
  - The migration will add a unique constraint covering the columns `[funnel_id,team_id,user_id]` on the table `simulations`. If there are existing duplicate values, the migration will fail.
  - Added the required column `funnel_id` to the `simulations` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "simulations.goal_id_team_id_user_id_unique";

-- DropForeignKey
ALTER TABLE "simulations" DROP CONSTRAINT "simulations_goal_id_fkey";

-- AlterTable
ALTER TABLE "simulations" DROP COLUMN "goal_id",
ADD COLUMN     "funnel_id" INTEGER NOT NULL,
ADD COLUMN     "goalId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "simulations.funnel_id_team_id_user_id_unique" ON "simulations"("funnel_id", "team_id", "user_id");

-- AddForeignKey
ALTER TABLE "simulations" ADD FOREIGN KEY("funnel_id")REFERENCES "funnels"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "simulations" ADD FOREIGN KEY("goalId")REFERENCES "goals"("id") ON DELETE SET NULL ON UPDATE CASCADE;
