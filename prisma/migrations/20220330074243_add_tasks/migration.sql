-- CreateEnum
CREATE TYPE "TaskType" AS ENUM ('CAMPAIGN', 'CAMPAIGN_GROUP');

-- CreateTable
CREATE TABLE "tasks" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "content" TEXT NOT NULL,
    "type" "TaskType" NOT NULL,
    "user_id" TEXT NOT NULL,
    "campaign_id" TEXT,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "campaign_group_id" TEXT,
    "team_id" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tasks" ADD FOREIGN KEY ("campaign_id") REFERENCES "campaigns"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tasks" ADD FOREIGN KEY ("campaign_group_id") REFERENCES "campaign_groups"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tasks" ADD FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tasks" ADD FOREIGN KEY ("team_id") REFERENCES "teams"("id") ON DELETE CASCADE ON UPDATE CASCADE;
