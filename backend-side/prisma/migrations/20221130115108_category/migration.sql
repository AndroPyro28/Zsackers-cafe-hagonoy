/*
  Warnings:

  - You are about to drop the `set_category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `sub_category` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `bundle_id` on table `bundle_products` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `bundle_products` DROP FOREIGN KEY `bundle_products_bundle_id_fkey`;

-- DropForeignKey
ALTER TABLE `bundles` DROP FOREIGN KEY `bundles_setcategoryId_fkey`;

-- DropForeignKey
ALTER TABLE `bundles` DROP FOREIGN KEY `bundles_subcategoryId_fkey`;

-- DropForeignKey
ALTER TABLE `products` DROP FOREIGN KEY `products_setcategoryId_fkey`;

-- DropForeignKey
ALTER TABLE `products` DROP FOREIGN KEY `products_subcategoryId_fkey`;

-- DropForeignKey
ALTER TABLE `set_category` DROP FOREIGN KEY `set_category_subcategoryId_fkey`;

-- DropForeignKey
ALTER TABLE `sub_category` DROP FOREIGN KEY `sub_category_categoryId_fkey`;

-- AlterTable
ALTER TABLE `bundle_products` MODIFY `bundle_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `category` ADD COLUMN `premium` BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE `set_category`;

-- DropTable
DROP TABLE `sub_category`;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_subcategoryId_fkey` FOREIGN KEY (`subcategoryId`) REFERENCES `category`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_setcategoryId_fkey` FOREIGN KEY (`setcategoryId`) REFERENCES `category`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `bundles` ADD CONSTRAINT `bundles_subcategoryId_fkey` FOREIGN KEY (`subcategoryId`) REFERENCES `category`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `bundles` ADD CONSTRAINT `bundles_setcategoryId_fkey` FOREIGN KEY (`setcategoryId`) REFERENCES `category`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `bundle_products` ADD CONSTRAINT `bundle_products_bundle_id_fkey` FOREIGN KEY (`bundle_id`) REFERENCES `bundles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
