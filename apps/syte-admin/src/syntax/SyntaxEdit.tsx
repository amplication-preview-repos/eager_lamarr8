import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { CodeFileTitle } from "../codeFile/CodeFileTitle";

export const SyntaxEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="codeFiles"
          reference="CodeFile"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CodeFileTitle} />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
