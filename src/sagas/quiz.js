import { take, put, call, fork } from "redux-saga/effects";
import ApiSauce from "../services/ApiSauce";
import { BASE_URL } from "../config/WebService";
import { success } from "../actions/Quiz";

function callRequest(BASE_URL, data) {
  return ApiSauce.get(BASE_URL, data);
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
