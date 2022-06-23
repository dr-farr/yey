/*
  Warnings:

  - You are about to drop the column `summary` on the `campaigns` table. All the data in the column will be lost.
  - You are about to drop the column `summary` on the `ideas` table. All the data in the column will be lost.
  - You are about to drop the `note_campaigns` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `note_ideas` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `notes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "note_campaigns" DROP CONSTRAINT "note_campaigns_campaign_id_fkey";

-- DropForeignKey
ALTER TABLE "note_campaigns" DROP CONSTRAINT "note_campaigns_note_id_fkey";

-- DropForeignKey
ALTER TABLE "note_campaigns" DROP CONSTRAINT "note_campaigns_tagId_fkey";

-- DropForeignKey
ALTER TABLE "note_ideas" DROP CONSTRAINT "note_ideas_idea_id_fkey";

-- DropForeignKey
ALTER TABLE "note_ideas" DROP CONSTRAINT "note_ideas_note_id_fkey";

-- DropForeignKey
ALTER TABLE "note_ideas" DROP CONSTRAINT "note_ideas_tagId_fkey";

-- DropForeignKey
ALTER TABLE "notes" DROP CONSTRAINT "notes_user_id_fkey";

-- AlterTable
ALTER TABLE "campaigns" DROP COLUMN "summary",
ADD COLUMN     "note" TEXT NOT NULL DEFAULT E'';

-- AlterTable
ALTER TABLE "ideas" DROP COLUMN "summary",
ADD COLUMN     "note" TEXT NOT NULL DEFAULT E'';

-- DropTable
DROP TABLE "note_campaigns";

-- DropTable
DROP TABLE "note_ideas";

-- DropTable
DROP TABLE "notes";
