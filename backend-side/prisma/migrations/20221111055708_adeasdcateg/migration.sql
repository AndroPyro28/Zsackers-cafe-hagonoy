/*
  Warnings:

  - You are about to drop the column `subCategoryId` on the `flavor_category` table. All the data in the column will be lost.
  - Added the required column `subcategoryId` to the `flavor_category` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `flavor_category` DROP FOREIGN KEY `flavor_category_subCategoryId_fkey`;

-- AlterTable
ALTER TABLE `flavor_category` DROP COLUMN `subCategoryId`,
    ADD COLUMN `subcategoryId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `flavor_category` ADD CONSTRAINT `flavor_category_subcategoryId_fkey` FOREIGN KEY (`subcategoryId`) REFERENCES `sub_category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
