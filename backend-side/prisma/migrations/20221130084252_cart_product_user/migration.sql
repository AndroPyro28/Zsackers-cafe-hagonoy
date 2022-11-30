/*
  Warnings:

  - Added the required column `userId` to the `cart_products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `cart_products` DROP FOREIGN KEY `cart_products_orderId_fkey`;

-- DropForeignKey
ALTER TABLE `cart_products` DROP FOREIGN KEY `cart_products_productId_fkey`;

-- AlterTable
ALTER TABLE `cart_products` ADD COLUMN `userId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `cart_products` ADD CONSTRAINT `cart_products_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `products`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cart_products` ADD CONSTRAINT `cart_products_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `order_details`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cart_products` ADD CONSTRAINT `cart_products_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
