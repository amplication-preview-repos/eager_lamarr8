import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { CodeFileTitle } from "../codeFile/CodeFileTitle";

export const SyntaxCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
