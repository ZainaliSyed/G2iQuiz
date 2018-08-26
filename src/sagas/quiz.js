import { take, put, call, fork } from "redux-saga/effects";
import ApiSauce from "../services/ApiSauce";
import { API_QUIZ } from "../config/WebService";

function callRequest(data) {
  return ApiSauce.get(API_QUIZ, data);
}

function* watchRequest() {
  while (true) {
    const { payload } = yield take(types.QUIZ.REQUEST);
    try {
      const response = yield call(callRequest, payload);
      yield put(success(response.result));
    } catch (err) {
      yield put(failure(err.message));
    }
  }
}

export default function* root() {
  yield fork(watchRequest);
}
