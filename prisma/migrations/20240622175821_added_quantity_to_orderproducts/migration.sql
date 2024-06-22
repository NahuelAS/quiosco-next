/*
  Warnings:

  - Added the required column `quantity` to the `OrderProdutcs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OrderProdutcs" ADD COLUMN     "quantity" INTEGER NOT NULL;
