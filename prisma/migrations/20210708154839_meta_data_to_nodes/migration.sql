-- AlterTable
ALTER TABLE "funnel_nodes" ADD COLUMN     "isRevenue" BOOLEAN;

-- AlterTable
ALTER TABLE "goal_data_points" ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
