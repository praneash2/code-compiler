-- CreateTable
CREATE TABLE "Languages" (
    "id" SERIAL NOT NULL,
    "languageName" VARCHAR(255) NOT NULL,
    "dockerCommand" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Languages_pkey" PRIMARY KEY ("id")
);
