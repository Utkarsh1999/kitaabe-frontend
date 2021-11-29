import * as ItemActions from "../actions/item.actions";

const initialState = {
  items: [],
  images: [],
  errorItems: null,
  errorSavingItems: null,
  errorUploadingImages: null,
  savingItem: false,
  savingImages: false,
  loadingItems: false,
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
    case ItemActions.FETCH_ITEMS_BY_USERID.REQUEST:
      return {
        ...state,
        loadingItems: true,
      };
    case ItemActions.FETCH_ITEMS_BY_USERID.SUCCESS:
      return {
        ...state,
        loadingItems: false,
        items: action.payload.data,
      };
    case ItemActions.FETCH_ITEMS_BY_USERID.FAILURE:
      return {
        ...state,
        loadingItems: false,
        errorItems: action.payload,
      };
    default:
      return state;
  }
}
