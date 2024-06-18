import { CodeFileWhereUniqueInput } from "../codeFile/CodeFileWhereUniqueInput";

export type ErrorLogCreateInput = {
  codeFile?: CodeFileWhereUniqueInput | null;
  line?: number | null;
  message?: string | null;
};
