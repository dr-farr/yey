/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[goal_id,team_id,user_id]` on the table `simulations`. If there are existing duplicate values, the migration will fail.

*/
-- DropIndex
DROP INDEX "simulations.user_id_team_id_goal_id_unique";

-- CreateIndex
CREATE UNIQUE INDEX "simulations.goal_id_team_id_user_id_unique" ON "simulations"("goal_id", "team_id", "user_id");
