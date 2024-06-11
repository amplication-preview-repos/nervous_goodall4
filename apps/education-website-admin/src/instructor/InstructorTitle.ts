import { Instructor as TInstructor } from "../api/instructor/Instructor";

export const INSTRUCTOR_TITLE_FIELD = "name";

export const InstructorTitle = (record: TInstructor): string => {
  return record.name?.toString() || String(record.id);
};
