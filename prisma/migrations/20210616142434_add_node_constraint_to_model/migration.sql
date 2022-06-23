/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[funnel_id,funnel_node_id]` on the table `connectors`. If there are existing duplicate values, the migration will fail.

*/
-- AlterTable
ALTER TABLE "connectors" ADD COLUMN     "funnel_node_id" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "connectors.funnel_id_funnel_node_id_unique" ON "connectors"("funnel_id", "funnel_node_id");

-- AddForeignKey
ALTER TABLE "connectors" ADD FOREIGN KEY ("funnel_node_id") REFERENCES "funnel_nodes"("id") ON DELETE SET NULL ON UPDATE CASCADE;
