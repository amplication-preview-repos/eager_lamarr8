import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  displayName: string | null;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  role: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
