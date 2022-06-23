/*
  Warnings:

  - You are about to drop the column `empty` on the `funnel_edges` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "funnel_edges" DROP COLUMN "empty",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "notes" (
"id" SERIAL,
    "user_id" INTEGER NOT NULL,
    "message" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "note_ideas" (
    "note_id" INTEGER NOT NULL,
    "idea_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tagId" INTEGER,

    PRIMARY KEY ("note_id","idea_id")
);

-- CreateTable
CREATE TABLE "note_campaigns" (
    "note_id" INTEGER NOT NULL,
    "campaign_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tagId" INTEGER,

    PRIMARY KEY ("note_id","campaign_id")
);

-- AddForeignKey
ALTER TABLE "notes" ADD FOREIGN KEY("user_id")REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "note_ideas" ADD FOREIGN KEY("note_id")REFERENCES "notes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "note_ideas" ADD FOREIGN KEY("idea_id")REFERENCES "ideas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "note_ideas" ADD FOREIGN KEY("tagId")REFERENCES "tags"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "note_campaigns" ADD FOREIGN KEY("note_id")REFERENCES "notes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "note_campaigns" ADD FOREIGN KEY("campaign_id")REFERENCES "campaigns"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "note_campaigns" ADD FOREIGN KEY("tagId")REFERENCES "tags"("id") ON DELETE SET NULL ON UPDATE CASCADE;
