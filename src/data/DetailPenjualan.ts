import { prisma } from "../config/Prisma";
import type { DetailPenjualan } from "../type";

export async function create(
  data: DetailPenjualan
) {
  try {
    const res = await prisma.detailPenjualan.create({
      data: data,
    });
    return res;
  } catch (error) {
    return error;
  }
}

export async function update(data: DetailPenjualan, id: string) {
  try {
    const res = await prisma.detailPenjualan.update({
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
    const res = await prisma.detailPenjualan.findMany({
      include:{
        produk:true
      }
    });
    return res;
  } catch (error) {
    return error;
  }
}

export async function remove(id: string) {
  try {
    const res = await prisma.detailPenjualan.delete({ where: { id: id } });
    return res;
  } catch (error) {
    return error;
  }
}

export async function find(id: string) {
  try {
    const res = await prisma.detailPenjualan.findUnique({
      where: { id: id },
      include:{
        produk:true
      }
    });
    return res;
  } catch (error) {
    return error;
  }
}
