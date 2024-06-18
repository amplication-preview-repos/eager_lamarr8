import { CodeFile } from "../codeFile/CodeFile";
import { JsonValue } from "type-fest";

export type Syntax = {
  codeFiles?: Array<CodeFile>;
  createdAt: Date;
  id: string;
  name: string | null;
  pattern: JsonValue;
  updatedAt: Date;
};
