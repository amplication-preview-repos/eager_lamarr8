import { CodeFile } from "../codeFile/CodeFile";

export type Project = {
  codeFiles?: Array<CodeFile>;
  createdAt: Date;
  description: string | null;
  id: string;
  owner: string | null;
  title: string | null;
  updatedAt: Date;
};
