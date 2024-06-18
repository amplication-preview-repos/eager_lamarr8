import { CodeFileListRelationFilter } from "../codeFile/CodeFileListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ProjectWhereInput = {
  codeFiles?: CodeFileListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  owner?: StringNullableFilter;
  title?: StringNullableFilter;
};
