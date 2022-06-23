/*
  Warnings:

  - You are about to drop the column `integration` on the `funnel_datapoint_value` table. All the data in the column will be lost.
  - You are about to drop the column `providerIntegration` on the `goal_data_point_values` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "connectors" ADD COLUMN     "funnel_id" TEXT;

-- AlterTable
ALTER TABLE "funnel_datapoint_value" DROP COLUMN "integration",
ADD COLUMN     "connector_id" TEXT;

-- AlterTable
ALTER TABLE "goal_data_point_values" DROP COLUMN "providerIntegration",
ADD COLUMN     "connector_id" TEXT;

-- AddForeignKey
ALTER TABLE "connectors" ADD FOREIGN KEY ("funnel_id") REFERENCES "funnels"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "funnel_datapoint_value" ADD FOREIGN KEY ("connector_id") REFERENCES "connectors"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "goal_data_point_values" ADD FOREIGN KEY ("connector_id") REFERENCES "connectors"("id") ON DELETE SET NULL ON UPDATE CASCADE;
