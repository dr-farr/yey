/*
  Warnings:

  - The `integration` column on the `funnel_datapoint_value` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `integrations` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `scenario_points` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `scenarios` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `simulations` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "GoalDataType" AS ENUM ('INPUT', 'TARGET', 'MILESTONE');

-- DropForeignKey
ALTER TABLE "integrations" DROP CONSTRAINT "integrations_account_id_fkey";

-- DropForeignKey
ALTER TABLE "integrations" DROP CONSTRAINT "integrations_funnel_id_fkey";

-- DropForeignKey
ALTER TABLE "integrations" DROP CONSTRAINT "integrations_team_id_fkey";

-- DropForeignKey
ALTER TABLE "integrations" DROP CONSTRAINT "integrations_user_id_fkey";

-- DropForeignKey
ALTER TABLE "scenario_points" DROP CONSTRAINT "scenario_points_scenario_id_fkey";

-- DropForeignKey
ALTER TABLE "scenario_points" DROP CONSTRAINT "scenario_points_team_id_fkey";

-- DropForeignKey
ALTER TABLE "scenarios" DROP CONSTRAINT "scenarios_team_id_fkey";

-- DropForeignKey
ALTER TABLE "simulations" DROP CONSTRAINT "simulations_funnel_id_fkey";

-- DropForeignKey
ALTER TABLE "simulations" DROP CONSTRAINT "simulations_goalId_fkey";

-- DropForeignKey
ALTER TABLE "simulations" DROP CONSTRAINT "simulations_team_id_fkey";

-- DropForeignKey
ALTER TABLE "simulations" DROP CONSTRAINT "simulations_userId_fkey";

-- AlterTable
ALTER TABLE "funnel_datapoint_value" DROP COLUMN "integration",
ADD COLUMN     "integration" TEXT;

-- DropTable
DROP TABLE "integrations";

-- DropTable
DROP TABLE "scenario_points";

-- DropTable
DROP TABLE "scenarios";

-- DropTable
DROP TABLE "simulations";

-- DropEnum
DROP TYPE "IntegrationType";

-- CreateTable
CREATE TABLE "goal_data_points" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "type" "GoalDataType" NOT NULL,
    "goal_id" TEXT NOT NULL,
    "month" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "goal_data_point_values" (
    "id" TEXT NOT NULL,
    "data_point_id" TEXT NOT NULL,
    "funnel_node_id" TEXT NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "goal_data_points.goal_id_month_year_unique" ON "goal_data_points"("goal_id", "month", "year");

-- CreateIndex
CREATE UNIQUE INDEX "goal_data_point_values.data_point_id_funnel_node_id_unique" ON "goal_data_point_values"("data_point_id", "funnel_node_id");

-- AddForeignKey
ALTER TABLE "goal_data_points" ADD FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "goal_data_points" ADD FOREIGN KEY ("goal_id") REFERENCES "goals"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "goal_data_point_values" ADD FOREIGN KEY ("data_point_id") REFERENCES "goal_data_points"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "goal_data_point_values" ADD FOREIGN KEY ("funnel_node_id") REFERENCES "funnel_nodes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- Get everyone back onboarded
UPDATE users SET completed_onboards = array_remove(completed_onboards, 'FUNNEL');
UPDATE users SET completed_onboards = array_remove(completed_onboards, 'GOALTWO');

DELETE from funnel_datapoint_value;
DELETE from goals;
