-- DropForeignKeyConstraint
ALTER TABLE "funnel_datapoint_value" DROP CONSTRAINT "funnel_datapoint_value_integrationId_fkey";

-- AddForeignKey
ALTER TABLE "funnel_datapoint_value" ADD FOREIGN KEY ("integrationId") REFERENCES "integration"("id") ON DELETE CASCADE ON UPDATE CASCADE;

