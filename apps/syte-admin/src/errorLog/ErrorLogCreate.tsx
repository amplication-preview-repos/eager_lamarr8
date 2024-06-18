import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { CodeFileTitle } from "../codeFile/CodeFileTitle";

export const ErrorLogCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="codeFile.id"
          reference="CodeFile"
          label="codeFile"
        >
          <SelectInput optionText={CodeFileTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="line" source="line" />
        <TextInput label="message" multiline source="message" />
      </SimpleForm>
    </Create>
  );
};
