-- CreateEnum
CREATE TYPE "CommentType" AS ENUM ('IDEA', 'CAMPAIGN');

-- CreateTable
CREATE TABLE "comments" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "content" TEXT NOT NULL,
    "type" "CommentType" NOT NULL,
    "userId" TEXT NOT NULL,
    "campaignId" TEXT,
    "ideaId" TEXT,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "comments" ADD FOREIGN KEY ("campaignId") REFERENCES "campaigns"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD FOREIGN KEY ("ideaId") REFERENCES "ideas"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
