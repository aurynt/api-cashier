import { z } from "zod";

export const itemsValidation=z.object({
    nama:z.string(),
    harga:z.number(),
    stok:z.number()
})