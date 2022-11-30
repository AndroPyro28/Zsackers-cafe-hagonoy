/*
  Warnings:

  - You are about to drop the column `premium` on the `category` table. All the data in the column will be lost.

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

-- AlterTable
ALTER TABLE `bundle_products` MODIFY `bundle_id` INTEGER NULL;

-- AlterTable
ALTER TABLE `category` DROP COLUMN `premium`;

-- CreateTable
CREATE TABLE `sub_category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `categoryId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `set_category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `premium` BOOLEAN NOT NULL DEFAULT false,
    `subcategoryId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `sub_category` ADD CONSTRAINT `sub_category_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `category`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `set_category` ADD CONSTRAINT `set_category_subcategoryId_fkey` FOREIGN KEY (`subcategoryId`) REFERENCES `sub_category`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_subcategoryId_fkey` FOREIGN KEY (`subcategoryId`) REFERENCES `sub_category`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_setcategoryId_fkey` FOREIGN KEY (`setcategoryId`) REFERENCES `set_category`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `bundles` ADD CONSTRAINT `bundles_subcategoryId_fkey` FOREIGN KEY (`subcategoryId`) REFERENCES `sub_category`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `bundles` ADD CONSTRAINT `bundles_setcategoryId_fkey` FOREIGN KEY (`setcategoryId`) REFERENCES `set_category`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `bundle_products` ADD CONSTRAINT `bundle_products_bundle_id_fkey` FOREIGN KEY (`bundle_id`) REFERENCES `bundles`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
