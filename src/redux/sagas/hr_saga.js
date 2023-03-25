import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { URI } from "../api/uri";
import { LoaderTypes } from "../action_types/loader_types";
import {HrTypes} from "../action_types/hr_types"



//OnBoarding
function* onboarding({ payload, callback }) {
  yield put({ type: LoaderTypes.LOADER_START });
  try {

    const url = `${process.env.REACT_APP_API_URL}/${URI.ONBOARDING_FORMALITIES}`;
    const res = yield axios.post(url, payload);
    console.log("response", res.data)
    yield put({ type: HrTypes.ONBOARDING_SUCCESS, data: res.data });
    callback(false);
  } catch (e) {
    callback(true);
  }
  yield put({ type: LoaderTypes.LOADER_STOP });
}



//Employee ID Creation
function* employeeID({ payload, callback }) {
  yield put({ type: LoaderTypes.LOADER_START });
  try {

    const url = `${process.env.REACT_APP_API_URL}/${URI.EMPLOYEE_ID}`;
    const res = yield axios.post(url, payload);
    console.log("EMPLOYEE ID", res.data)
    yield put({ type: HrTypes.EMPLOYEE_ID_SUCCESS, data: res.data });
    // callback(false);
  } catch (e) {
    // callback(true);
  }
  yield put({ type: LoaderTypes.LOADER_STOP });
}


export default function* HrSaga() {
  yield takeEvery(HrTypes.ONBOARDING_REQUEST, onboarding);
  yield takeEvery(HrTypes.EMPLOYEE_ID_REQUEST, employeeID);
}