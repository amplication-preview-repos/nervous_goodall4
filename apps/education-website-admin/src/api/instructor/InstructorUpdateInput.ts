import { CourseUpdateManyWithoutInstructorsInput } from "./CourseUpdateManyWithoutInstructorsInput";

export type InstructorUpdateInput = {
  bio?: string | null;
  courses?: CourseUpdateManyWithoutInstructorsInput;
  email?: string | null;
  name?: string | null;
};
