import { call, takeEvery } from "redux-saga/effects";
import { FETCH_ALL, CREATE } from "../actions/types";
import * as api from "../api";

function* fetchAllPostsSaga() {
  try {
    const { data } = yield call(api.fetchPosts);
  } catch (error) {
    console.log(error.message + " go pustam od saga error-ov :)");
  }
}

export default function* rootSaga() {
  yield takeEvery(FETCH_ALL, fetchAllPostsSaga);
}
