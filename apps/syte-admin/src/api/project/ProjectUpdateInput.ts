import { CodeFileUpdateManyWithoutProjectsInput } from "./CodeFileUpdateManyWithoutProjectsInput";

export type ProjectUpdateInput = {
  codeFiles?: CodeFileUpdateManyWithoutProjectsInput;
  description?: string | null;
  owner?: string | null;
  title?: string | null;
};
