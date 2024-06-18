import { CodeFileWhereUniqueInput } from "../codeFile/CodeFileWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ErrorLogWhereInput = {
  codeFile?: CodeFileWhereUniqueInput;
  id?: StringFilter;
  line?: IntNullableFilter;
  message?: StringNullableFilter;
};
