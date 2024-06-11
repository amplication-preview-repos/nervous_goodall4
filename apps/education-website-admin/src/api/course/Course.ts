import { Instructor } from "../instructor/Instructor";
import { Student } from "../student/Student";

export type Course = {
  category: string | null;
  createdAt: Date;
  description: string | null;
  duration: number | null;
  id: string;
  instructor?: Instructor | null;
  name: string | null;
  students?: Array<Student>;
  updatedAt: Date;
};
