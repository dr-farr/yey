-- AlterTable
ALTER TABLE "ideas" ALTER COLUMN "summary" SET DEFAULT E'',
ALTER COLUMN "team_id" DROP DEFAULT;
DROP SEQUENCE "ideas_team_id_seq";
