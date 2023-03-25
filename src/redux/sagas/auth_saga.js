import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { URI } from "../api/uri";
import { LoaderTypes } from "../action_types/loader_types";
import { AuthTypes } from "../action_types/auth_types";



//Login
function* login({ payload, callback }) {
  yield put({ type: LoaderTypes.LOADER_START });
  try {

    const url = `${process.env.REACT_APP_API_URL}/${URI.LOGIN}`;

    const res = yield axios.post(url, payload);
    console.log("response", res.data)
    yield put({ type: AuthTypes.LOGIN_SUCCESS, data: res.data });
    callback(false);
  } catch (e) {
    console.log(e.message)
    callback(true);
  }
  yield put({ type: LoaderTypes.LOADER_STOP });
}
//Forgot Password
function* forgotPassword({ payload, callback }) {
  yield put({ type: LoaderTypes.LOADER_START });
  try {

    const url = `${process.env.REACT_APP_API_URL}/${URI.FORGOT_PASSWORD}`;

    const res = yield axios.post(url, payload);
    console.log("response", res.data)
    yield put({ type: AuthTypes.FORGOT_SUCCESS, data: res.data });
    callback(false);
  } catch (e) {
    callback(true);
  }
  yield put({ type: LoaderTypes.LOADER_STOP });
}
//Reset Password
function* resetPassword({ params, payload, callback }) {
  yield put({ type: LoaderTypes.LOADER_START });
  try {

    const url = `${process.env.REACT_APP_API_URL}/${URI.RESET_PASSWORD}/${params}`;

    const res = yield axios.post(url, payload);

    yield put({ type: AuthTypes.RESET_SUCCESS, data: res.data });
    callback(false);
  } catch (e) {
    callback(true);
  }
  yield put({ type: LoaderTypes.LOADER_STOP });
}



export default function* AuthSaga() {
  yield takeEvery(AuthTypes.LOGIN_REQUEST, login);
  yield takeEvery(AuthTypes.FORGOT_REQUEST, forgotPassword);
  yield takeEvery(AuthTypes.RESET_REQUEST, resetPassword);

}
