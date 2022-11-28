-- AlterTable
ALTER TABLE `products` ADD COLUMN `set_CategoryId` INTEGER NULL;

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
ALTER TABLE `set_category` ADD CONSTRAINT `set_category_subcategoryId_fkey` FOREIGN KEY (`subcategoryId`) REFERENCES `sub_category`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_set_CategoryId_fkey` FOREIGN KEY (`set_CategoryId`) REFERENCES `set_category`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
