import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CourseListRelationFilter } from "../course/CourseListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type InstructorWhereInput = {
  bio?: StringNullableFilter;
  courses?: CourseListRelationFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
