import { ErrorLog } from "../errorLog/ErrorLog";
import { Project } from "../project/Project";
import { Syntax } from "../syntax/Syntax";

export type CodeFile = {
  content: string | null;
  createdAt: Date;
  errorLogs?: Array<ErrorLog>;
  fileName: string | null;
  id: string;
  project?: Project | null;
  syntax?: Syntax | null;
  updatedAt: Date;
};
