-- AlterTable
ALTER TABLE "ideas" ADD COLUMN     "funnel_node_id" TEXT;

-- AddForeignKey
ALTER TABLE "ideas" ADD FOREIGN KEY("funnel_node_id")REFERENCES "funnel_nodes"("id") ON DELETE SET NULL ON UPDATE CASCADE;
