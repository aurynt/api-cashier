import { z } from "zod";

export const itemsValidation=z.object({
    nama:z.string(),
    harga:z.number(),
    stok:z.number()
})
export const usersValidation=z.object({
    name:z.string(),
    username:z.string(),
    password:z.string()
})
export const saleValidation=z.object({
    total:z.number(),
    pelangganId:z.string()
})