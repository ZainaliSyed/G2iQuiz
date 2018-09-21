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
  data: [],
  quizResult: []
});
let resultArray = [];
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
      correctAnswer = correctAnswer + 1;
      return Immutable.merge(state, {
        isFetching: false,
        failure: false,
        errorMessage: "",
        correctAnswer: correctAnswer
      });

    case types.WRONG_ANSWER:
      wrongAnswer = _.cloneDeep(state.wrongAnswer);
      wrongAnswer = wrongAnswer + 1;
      return Immutable.merge(state, {
        isFetching: false,
        failure: false,
        errorMessage: "",
        wrongAnswer: wrongAnswer
      });
    case types.QUIZ_RESULT:
      arrayResult = resultArray.push(action.resultData);
      return Immutable.merge(state, {
        failure: false,
        errorMessage: "",
        quizResult: resultArray
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
    case types.PLAY_AGAIN:
      return initialState;

    default:
      return state;
  }
};
