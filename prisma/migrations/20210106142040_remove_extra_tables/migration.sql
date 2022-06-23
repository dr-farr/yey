/*
  Warnings:

  - You are about to drop the `edges` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `graph_data` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "edges" DROP CONSTRAINT "edges_simulation_id_fkey";

-- DropForeignKey
ALTER TABLE "graph_data" DROP CONSTRAINT "graph_data_simulation_id_fkey";

-- DropTable
DROP TABLE "edges";

-- DropTable
DROP TABLE "graph_data";
