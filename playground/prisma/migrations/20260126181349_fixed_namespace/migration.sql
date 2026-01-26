/*
  Warnings:

  - Added the required column `namespace` to the `Namespace` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Namespace" ADD COLUMN     "namespace" TEXT NOT NULL;
