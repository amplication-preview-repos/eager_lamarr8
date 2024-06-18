import { CodeFileCreateNestedManyWithoutProjectsInput } from "./CodeFileCreateNestedManyWithoutProjectsInput";

export type ProjectCreateInput = {
  codeFiles?: CodeFileCreateNestedManyWithoutProjectsInput;
  description?: string | null;
  owner?: string | null;
  title?: string | null;
};
