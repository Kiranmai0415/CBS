import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { URI } from "../api/uri";
import { LoaderTypes } from "../action_types/loader_types";
import {EmpTypes} from "../action_types/emp_types";


//Employee Details
function* employeeDetails({ payload, callback }) {
  yield put({ type: LoaderTypes.LOADER_START });
  try {

    // const url = `${process.env.REACT_APP_API_URL}/${URI.EMPLOYEE_ID}`;
    // const res = yield axios.post(url, payload);
    const res = yield axios.get( "sdsd",payload);
    console.log("EMPLOYEE Details")
    yield put({ type: EmpTypes.EMP_DETAILS_SUCCESS });
    // callback(false);
  } catch (e) {
    // callback(true);
  }
  yield put({ type: LoaderTypes.LOADER_STOP });
}


export default function* EmpSaga() {
  yield takeEvery(EmpTypes.EMP_DETAILS_REQUEST, employeeDetails);
}