import { createRequestTypes, action } from "../../utils/redux";

export const SAVE_ITEM = createRequestTypes("SAVE_ITEM");
export const UPLOAD_IMAGES = createRequestTypes("UPLOAD_IMAGES");
export const FETCH_ITEMS_BY_USERID = createRequestTypes("FETCH_ITEMS");
export const FETCH_ITEM_BY_ITEMID = createRequestTypes("FETCH_ITEMS_BY_ITEMID");

export const saveItem = {
  request: (item) => action(SAVE_ITEM.REQUEST, item),
  success: (data) => action(SAVE_ITEM.SUCCESS, data),
  failure: (error) => action(SAVE_ITEM.FAILURE, error),
};
export const uploadImages = {
  request: (image) => action(SAVE_ITEM.REQUEST, image),
  success: (data) => action(SAVE_ITEM.SUCCESS, data),
  failure: (error) => action(SAVE_ITEM.FAILURE, error),
};
export const getItemsByUserId = {
  request: (userId) => action(FETCH_ITEMS_BY_USERID.REQUEST, userId),
  success: (data) => action(FETCH_ITEMS_BY_USERID.SUCCESS, data),
  failure: (error) => action(FETCH_ITEMS_BY_USERID.FAILURE, error),
};

export const getItemByItemId = {
  request: (itemId) => action(FETCH_ITEM_BY_ITEMID.REQUEST, itemId),
  success: (data) => action(FETCH_ITEM_BY_ITEMID.SUCCESS, data),
  failure: (error) => action(FETCH_ITEM_BY_ITEMID.FAILURE, error),
};

// {
//   type: "FETCH_ITEMS_BY_ITEMID_SUCCESS",
//   payload: "61a5dce166d5afb6adb3049c"
// }
