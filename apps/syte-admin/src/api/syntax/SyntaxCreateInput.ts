import { CodeFileCreateNestedManyWithoutSyntaxesInput } from "./CodeFileCreateNestedManyWithoutSyntaxesInput";
import { InputJsonValue } from "../../types";

export type SyntaxCreateInput = {
  codeFiles?: CodeFileCreateNestedManyWithoutSyntaxesInput;
  name?: string | null;
  pattern?: InputJsonValue;
};
