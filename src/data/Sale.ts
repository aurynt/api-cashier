import { prisma } from "../config/Prisma";
import type { Sale } from "../type";
import { DateTime } from "luxon";
export async function create(data: Sale) {
  try {
    const res = await prisma.penjualan.create({
      data: { tanggal: DateTime.local().toISO(), ...data },
    });
    return res;
  } catch (error) {
    return error;
  }
}

export async function update(data: Sale, id: string) {
  try {
    const res = await prisma.penjualan.update({
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
    const res = await prisma.penjualan.findMany();
    return res;
  } catch (error) {
    return error;
  }
}

export async function remove(id: string) {
  try {
    const res = await prisma.penjualan.delete({ where: { id: id } });
    return res;
  } catch (error) {
    return error;
  }
}

export async function find(id: string) {
  try {
    const res = await prisma.penjualan.findUnique({ where: { id: id } });
    return res;
  } catch (error) {
    return error;
  }
}
