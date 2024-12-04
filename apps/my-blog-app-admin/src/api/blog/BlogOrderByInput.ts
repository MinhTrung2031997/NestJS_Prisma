import { SortOrder } from "../../util/SortOrder";

export type BlogOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
