import { prisma } from "../config/Prisma";
import type { User } from "../type";

export async function create(
  data: User<{
    hash: string;
    salt: string;
  }>
) {
  try {
    const res = await prisma.user.create({
      data: data,
    });
    return res;
  } catch (error) {
    return error;
  }
}

export async function update(data: User, id: string) {
  try {
    const res = await prisma.user.update({
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
    const res = await prisma.user.findMany({
      select: {
        name: true,
        username: true,
      },
    });
    return res;
  } catch (error) {
    return error;
  }
}

export async function remove(id: string) {
  try {
    const res = await prisma.user.delete({ where: { id: id } });
    return res;
  } catch (error) {
    return error;
  }
}

export async function find(id: string) {
  try {
    const res = await prisma.user.findUnique({
      where: { id: id },
    });
    return res;
  } catch (error) {
    return error;
  }
}
