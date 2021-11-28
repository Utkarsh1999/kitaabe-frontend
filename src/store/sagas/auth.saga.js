import { call, put, takeLatest } from "redux-saga/effects";
import { AuthorizationApi } from "../../services/auth.service";
import { SIGNIN, SIGNUP, signUp, signIn } from "../actions/auth.actions";

function* validateCredentials(action) {
  try {
    const { data } = yield call(
      AuthorizationApi.validateCredentials,
      action.payload
    );
    // localStorage.setItem("token", data.access_token);
    yield put(signIn.success(data.access_token));
  } catch (e) {
    yield put(signIn.failure(e.data));
  }
}

function* saveCredentials(action) {
  try {
    const { data } = yield call(
      AuthorizationApi.saveCredentials,
      action.payload
    );
    // localStorage.setItem("token", data.access_token);
    yield put(signUp.success(data.access_token));
  } catch (e) {
    yield put(signUp.failure(e.data));
  }
}

function* authorizationSaga() {
  yield takeLatest(SIGNIN.REQUEST, validateCredentials);
  yield takeLatest(SIGNUP.REQUEST, saveCredentials);
}

export default authorizationSaga;
