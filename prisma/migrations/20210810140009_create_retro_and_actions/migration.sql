-- AlterEnum
ALTER TYPE "CommentType" ADD VALUE 'RETROSPECTIVE';

-- AlterTable
ALTER TABLE "comments" ADD COLUMN     "retrospectiveId" TEXT;

-- CreateTable
CREATE TABLE "retrospectives" (
    "id" TEXT NOT NULL,
    "team_id" TEXT NOT NULL,
    "start_of_retro_period" TIMESTAMP(3),
    "end_of_retro_period" TIMESTAMP(3),
    "milestone_date" TIMESTAMP(3) NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "active" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "complete" BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "retrospective_actions" (
    "id" TEXT NOT NULL,
    "team_id" TEXT NOT NULL,
    "owner_id" TEXT,
    "retrospective_id" TEXT NOT NULL,
    "item" TEXT NOT NULL,
    "complete" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "retrospectives.milestone_date_team_id_unique" ON "retrospectives"("milestone_date", "team_id");

-- AddForeignKey
ALTER TABLE "retrospectives" ADD FOREIGN KEY ("team_id") REFERENCES "teams"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "retrospective_actions" ADD FOREIGN KEY ("team_id") REFERENCES "teams"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "retrospective_actions" ADD FOREIGN KEY ("owner_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "retrospective_actions" ADD FOREIGN KEY ("retrospective_id") REFERENCES "retrospectives"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD FOREIGN KEY ("retrospectiveId") REFERENCES "retrospectives"("id") ON DELETE SET NULL ON UPDATE CASCADE;
