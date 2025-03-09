import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InstructorWhereUniqueInput } from "../instructor/InstructorWhereUniqueInput";
import { StudentListRelationFilter } from "../student/StudentListRelationFilter";

export type CourseWhereInput = {
  category?: StringNullableFilter;
  description?: StringNullableFilter;
  duration?: IntNullableFilter;
  id?: StringFilter;
  instructor?: InstructorWhereUniqueInput;
  name?: StringNullableFilter;
  students?: StudentListRelationFilter;
};
