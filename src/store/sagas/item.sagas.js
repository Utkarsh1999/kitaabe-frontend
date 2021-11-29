import { call, put, takeLatest } from "redux-saga/effects";
import { ItemApi } from "../../services/item.service";
import {
  SAVE_ITEM,
  UPLOAD_IMAGES,
  FETCH_ITEMS_BY_USERID,
  saveItem,
  uploadImages,
  getItemsByUserId,
} from "../actions/item.actions";

function* putImages(action) {
  try {
    const { data } = yield call(ItemApi.uploadItemImages, action.payload);
    // localStorage.setItem("token", data.access_token);
    yield put(uploadImages.success(data));
  } catch (e) {
    console.log("error:" + e);
    yield put(uploadImages.failure(e));
  }
}

function* putItem(action) {
  try {
    const { data } = yield call(ItemApi.saveItem, action.payload);
    // localStorage.setItem("token", data.access_token);
    yield put(saveItem.success(data));
  } catch (e) {
    yield put(saveItem.failure(e.data));
  }
}

function* fetchItemsByUserId(action) {
  try {
    const { data } = yield call(ItemApi.getItemsByUserId, action.payload);
    // localStorage.setItem("token", data.access_token);
    yield put(getItemsByUserId.success(data));
  } catch (e) {
    yield put(getItemsByUserId.failure(e.data));
  }
}

function* itemSaga() {
  yield takeLatest(UPLOAD_IMAGES.REQUEST, putImages);
  yield takeLatest(SAVE_ITEM.REQUEST, putItem);
  yield takeLatest(FETCH_ITEMS_BY_USERID.REQUEST, fetchItemsByUserId);
}

export default itemSaga;
