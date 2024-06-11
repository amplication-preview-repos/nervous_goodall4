import { SortOrder } from "../../util/SortOrder";

export type CourseOrderByInput = {
  category?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  duration?: SortOrder;
  id?: SortOrder;
  instructorId?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
