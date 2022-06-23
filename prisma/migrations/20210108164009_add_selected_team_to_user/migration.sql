-- AlterTable
ALTER TABLE "users" ADD COLUMN     "selected_team_id" INTEGER;

-- AddForeignKey
ALTER TABLE "users" ADD FOREIGN KEY("selected_team_id")REFERENCES "teams"("id") ON DELETE SET NULL ON UPDATE CASCADE;
