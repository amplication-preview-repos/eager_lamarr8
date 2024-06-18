import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ErrorLogListRelationFilter } from "../errorLog/ErrorLogListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { SyntaxWhereUniqueInput } from "../syntax/SyntaxWhereUniqueInput";

export type CodeFileWhereInput = {
  content?: StringNullableFilter;
  errorLogs?: ErrorLogListRelationFilter;
  fileName?: StringNullableFilter;
  id?: StringFilter;
  project?: ProjectWhereUniqueInput;
  syntax?: SyntaxWhereUniqueInput;
};
