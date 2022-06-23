/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[team_id,name]` on the table `tags`. If there are existing duplicate values, the migration will fail.
  - Added the required column `team_id` to the `tags` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tags" ADD COLUMN     "team_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "tags.team_id_name_unique" ON "tags"("team_id", "name");

-- AddForeignKey
ALTER TABLE "tags" ADD FOREIGN KEY("team_id")REFERENCES "teams"("id") ON DELETE CASCADE ON UPDATE CASCADE;
