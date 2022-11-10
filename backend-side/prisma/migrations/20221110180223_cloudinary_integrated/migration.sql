/*
  Warnings:

  - Added the required column `image_id` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image_url` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `products` ADD COLUMN `image_id` VARCHAR(191) NOT NULL,
    ADD COLUMN `image_url` VARCHAR(191) NOT NULL;
