/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[user_id,team_id,goal_id]` on the table `simulations`. If there are existing duplicate values, the migration will fail.

*/
-- DropIndex
DROP INDEX "simulations.team_id_unique";

-- CreateIndex
CREATE UNIQUE INDEX "simulations.user_id_team_id_goal_id_unique" ON "simulations"("user_id", "team_id", "goal_id");
