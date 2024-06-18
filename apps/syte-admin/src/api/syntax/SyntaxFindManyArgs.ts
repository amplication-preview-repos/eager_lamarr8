import { SyntaxWhereInput } from "./SyntaxWhereInput";
import { SyntaxOrderByInput } from "./SyntaxOrderByInput";

export type SyntaxFindManyArgs = {
  where?: SyntaxWhereInput;
  orderBy?: Array<SyntaxOrderByInput>;
  skip?: number;
  take?: number;
};
