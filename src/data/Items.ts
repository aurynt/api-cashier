import { prisma } from "../config/Prisma";
import type { Item } from "../type";

export async function create(data: Item) {
  try {
    const res = await prisma.produk.create({
      data: data,
    });
    return res;
  } catch (error) {
    return error;
  }
}

export async function update(data: Item, id: string) {
  try {
    const res = await prisma.produk.update({
      data: data,
      where: {
        id: id,
      },
    });
    return res;
  } catch (error) {
    return error;
  }
}

export async function all() {
  try {
    const res = await prisma.produk.findMany();
    return res;
  } catch (error) {
    return error;
  }
}

export async function remove(id: string) {
  try {
    const res = await prisma.produk.delete({ where: { id: id } });
    return res;
  } catch (error) {
    return error;
  }
}

export async function find(id: string) {
  try {
    const res = await prisma.produk.findUnique({ where: { id: id } });
    return res;
  } catch (error) {
    return error;
  }
}
