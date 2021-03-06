import { createRequestTypes, action } from "../../utils/redux";

export const FETCH_CATEGORIES = createRequestTypes("FETCH_CATEGORIES");
export const FETCH_SUB_CATEGORIES = createRequestTypes("FETCH_SUB_CATEGORIES");
export const FETCH_ALL_ITEMS = createRequestTypes("FETCH_ALL_ITEMS");

export const fetchCategories = {
  request: () => action(FETCH_CATEGORIES.REQUEST),
  success: (data) => action(FETCH_CATEGORIES.SUCCESS, data),
  failure: (error) => action(FETCH_CATEGORIES.FAILURE, error),
};

export const fetchSubCategories = {
  request: () => action(FETCH_SUB_CATEGORIES.REQUEST),
  success: (data) => action(FETCH_SUB_CATEGORIES.SUCCESS, data),
  failure: (error) => action(FETCH_SUB_CATEGORIES.FAILURE, error),
};

export const getAllItems = {
  request: (filters) => action(FETCH_ALL_ITEMS.REQUEST, filters),
  success: (data) => action(FETCH_ALL_ITEMS.SUCCESS, data),
  failure: (error) => action(FETCH_ALL_ITEMS.FAILURE, error),
};
