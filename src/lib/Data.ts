import { User } from "@/type";
import { usersValidation } from "./Validation";
import { pbkdf2Sync, randomBytes } from "crypto";

export const rewriteUser = (data: User<{ password?: string }>) => {
  try {
    usersValidation.parse(data);
    const salt = randomBytes(64).toString("base64");
    const hash = pbkdf2Sync(
      data.password!,
      salt,
      100000,
      64,
      "sha512"
    ).toString("base64");
    delete data.password;
    return { ...data, hash, salt }
  } catch (error) {
    throw error;
  }
};
