/*
  Warnings:

  - You are about to drop the column `fone` on the `patients` table. All the data in the column will be lost.
  - You are about to drop the column `road` on the `patients` table. All the data in the column will be lost.
  - You are about to drop the `archives` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `schedules` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `address` to the `patients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `patients` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "archives" DROP CONSTRAINT "archives_patient_id_fkey";

-- DropForeignKey
ALTER TABLE "schedules" DROP CONSTRAINT "schedules_patient_id_fkey";

-- DropForeignKey
ALTER TABLE "schedules" DROP CONSTRAINT "schedules_user_id_fkey";

-- AlterTable
ALTER TABLE "patients" DROP COLUMN "fone",
DROP COLUMN "road",
ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "phone" INTEGER NOT NULL;

-- DropTable
DROP TABLE "archives";

-- DropTable
DROP TABLE "schedules";

-- CreateTable
CREATE TABLE "files" (
    "id" UUID NOT NULL,
    "patient_id" UUID NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "files_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "appoitments" (
    "id" UUID NOT NULL,
    "patient_id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "time" INTEGER NOT NULL,

    CONSTRAINT "appoitments_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "files" ADD CONSTRAINT "files_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "patients"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "appoitments" ADD CONSTRAINT "appoitments_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "patients"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "appoitments" ADD CONSTRAINT "appoitments_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
