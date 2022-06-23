-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('PUBLIC', 'BETA');

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "type" "UserType" NOT NULL DEFAULT E'PUBLIC';
