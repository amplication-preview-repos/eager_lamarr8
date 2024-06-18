import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { CodeFileTitle } from "../codeFile/CodeFileTitle";

export const ErrorLogEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
