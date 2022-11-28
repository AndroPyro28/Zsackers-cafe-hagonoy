-- DropForeignKey
ALTER TABLE `products` DROP FOREIGN KEY `products_productId_fkey`;

-- CreateTable
CREATE TABLE `bundles` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `product_bundle_id` INTEGER NOT NULL,
    `product_variant_id` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `bundles` ADD CONSTRAINT `bundles_product_bundle_id_fkey` FOREIGN KEY (`product_bundle_id`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `bundles` ADD CONSTRAINT `bundles_product_variant_id_fkey` FOREIGN KEY (`product_variant_id`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
