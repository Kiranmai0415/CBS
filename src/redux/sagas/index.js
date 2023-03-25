import { all } from "redux-saga/effects";
import AuthSaga from "./auth_saga";
import HrSaga from "./hr_saga";
import LoggerSaga from "./logger_saga"
import AddAdminSaga from './add_admin_saga';


export default function* RootSaga() {
  yield all([AuthSaga(),HrSaga(), LoggerSaga(), AddAdminSaga()]);
  
}
