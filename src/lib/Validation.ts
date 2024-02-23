import { z } from "zod";

export const itemsValidation=z.object({
    nama:z.string(),
    harga:z.number(),
    stok:z.number()
})
export const DPValidation=z.object({
    produkId:z.string(),
    penjualanId:z.string(),
    subTotal:z.number(),
    jumlah:z.number()
})
export const usersValidation=z.object({
    name:z.string(),
    username:z.string(),
    password:z.string()
})
export const customerValidation=z.object({
    nama:z.string(),
    alamat:z.string(),
    telp:z.string()
})
export const saleValidation=z.object({
    total:z.number(),
    pelangganId:z.string()
})