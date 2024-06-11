import { Course } from "../course/Course";

export type Student = {
  course?: Course | null;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
