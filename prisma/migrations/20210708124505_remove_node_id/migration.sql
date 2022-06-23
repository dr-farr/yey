/*
  Warnings:

  - You are about to drop the column `node_id` on the `funnel_nodes` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[funnel_id,name]` on the table `funnel_nodes` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "funnel_nodes.funnel_id_node_id_unique";

-- AlterTable
ALTER TABLE "funnel_nodes" DROP COLUMN "node_id";

-- CreateIndex
CREATE UNIQUE INDEX "funnel_nodes.funnel_id_name_unique" ON "funnel_nodes"("funnel_id", "name");
