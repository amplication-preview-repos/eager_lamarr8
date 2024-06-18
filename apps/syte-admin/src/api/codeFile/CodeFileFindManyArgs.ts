import { CodeFileWhereInput } from "./CodeFileWhereInput";
import { CodeFileOrderByInput } from "./CodeFileOrderByInput";

export type CodeFileFindManyArgs = {
  where?: CodeFileWhereInput;
  orderBy?: Array<CodeFileOrderByInput>;
  skip?: number;
  take?: number;
};
