import { CodeFileUpdateManyWithoutSyntaxesInput } from "./CodeFileUpdateManyWithoutSyntaxesInput";
import { InputJsonValue } from "../../types";

export type SyntaxUpdateInput = {
  codeFiles?: CodeFileUpdateManyWithoutSyntaxesInput;
  name?: string | null;
  pattern?: InputJsonValue;
};
