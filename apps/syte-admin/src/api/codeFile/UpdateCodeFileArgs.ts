import { CodeFileWhereUniqueInput } from "./CodeFileWhereUniqueInput";
import { CodeFileUpdateInput } from "./CodeFileUpdateInput";

export type UpdateCodeFileArgs = {
  where: CodeFileWhereUniqueInput;
  data: CodeFileUpdateInput;
};
