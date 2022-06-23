/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[data_point_id,node_id]` on the table `funnel_datapoint_value`. If there are existing duplicate values, the migration will fail.
  - The migration will add a unique constraint covering the columns `[funnel_id,dateFrom,dateTo]` on the table `funnel_datapoints`. If there are existing duplicate values, the migration will fail.
  - The migration will add a unique constraint covering the columns `[funnel_id,node_id]` on the table `funnel_nodes`. If there are existing duplicate values, the migration will fail.

*/
-- AlterTable
ALTER TABLE "funnel_nodes" ALTER COLUMN "node_id" DROP DEFAULT;

-- CreateIndex
CREATE UNIQUE INDEX "funnel_datapoint_value.data_point_id_node_id_unique" ON "funnel_datapoint_value"("data_point_id", "node_id");

-- CreateIndex
CREATE UNIQUE INDEX "funnel_datapoints.funnel_id_dateFrom_dateTo_unique" ON "funnel_datapoints"("funnel_id", "dateFrom", "dateTo");

-- CreateIndex
CREATE UNIQUE INDEX "funnel_nodes.funnel_id_node_id_unique" ON "funnel_nodes"("funnel_id", "node_id");
