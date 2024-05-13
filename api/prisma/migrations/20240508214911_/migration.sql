/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `psychologists` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "psychologists_name_key" ON "psychologists"("name");
