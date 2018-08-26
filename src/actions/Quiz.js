// @flow

import { QUIZ } from "./ActionTypes";

export function request() {
  return {
    type: QUIZ.REQUEST
  };
}

export function success(data: Object) {
  return {
    data,
    type: QUIZ.SUCCESS
  };
}

export function failure(errorMessage: Object) {
  return {
    errorMessage,
    type: QUIZ.FAILURE
  };
}
