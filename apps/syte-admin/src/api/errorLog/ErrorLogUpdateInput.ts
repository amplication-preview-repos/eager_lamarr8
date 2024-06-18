import { CodeFileWhereUniqueInput } from "../codeFile/CodeFileWhereUniqueInput";

export type ErrorLogUpdateInput = {
  codeFile?: CodeFileWhereUniqueInput | null;
  line?: number | null;
  message?: string | null;
};
