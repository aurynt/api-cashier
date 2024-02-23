import { prisma } from "../config/Prisma";
import type { Customer } from "../type";

export async function create(
  data: Customer
) {
  try {
    const res = await prisma.pelanggan.create({
      data: data,
    });
    return res;
  } catch (error) {
    return error;
  }
}

export async function update(data: Customer, id: string) {
  try {
    const res = await prisma.pelanggan.update({
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
    const res = await prisma.pelanggan.findMany();
    return res;
  } catch (error) {
    return error;
  }
}

export async function remove(id: string) {
  try {
    const res = await prisma.pelanggan.delete({ where: { id: id } });
    return res;
  } catch (error) {
    return error;
  }
}

export async function find(id: string) {
  try {
    const res = await prisma.pelanggan.findUnique({
      where: { id: id },
    });
    return res;
  } catch (error) {
    return error;
  }
}
