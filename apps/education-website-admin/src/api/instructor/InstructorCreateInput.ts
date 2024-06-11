import { CourseCreateNestedManyWithoutInstructorsInput } from "./CourseCreateNestedManyWithoutInstructorsInput";

export type InstructorCreateInput = {
  bio?: string | null;
  courses?: CourseCreateNestedManyWithoutInstructorsInput;
  email?: string | null;
  name?: string | null;
};
