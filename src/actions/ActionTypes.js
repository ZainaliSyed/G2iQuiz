// @flow

const REQUEST = "REQUEST";
const SUCCESS = "SUCCESS";
const FAILURE = "FAILURE";
const CANCEL = "CANCEL";

function createRequestTypes(base) {
  const res = {};
  [REQUEST, SUCCESS, FAILURE, CANCEL].forEach(type => {
    res[type] = `${base}_${type}`;
  });
  return res;
}

export const NETWORK_INFO = "NETWORK_INFO";
export const QUIZ = createRequestTypes("QUIZ");
export const QUIZ_RESULT = "QUIZ_RESULT";
export const INCREASE_QUESTION = "INCREASE_QUESTION";
export const CORRECT_ANSWER = "CORRECT_ANSWER";
export const WRONG_ANSWER = "WRONG_ANSWER";
export const PLAY_AGAIN = "PLAY_AGAIN";
