import { all } from "redux-saga/effects";
import authSaga from "./auth.saga";
import catalogueSaga from "./catalogue.saga";
import itemSaga from "./item.sagas";

export default function* rootSaga() {
  yield all([authSaga(), catalogueSaga(), itemSaga()]);
}
