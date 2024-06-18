import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ErrorLogTitle } from "../errorLog/ErrorLogTitle";
import { ProjectTitle } from "../project/ProjectTitle";
import { SyntaxTitle } from "../syntax/SyntaxTitle";

export const CodeFileEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <ReferenceArrayInput
          source="errorLogs"
          reference="ErrorLog"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ErrorLogTitle} />
        </ReferenceArrayInput>
        <TextInput label="fileName" source="fileName" />
        <ReferenceInput source="project.id" reference="Project" label="project">
          <SelectInput optionText={ProjectTitle} />
        </ReferenceInput>
        <ReferenceInput source="syntax.id" reference="Syntax" label="syntax">
          <SelectInput optionText={SyntaxTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
