/*
  Warnings:

  - You are about to drop the column `set_CategoryId` on the `products` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `products` DROP FOREIGN KEY `products_set_CategoryId_fkey`;

-- AlterTable
ALTER TABLE `products` DROP COLUMN `set_CategoryId`,
    ADD COLUMN `setcategoryId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_setcategoryId_fkey` FOREIGN KEY (`setcategoryId`) REFERENCES `set_category`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
