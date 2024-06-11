import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";

export type StudentCreateInput = {
  course?: CourseWhereUniqueInput | null;
  email?: string | null;
  name?: string | null;
};
