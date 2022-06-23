-- CreateTable
CREATE TABLE "funnel_datapoint_value_temp" (
    "id" TEXT NOT NULL,
    "funnel_id" TEXT NOT NULL,
    "node_id" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "value" DECIMAL(65,30) NOT NULL,

    PRIMARY KEY ("id")
);

-- AddUniqueIndexs
CREATE UNIQUE INDEX "funnel_datapoint_value_temp.node_id_date_unique" ON "funnel_datapoint_value_temp"("node_id", "date");

-- Execute function
SELECT loop_test();

-- AddForeignKey
ALTER TABLE "funnel_datapoint_value_temp" ADD FOREIGN KEY ("funnel_id") REFERENCES "funnels"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "funnel_datapoint_value_temp" ADD FOREIGN KEY ("node_id") REFERENCES "funnel_nodes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- DROP TABLE
DROP TABLE funnel_datapoints CASCADE;

-- DROP TABLE
DROP TABLE IF EXISTS funnel_datapoint_value;

-- CHANGE TABLE NAME
ALTER TABLE IF EXISTS funnel_datapoint_value_temp
  RENAME TO funnel_datapoint_value;
