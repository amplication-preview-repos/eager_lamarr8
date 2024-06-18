import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { CODEFILE_TITLE_FIELD } from "./CodeFileTitle";
import { PROJECT_TITLE_FIELD } from "../project/ProjectTitle";
import { SYNTAX_TITLE_FIELD } from "../syntax/SyntaxTitle";

export const CodeFileShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="fileName" source="fileName" />
        <TextField label="ID" source="id" />
        <ReferenceField label="project" source="project.id" reference="Project">
          <TextField source={PROJECT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="syntax" source="syntax.id" reference="Syntax">
          <TextField source={SYNTAX_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="ErrorLog"
          target="codeFileId"
          label="ErrorLogs"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="codeFile"
              source="codefile.id"
              reference="CodeFile"
            >
              <TextField source={CODEFILE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="line" source="line" />
            <TextField label="message" source="message" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
