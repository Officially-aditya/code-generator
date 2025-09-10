/*
  Warnings:

  - Added the required column `role` to the `Message` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `content` on the `Message` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "public"."Message" ADD COLUMN     "role" "public"."MessageRole" NOT NULL,
DROP COLUMN "content",
ADD COLUMN     "content" TEXT NOT NULL;
