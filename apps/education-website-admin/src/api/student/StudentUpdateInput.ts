import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";

export type StudentUpdateInput = {
  course?: CourseWhereUniqueInput | null;
  email?: string | null;
  name?: string | null;
};
