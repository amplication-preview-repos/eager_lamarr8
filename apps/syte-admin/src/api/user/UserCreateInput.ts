import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  displayName?: string | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  role?: string | null;
  roles: InputJsonValue;
  username: string;
};
