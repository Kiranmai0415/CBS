import { put, takeEvery } from "redux-saga/effects";
// import axios from "axios";
// import { URI } from "../api/uri";
// import { LoaderTypes } from "../action_types/loader_types";
// import { AuthTypes } from "../action_types/auth_types";



//add list in table
function* addButtons({ payload }) {
    console.log("sagasssssssssssssssss", payload);
    // console.log("hello world");  
    yield put({ type: "ADD_BUTTION_SUCCESS", data: payload })
}




export default function* AddAdminSaga() {
    yield takeEvery("ADD_BUTTON_REQUEST", addButtons);

}