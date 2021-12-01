import * as ItemActions from "../actions/item.actions";

const initialState = {
  item: null,
  itemId: null,
  items: [],
  images: [],
  errorItem: null,
  errorItems: null,
  errorSavingItems: null,
  errorUploadingImages: null,
  errorUpdatingItem: null,
  savingItem: false,
  savingImages: false,
  loadingItems: false,
  loadingItem: false,
  updatingItem: false,
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
        item: action.payload.status,
        itemId: action.payload._id,
        savingItem: false,
      };
    case ItemActions.SAVE_ITEM.FAILURE:
      return {
        ...state,
        savingItem: false,
        errorSavingItems: action.payload,
      };
    case ItemActions.UPDATE_ITEM.REQUEST:
      return {
        ...state,
        updatingItem: true,
      };
    case ItemActions.UPDATE_ITEM.SUCCESS:
      return {
        ...state,

        updatingItem: false,
      };
    case ItemActions.UPDATE_ITEM.FAILURE:
      return {
        ...state,
        updatingItem: false,
        errorUpdatingItem: action.payload,
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
    case ItemActions.FETCH_ITEM_BY_ITEMID.REQUEST:
      return {
        ...state,
        loadingItem: true,
      };
    case ItemActions.FETCH_ITEM_BY_ITEMID.SUCCESS:
      return {
        ...state,
        loadingItem: false,
        item: action.payload.data,
      };
    case ItemActions.FETCH_ITEM_BY_ITEMID.FAILURE:
      return {
        ...state,
        loadingItem: false,
        errorItem: action.payload,
      };
    default:
      return state;
  }
}
