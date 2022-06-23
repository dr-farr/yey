-- AlterEnum
ALTER TYPE "Onboards" ADD VALUE 'GOALTWO';

-- CreateIndex
CREATE INDEX "funnelDataPointValueNodeId" ON "funnel_datapoint_value"("node_id");

-- AlterIndex
ALTER INDEX "funnel_datapoint_value_temp.node_id_date_unique" RENAME TO "funnel_datapoint_value.node_id_date_unique";
