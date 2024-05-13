-- DropForeignKey
ALTER TABLE "appoitments" DROP CONSTRAINT "appoitments_user_id_fkey";

-- CreateTable
CREATE TABLE "psychologists" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "psychologists_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "appoitments" ADD CONSTRAINT "appoitments_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "psychologists"("id") ON DELETE CASCADE ON UPDATE CASCADE;
