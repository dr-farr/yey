-- AlterTable
CREATE SEQUENCE "ideas_team_id_seq";
ALTER TABLE "ideas" ALTER COLUMN "summary" DROP DEFAULT,
ALTER COLUMN "team_id" SET DEFAULT nextval('ideas_team_id_seq'),
ALTER COLUMN "name" DROP DEFAULT;
ALTER SEQUENCE "ideas_team_id_seq" OWNED BY "public"."ideas"."team_id";
