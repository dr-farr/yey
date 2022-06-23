-- CreateEnum
CREATE TYPE "IntegrationDefaultType" AS ENUM ('ACCOUNT', 'RESULTMAP');

-- CreateTable
CREATE TABLE "integration_default" (
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "account_id" TEXT NOT NULL,
    "owner_id" TEXT NOT NULL,
    "team_id" TEXT NOT NULL,
    "type" "IntegrationDefaultType" NOT NULL,
    "config" JSONB NOT NULL,

    PRIMARY KEY ("team_id","account_id","type")
);

-- AddForeignKey
ALTER TABLE "integration_default" ADD FOREIGN KEY ("account_id") REFERENCES "accounts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "integration_default" ADD FOREIGN KEY ("owner_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "integration_default" ADD FOREIGN KEY ("team_id") REFERENCES "teams"("id") ON DELETE CASCADE ON UPDATE CASCADE;
