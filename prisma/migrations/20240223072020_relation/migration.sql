-- CreateTable
CREATE TABLE `detailPenjualan` (
    `id` VARCHAR(191) NOT NULL,
    `jumlah` INTEGER NOT NULL,
    `subTotal` DECIMAL(10, 2) NOT NULL,
    `produkId` VARCHAR(191) NOT NULL,
    `penjualanId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `detailPenjualan_produkId_key`(`produkId`),
    INDEX `detailPenjualan_penjualanId_fkey`(`penjualanId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pelanggan` (
    `id` VARCHAR(191) NOT NULL,
    `nama` VARCHAR(191) NOT NULL,
    `alamat` TEXT NOT NULL,
    `telp` VARCHAR(15) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `penjualan` (
    `id` VARCHAR(191) NOT NULL,
    `tanggal` TIMESTAMP NOT NULL,
    `total` DECIMAL(10, 2) NOT NULL,
    `pelangganId` VARCHAR(191) NOT NULL,

    INDEX `penjualan_pelangganId_fkey`(`pelangganId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `produk` (
    `id` VARCHAR(191) NOT NULL,
    `nama` VARCHAR(191) NOT NULL,
    `harga` DECIMAL(10, 2) NOT NULL,
    `stok` INTEGER NOT NULL,

    UNIQUE INDEX `produk_nama_key`(`nama`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `hash` VARCHAR(191) NOT NULL,
    `salt` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `user_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `detailPenjualan` ADD CONSTRAINT `detailPenjualan_penjualanId_fkey` FOREIGN KEY (`penjualanId`) REFERENCES `penjualan`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `detailPenjualan` ADD CONSTRAINT `detailPenjualan_produkId_fkey` FOREIGN KEY (`produkId`) REFERENCES `produk`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `penjualan` ADD CONSTRAINT `penjualan_pelangganId_fkey` FOREIGN KEY (`pelangganId`) REFERENCES `pelanggan`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
