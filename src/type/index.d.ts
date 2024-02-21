export type Item = {
  nama: string;
  harga: Decimal;
  stok: number;
};

export type User<T = {}> = {
  name: string;
  username: string;
} & T;
