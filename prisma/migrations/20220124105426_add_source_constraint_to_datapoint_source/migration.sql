/*
  Warnings:

  - A unique constraint covering the columns `[node_id,date,source]` on the table `funnel_datapoint_value` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "funnel_datapoint_value.node_id_date_unique";

-- CreateIndex
CREATE UNIQUE INDEX "funnel_datapoint_value.node_id_date_source_unique" ON "funnel_datapoint_value"("node_id", "date", "source");
