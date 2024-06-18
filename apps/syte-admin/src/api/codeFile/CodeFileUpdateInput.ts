import { ErrorLogUpdateManyWithoutCodeFilesInput } from "./ErrorLogUpdateManyWithoutCodeFilesInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { SyntaxWhereUniqueInput } from "../syntax/SyntaxWhereUniqueInput";

export type CodeFileUpdateInput = {
  content?: string | null;
  errorLogs?: ErrorLogUpdateManyWithoutCodeFilesInput;
  fileName?: string | null;
  project?: ProjectWhereUniqueInput | null;
  syntax?: SyntaxWhereUniqueInput | null;
};
