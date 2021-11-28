import * as ItemActions from "../actions/item.actions";

const initialState = {
  items: [],
  images: [],
  errorSavingItems: null,
  errorUploadingImages: null,
  savingItem: false,
  savingImages: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ItemActions.SAVE_ITEM.REQUEST:
      return {
        ...state,
        savingItem: true,
      };
    case ItemActions.SAVE_ITEM.SUCCESS:
      console.log("data: " + action.payload["data"]);
      return {
        ...state,
        savingItem: false,
      };
    case ItemActions.SAVE_ITEM.FAILURE:
      return {
        ...state,
        savingItem: false,
        errorSavingItems: action.payload,
      };
    case ItemActions.UPLOAD_IMAGES.REQUEST:
      return {
        ...state,
        savingImages: true,
      };
    case ItemActions.UPLOAD_IMAGES.SUCCESS:
      return {
        ...state,
        savingImages: false,
        images: action.payload.data,
      };
    case ItemActions.UPLOAD_IMAGES.FAILURE:
      return {
        ...state,
        savingImages: false,
        errorSavingImages: action.payload,
      };
    default:
      return state;
  }
}
