import { InstructorWhereUniqueInput } from "../instructor/InstructorWhereUniqueInput";
import { StudentCreateNestedManyWithoutCoursesInput } from "./StudentCreateNestedManyWithoutCoursesInput";

export type CourseCreateInput = {
  category?: string | null;
  description?: string | null;
  duration?: number | null;
  instructor?: InstructorWhereUniqueInput | null;
  name?: string | null;
  students?: StudentCreateNestedManyWithoutCoursesInput;
};
