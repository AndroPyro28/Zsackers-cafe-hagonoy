/*
  Warnings:

  - You are about to drop the column `productPrice` on the `sub_category` table. All the data in the column will be lost.
  - Added the required column `price` to the `sub_category` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `sub_category` DROP COLUMN `productPrice`,
    ADD COLUMN `price` BIGINT NOT NULL;
