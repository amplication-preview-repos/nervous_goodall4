import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type StudentWhereInput = {
  course?: CourseWhereUniqueInput;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
