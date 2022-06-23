-- Create Types
CREATE TYPE "ScenarioDataType" AS ENUM ('START', 'GOAL', 'UPDATE');

-- CreateTable
CREATE TABLE "scenarios" (
    "id" TEXT NOT NULL,
    "team_id" TEXT NOT NULL,
    "scenario_id" TEXT NOT NULL DEFAULT E'default',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "initial" BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "scenario_points" (
    "id" TEXT NOT NULL,
    "team_id" TEXT NOT NULL,
    "scenario_id" TEXT NOT NULL,
    "type" "ScenarioDataType" NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "data" JSONB NOT NULL,

    PRIMARY KEY ("id")
);
-- CreateIndex
CREATE UNIQUE INDEX "scenarios.team_id_scenario_id_unique" ON "scenarios"("team_id", "scenario_id");

-- CreateIndex
CREATE UNIQUE INDEX "scenario_points.team_id_scenario_id_type_date_unique" ON "scenario_points"("team_id", "scenario_id", "type", "date");

-- CreateIndex
CREATE UNIQUE INDEX "goals.funnel_id_unique" ON "goals"("funnel_id");

-- AddForeignKey
ALTER TABLE "scenarios" ADD FOREIGN KEY ("team_id") REFERENCES "teams"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "scenario_points" ADD FOREIGN KEY ("team_id") REFERENCES "teams"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "scenario_points" ADD FOREIGN KEY ("scenario_id") REFERENCES "scenarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;
