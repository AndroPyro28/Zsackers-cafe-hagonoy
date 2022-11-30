/*
  Warnings:

  - You are about to drop the column `cart_product_id` on the `cart_product_flavor` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `cart_product_flavor` DROP FOREIGN KEY `cart_product_flavor_cart_product_id_fkey`;

-- DropForeignKey
ALTER TABLE `cart_products` DROP FOREIGN KEY `cart_products_orderId_fkey`;

-- AlterTable
ALTER TABLE `cart_product_flavor` DROP COLUMN `cart_product_id`;

-- AlterTable
ALTER TABLE `cart_products` MODIFY `orderId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `cart_products` ADD CONSTRAINT `cart_products_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `order_details`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
