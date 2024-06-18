import { CodeFileListRelationFilter } from "../codeFile/CodeFileListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type SyntaxWhereInput = {
  codeFiles?: CodeFileListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  pattern?: JsonFilter;
};
