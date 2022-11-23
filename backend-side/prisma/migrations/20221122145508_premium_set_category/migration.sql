/*
  Warnings:

  - You are about to alter the column `quantity` on the `cart_products` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `totalAmount` on the `order_details` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.

*/
-- AlterTable
ALTER TABLE `cart_products` MODIFY `quantity` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `order_details` MODIFY `totalAmount` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `set_category` ADD COLUMN `premium` BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE `cart_product_flavor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cart_product_id` INTEGER NOT NULL,
    `productId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `cart_product_flavor` ADD CONSTRAINT `cart_product_flavor_cart_product_id_fkey` FOREIGN KEY (`cart_product_id`) REFERENCES `cart_products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cart_product_flavor` ADD CONSTRAINT `cart_product_flavor_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
