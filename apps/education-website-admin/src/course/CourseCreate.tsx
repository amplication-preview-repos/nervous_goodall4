import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { InstructorTitle } from "../instructor/InstructorTitle";
import { StudentTitle } from "../student/StudentTitle";

export const CourseCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="category" source="category" />
        <TextInput label="description" multiline source="description" />
        <NumberInput step={1} label="duration" source="duration" />
        <ReferenceInput
          source="instructor.id"
          reference="Instructor"
          label="Instructor"
        >
          <SelectInput optionText={InstructorTitle} />
        </ReferenceInput>
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="students"
          reference="Student"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={StudentTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
