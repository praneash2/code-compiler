/*
  Warnings:

  - A unique constraint covering the columns `[languageName]` on the table `Languages` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Languages_languageName_key" ON "Languages"("languageName");
