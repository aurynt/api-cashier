import { User } from "@/type";
import { usersValidation } from "./Validation";
import { hashPassword } from "./Password";

export const rewriteUser = (data: User<{ password?: string }>) => {
  try {
    usersValidation.parse(data);
    const res = hashPassword(data.password!);
    delete data.password;
    return { ...data, ...res };
  } catch (error) {
    throw error;
  }
};
