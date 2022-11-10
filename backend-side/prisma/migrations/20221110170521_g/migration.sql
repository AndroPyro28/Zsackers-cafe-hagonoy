/*
  Warnings:

  - You are about to drop the column `price` on the `sub_category` table. All the data in the column will be lost.
  - Added the required column `price` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `products` ADD COLUMN `price` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `sub_category` DROP COLUMN `price`;
