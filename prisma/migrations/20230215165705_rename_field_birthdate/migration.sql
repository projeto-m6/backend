/*
  Warnings:

  - You are about to drop the column `bithdate` on the `User` table. All the data in the column will be lost.
  - Added the required column `birthdate` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "bithdate",
ADD COLUMN     "birthdate" TEXT NOT NULL;
