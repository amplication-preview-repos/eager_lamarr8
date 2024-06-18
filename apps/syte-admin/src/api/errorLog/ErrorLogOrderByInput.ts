import { SortOrder } from "../../util/SortOrder";

export type ErrorLogOrderByInput = {
  codeFileId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  line?: SortOrder;
  message?: SortOrder;
  updatedAt?: SortOrder;
};
