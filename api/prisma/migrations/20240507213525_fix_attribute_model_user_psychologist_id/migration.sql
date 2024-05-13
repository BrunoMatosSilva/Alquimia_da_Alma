/*
  Warnings:

  - You are about to drop the column `user_id` on the `appoitments` table. All the data in the column will be lost.
  - Added the required column `psychologist_id` to the `appoitments` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "appoitments" DROP CONSTRAINT "appoitments_user_id_fkey";

-- AlterTable
ALTER TABLE "appoitments" DROP COLUMN "user_id",
ADD COLUMN     "psychologist_id" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "appoitments" ADD CONSTRAINT "appoitments_psychologist_id_fkey" FOREIGN KEY ("psychologist_id") REFERENCES "psychologists"("id") ON DELETE CASCADE ON UPDATE CASCADE;
