import Immutable from "seamless-immutable";
import * as types from "../actions/ActionTypes";

const initialState = Immutable({
  failure: false,
  isFetching: false,
  errorMessage: "",
  data: []
});

export default (state: Object = initialState, action: Object) => {
  switch (action.type) {
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
