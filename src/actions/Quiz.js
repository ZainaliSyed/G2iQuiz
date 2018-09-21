// @flow
import {
  QUIZ,
  INCREASE_QUESTION,
  CORRECT_ANSWER,
  WRONG_ANSWER,
  PLAY_AGAIN,
  QUIZ_RESULT
} from "./ActionTypes";

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

export function increaseQuestion(questionNumber: Number) {
  return {
    questionNumber,
    type: INCREASE_QUESTION
  };
}

export function increaseCorrectAnswer() {
  return {
    type: CORRECT_ANSWER
  };
}

export function increaseWrongAnswer() {
  return {
    type: WRONG_ANSWER
  };
}

export function playAgain() {
  return {
    type: PLAY_AGAIN
  };
}

export function quizResult(resultData: Object) {
  return {
    resultData,
    type: QUIZ_RESULT
  };
}
