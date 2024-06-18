import { CodeFile as TCodeFile } from "../api/codeFile/CodeFile";

export const CODEFILE_TITLE_FIELD = "fileName";

export const CodeFileTitle = (record: TCodeFile): string => {
  return record.fileName?.toString() || String(record.id);
};
