import { call, put, takeLatest } from "redux-saga/effects";
import { CatalogueApi } from "../../services/catalogue.service";
import {
  FETCH_CATEGORIES,
  FETCH_SUB_CATEGORIES,
  fetchSubCategories,
  fetchCategories,
} from "../actions/catalogue.actions";

function* fetchAllCategories() {
  try {
    const { data } = yield call(CatalogueApi.getCategories);
    // localStorage.setItem("token", data.access_token);
    yield put(fetchCategories.success(data));
  } catch (e) {
    console.log("error:" + e);
    yield put(fetchCategories.failure(e));
  }
}

function* fetchAllSubCategories() {
  try {
    const { data } = yield call(CatalogueApi.getSubCategories);
    // localStorage.setItem("token", data.access_token);
    yield put(fetchSubCategories.success(data));
  } catch (e) {
    yield put(fetchSubCategories.failure(e.data));
  }
}

function* catalogueSaga() {
  yield takeLatest(FETCH_CATEGORIES.REQUEST, fetchAllCategories);
  yield takeLatest(FETCH_SUB_CATEGORIES.REQUEST, fetchAllSubCategories);
}

export default catalogueSaga;
