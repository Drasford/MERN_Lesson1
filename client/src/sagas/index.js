import { call, takeEvery, put } from "redux-saga/effects";
import { createPost } from "../actions/posts";
import { FETCH_ALL, CREATE, LOAD_ALL } from "../actions/types";
import * as api from "../api";

function* fetchAllPostsSaga() {
  try {
    const { data } = yield call(api.fetchPosts);
    yield put({ type: LOAD_ALL, payload: data });
  } catch (error) {
    console.log(error.message + " go pustam od saga error-ov :)");
  }
}

function* createNewPostSaga({ payload }) {
  try {
    const { data } = yield call(api.createPost(payload.post));
    yield put(createPost(data));
  } catch (error) {
    console.log(error.message + " create error, go pustam od saga :)");
  }
}

export default function* rootSaga() {
  yield takeEvery(FETCH_ALL, fetchAllPostsSaga);
  yield takeEvery(CREATE, createNewPostSaga);
}
