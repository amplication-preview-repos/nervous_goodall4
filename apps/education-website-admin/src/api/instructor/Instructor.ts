import { Course } from "../course/Course";

export type Instructor = {
  bio: string | null;
  courses?: Array<Course>;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
