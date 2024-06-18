import { ErrorLogCreateNestedManyWithoutCodeFilesInput } from "./ErrorLogCreateNestedManyWithoutCodeFilesInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { SyntaxWhereUniqueInput } from "../syntax/SyntaxWhereUniqueInput";

export type CodeFileCreateInput = {
  content?: string | null;
  errorLogs?: ErrorLogCreateNestedManyWithoutCodeFilesInput;
  fileName?: string | null;
  project?: ProjectWhereUniqueInput | null;
  syntax?: SyntaxWhereUniqueInput | null;
};
