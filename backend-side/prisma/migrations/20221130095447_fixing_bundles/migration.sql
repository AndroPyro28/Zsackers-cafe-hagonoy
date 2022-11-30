/*
  Warnings:

  - You are about to drop the column `bundle_product_id` on the `bundles` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `bundles` DROP FOREIGN KEY `bundles_bundle_product_id_fkey`;

-- AlterTable
ALTER TABLE `bundle_products` ADD COLUMN `bundle_id` INTEGER NULL;

-- AlterTable
ALTER TABLE `bundles` DROP COLUMN `bundle_product_id`,
    ADD COLUMN `image_id` VARCHAR(191) NULL,
    ADD COLUMN `image_url` VARCHAR(191) NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL DEFAULT '',
    ADD COLUMN `price` INTEGER NULL DEFAULT 0,
    ADD COLUMN `quantity` INTEGER NOT NULL DEFAULT 1;

-- AddForeignKey
ALTER TABLE `bundle_products` ADD CONSTRAINT `bundle_products_bundle_id_fkey` FOREIGN KEY (`bundle_id`) REFERENCES `bundles`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
