/*
  Warnings:

  - You are about to drop the column `product_bundle_id` on the `bundles` table. All the data in the column will be lost.
  - You are about to drop the column `product_variant_id` on the `bundles` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `products` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `bundles` DROP FOREIGN KEY `bundles_product_bundle_id_fkey`;

-- DropForeignKey
ALTER TABLE `bundles` DROP FOREIGN KEY `bundles_product_variant_id_fkey`;

-- AlterTable
ALTER TABLE `bundles` DROP COLUMN `product_bundle_id`,
    DROP COLUMN `product_variant_id`,
    ADD COLUMN `bundle_product_id` INTEGER NULL,
    ADD COLUMN `categoryId` INTEGER NULL,
    ADD COLUMN `setcategoryId` INTEGER NULL,
    ADD COLUMN `subcategoryId` INTEGER NULL;

-- AlterTable
ALTER TABLE `products` DROP COLUMN `productId`;

-- CreateTable
CREATE TABLE `bundle_products` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `product_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `bundles` ADD CONSTRAINT `bundles_bundle_product_id_fkey` FOREIGN KEY (`bundle_product_id`) REFERENCES `bundle_products`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `bundles` ADD CONSTRAINT `bundles_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `category`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `bundles` ADD CONSTRAINT `bundles_subcategoryId_fkey` FOREIGN KEY (`subcategoryId`) REFERENCES `sub_category`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `bundles` ADD CONSTRAINT `bundles_setcategoryId_fkey` FOREIGN KEY (`setcategoryId`) REFERENCES `set_category`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `bundle_products` ADD CONSTRAINT `bundle_products_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
