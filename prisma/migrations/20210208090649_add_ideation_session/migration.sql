-- AlterTable
ALTER TABLE "ideas" ADD COLUMN     "idea_session_id" TEXT;

-- CreateTable
CREATE TABLE "idea_sessions" (
    "id" TEXT NOT NULL,
    "requested_by_id" TEXT NOT NULL,
    "user_id" TEXT,
    "team_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "numberOfIdeas" INTEGER NOT NULL,
    "tag_id" TEXT,
    "funnel_node_id" TEXT,
    "completed" BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "idea_sessions" ADD FOREIGN KEY("requested_by_id")REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "idea_sessions" ADD FOREIGN KEY("team_id")REFERENCES "teams"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "idea_sessions" ADD FOREIGN KEY("tag_id")REFERENCES "tags"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "idea_sessions" ADD FOREIGN KEY("funnel_node_id")REFERENCES "funnel_nodes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ideas" ADD FOREIGN KEY("idea_session_id")REFERENCES "idea_sessions"("id") ON DELETE SET NULL ON UPDATE CASCADE;
