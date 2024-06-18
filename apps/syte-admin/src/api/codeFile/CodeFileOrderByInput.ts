import { SortOrder } from "../../util/SortOrder";

export type CodeFileOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  fileName?: SortOrder;
  id?: SortOrder;
  projectId?: SortOrder;
  syntaxId?: SortOrder;
  updatedAt?: SortOrder;
};
