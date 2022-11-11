/*
  Warnings:

  - You are about to drop the `flavors` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `flavors` DROP FOREIGN KEY `flavors_subCategoryId_fkey`;

-- DropForeignKey
ALTER TABLE `products` DROP FOREIGN KEY `products_flavorId_fkey`;

-- DropTable
DROP TABLE `flavors`;

-- CreateTable
CREATE TABLE `flavor_category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `subCategoryId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `flavor_category` ADD CONSTRAINT `flavor_category_subCategoryId_fkey` FOREIGN KEY (`subCategoryId`) REFERENCES `sub_category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_flavorId_fkey` FOREIGN KEY (`flavorId`) REFERENCES `flavor_category`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
