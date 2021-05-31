import { call, takeEvery, put } from "redux-saga/effects";
import {
  responseCreatePost,
  responseUpdatePost,
  loadPosts,
  clearIdToUpdate,
} from "../actions/posts";
import {
  FETCH_ALL,
  REQUEST_CREATE_POST,
  DELETE_POST,
  REQUEST_UPDATE_POST,
  LIKE_POST,
} from "../actions/types";
import * as api from "../api";

function* fetchAllPostsSaga() {
  try {
    const { data } = yield call(api.fetchPosts);
    yield put(loadPosts(data));
  } catch (error) {
    console.log(error.message + " go pustam od saga error-ov :)");
  }
}

function* createNewPostSaga({ payload }) {
  try {
    const { data } = yield call(api.createPost, payload.post);
    yield put(responseCreatePost(data));
  } catch (error) {
    throw(error)
  }
}

function* deletePostSaga({ payload }) {
  try {
    yield call(api.deletePost, payload.postId);
  } catch (error) {
    console.log(error.message + " delete,error :)");
  }
}

function* updatePostSaga({ payload }) {
  try {
    const { data } = yield call(
      api.updatePost,
      payload.postId,
      payload.updatedPost
    );
    yield put(responseUpdatePost(data));
    yield put(clearIdToUpdate());
  } catch (error) {
    console.log(error);
  }
}

function* likePostSaga({ payload }) {
  try {
    const { data } = yield call(api.likePost, payload);
    yield put(responseUpdatePost(data));
  } catch (error) {
    console.log(error);
  }
}

export default function* rootSaga() {
  yield takeEvery(FETCH_ALL, fetchAllPostsSaga);
  yield takeEvery(REQUEST_CREATE_POST, createNewPostSaga);
  yield takeEvery(DELETE_POST, deletePostSaga);
  yield takeEvery(REQUEST_UPDATE_POST, updatePostSaga);
  yield takeEvery(LIKE_POST, likePostSaga);
}
