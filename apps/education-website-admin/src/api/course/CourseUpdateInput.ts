import { InstructorWhereUniqueInput } from "../instructor/InstructorWhereUniqueInput";
import { StudentUpdateManyWithoutCoursesInput } from "./StudentUpdateManyWithoutCoursesInput";

export type CourseUpdateInput = {
  category?: string | null;
  description?: string | null;
  duration?: number | null;
  instructor?: InstructorWhereUniqueInput | null;
  name?: string | null;
  students?: StudentUpdateManyWithoutCoursesInput;
};
