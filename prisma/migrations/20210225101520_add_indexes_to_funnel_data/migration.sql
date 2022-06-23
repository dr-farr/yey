/*
  Warnings:

  - You are about to alter the column `result_high` on the `campaigns` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `result_low` on the `campaigns` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `budget_high` on the `campaigns` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `budget_low` on the `campaigns` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `return` on the `campaigns` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `result_actual` on the `campaigns` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `budget_actual` on the `campaigns` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `roi` on the `campaigns` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `value` on the `funnel_datapoint_value` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `ingress` on the `simulations` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.

*/
-- AlterTable
ALTER TABLE "campaigns" ALTER COLUMN "result_high" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "result_low" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "budget_high" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "budget_low" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "return" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "result_actual" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "budget_actual" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "roi" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "funnel_datapoint_value" ALTER COLUMN "value" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "simulations" ALTER COLUMN "ingress" SET DATA TYPE DOUBLE PRECISION;

-- CreateIndex
CREATE INDEX "funnelDataPointValuePointId" ON "funnel_datapoint_value"("data_point_id");

-- CreateIndex
CREATE INDEX "funnelDataPointValueNodeId" ON "funnel_datapoint_value"("node_id");

-- CreateIndex
CREATE INDEX "funnelDataPointFunnelId" ON "funnel_datapoints"("funnel_id");

-- CreateIndex
CREATE INDEX "funnelEdgeFunnelId" ON "funnel_edges"("funnel_id");

-- CreateIndex
CREATE INDEX "funnelEdgeFromNodeId" ON "funnel_edges"("from_node_id");

-- CreateIndex
CREATE INDEX "funnelEdgeToNodeId" ON "funnel_edges"("to_node_id");

-- CreateIndex
CREATE INDEX "funnelNodeFunnelId" ON "funnel_nodes"("funnel_id");
