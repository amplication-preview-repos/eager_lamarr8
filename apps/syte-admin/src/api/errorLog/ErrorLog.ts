import { CodeFile } from "../codeFile/CodeFile";

export type ErrorLog = {
  codeFile?: CodeFile | null;
  createdAt: Date;
  id: string;
  line: number | null;
  message: string | null;
  updatedAt: Date;
};
