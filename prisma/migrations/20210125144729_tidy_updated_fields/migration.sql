/*
  Warnings:

  - You are about to drop the column `edges` on the `simulations` table. All the data in the column will be lost.
  - You are about to drop the column `ingress` on the `simulations` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "accounts" ALTER COLUMN "updated_at" DROP DEFAULT;

-- AlterTable
ALTER TABLE "integrations" ALTER COLUMN "updated_at" DROP DEFAULT;

-- AlterTable
ALTER TABLE "sessions" ALTER COLUMN "updated_at" DROP DEFAULT;

-- AlterTable
ALTER TABLE "simulations" DROP COLUMN "edges",
DROP COLUMN "ingress";

-- AlterTable
ALTER TABLE "verification_requests" ALTER COLUMN "updated_at" DROP DEFAULT;
