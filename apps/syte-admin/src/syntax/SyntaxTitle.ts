import { Syntax as TSyntax } from "../api/syntax/Syntax";

export const SYNTAX_TITLE_FIELD = "name";

export const SyntaxTitle = (record: TSyntax): string => {
  return record.name?.toString() || String(record.id);
};
