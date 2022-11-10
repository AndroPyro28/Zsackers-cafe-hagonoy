/*
  Warnings:

  - You are about to drop the column `productPrice` on the `products` table. All the data in the column will be lost.
  - Added the required column `productPrice` to the `sub_category` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `products` DROP COLUMN `productPrice`;

-- AlterTable
ALTER TABLE `sub_category` ADD COLUMN `productPrice` BIGINT NOT NULL;
