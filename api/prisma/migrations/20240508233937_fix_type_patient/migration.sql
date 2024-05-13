/*
  Warnings:

  - Changed the type of `zipCode` on the `patients` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `phone` on the `patients` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "patients" DROP COLUMN "zipCode",
ADD COLUMN     "zipCode" INTEGER NOT NULL,
DROP COLUMN "phone",
ADD COLUMN     "phone" BIGINT NOT NULL;
