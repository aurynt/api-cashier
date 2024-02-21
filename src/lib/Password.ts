import { find } from "@/data/User";
import { User } from "@/type";
import { pbkdf2Sync, randomBytes } from "crypto";

export const hashPassword = (password: string) => {
  const salt = randomBytes(64).toString("base64");
  const hash = pbkdf2Sync(password, salt, 100000, 64, "sha512").toString(
    "base64"
  );
  return { hash, salt };
};
export const verifyPassword = async (password: string, id: string) => {
  const user = (await find(id)) as User<{ salt: string; hash: string }>;

  const rehash = pbkdf2Sync(password, user.salt, 100000, 64, "sha512").toString(
    "base64"
  );
  const res = user.hash === rehash;
  return res;
};
