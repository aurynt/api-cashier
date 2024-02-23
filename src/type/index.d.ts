export type Item = {
  nama: string;
  harga: Decimal;
  stok: number;
};

export type DetailPenjualan = {
  produkId: string;
  penjualanId: string;
  subTotal: Decimal;
  jumlah: number;
};

export type Customer = {
  nama: string;
  alamat: string;
  telp: string;
};

export type Sale = {
  total: Decimal;
  pelangganId: string;
};

export type User<T = {}> = {
  name: string;
  username: string;
} & T;
