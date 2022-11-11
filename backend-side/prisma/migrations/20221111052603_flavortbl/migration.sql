-- AlterTable
ALTER TABLE `products` ADD COLUMN `flavorId` INTEGER NULL;

-- CreateTable
CREATE TABLE `flavor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `subCategoryId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `flavor` ADD CONSTRAINT `flavor_subCategoryId_fkey` FOREIGN KEY (`subCategoryId`) REFERENCES `sub_category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_flavorId_fkey` FOREIGN KEY (`flavorId`) REFERENCES `flavor`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
