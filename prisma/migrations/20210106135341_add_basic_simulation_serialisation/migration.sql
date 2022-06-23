/*
  Warnings:

  - Added the required column `team_id` to the `simulations` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `simulations` required. The migration will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "simulations" ADD COLUMN     "team_id" INTEGER NOT NULL,
ALTER COLUMN "name" SET NOT NULL;

-- CreateTable
CREATE TABLE "graph_data" (
"id" SERIAL,
    "simulation_id" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "edges" (
"id" SERIAL,
    "simulation_id" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "graph_data_simulation_id_unique" ON "graph_data"("simulation_id");

-- CreateIndex
CREATE UNIQUE INDEX "edges_simulation_id_unique" ON "edges"("simulation_id");

-- AddForeignKey
ALTER TABLE "graph_data" ADD FOREIGN KEY("simulation_id")REFERENCES "simulations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "edges" ADD FOREIGN KEY("simulation_id")REFERENCES "simulations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "simulations" ADD FOREIGN KEY("team_id")REFERENCES "teams"("id") ON DELETE CASCADE ON UPDATE CASCADE;
