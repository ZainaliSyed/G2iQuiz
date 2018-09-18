import Immutable from "seamless-immutable";
import * as types from "../actions/ActionTypes";
import _ from "lodash";

const initialState = Immutable({
  failure: false,
  isFetching: false,
  errorMessage: "",
  questionNumber: 0,
  correctAnswer: 0,
  wrongAnswer: 0,
  data: []
});

export default (state: Object = initialState, action: Object) => {
  switch (action.type) {
    case types.INCREASE_QUESTION:
      questionNumber = _.cloneDeep(state.questionNumber);
      questionNumber = action.questionNumber.questionNumber + 1;
      return Immutable.merge(state, {
        isFetching: false,
        failure: false,
        errorMessage: "",
        questionNumber: questionNumber
      });

    case types.CORRECT_ANSWER:
      correctAnswer = _.cloneDeep(state.correctAnswer);
      console.log("CORRECT_ANSWER 1 : ", correctAnswer);
      correctAnswer = correctAnswer + 1;
      console.log("CORRECT_ANSWER 2 : ", correctAnswer);
      return Immutable.merge(state, {
        isFetching: false,
        failure: false,
        errorMessage: "",
        correctAnswer: correctAnswer
      });

    case types.WRONG_ANSWER:
      wrongAnswer = _.cloneDeep(state.wrongAnswer);
      console.log("WRONG_ANSWER ***** 1 : ", wrongAnswer);
      wrongAnswer = wrongAnswer + 1;
      console.log("WRONG_ANSWER ***** 2 : ", wrongAnswer);
      return Immutable.merge(state, {
        isFetching: false,
        failure: false,
        errorMessage: "",
        wrongAnswer: wrongAnswer
      });

    case types.QUIZ.REQUEST:
      return Immutable.merge(state, {
        isFetching: true
      });
    case types.QUIZ.SUCCESS:
      return Immutable.merge(state, {
        isFetching: false,
        failure: false,
        errorMessage: "",
        data: action.data
      });
    case types.QUIZ.FAILURE:
      return Immutable.merge(state, {
        isFetching: false,
        failure: true,
        errorMessage: action.errorMessage
      });
    default:
      return state;
  }
};
