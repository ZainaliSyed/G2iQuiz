import { combineReducers } from "redux";

import networkInfo from "./networkInfo";
import quiz from "./quiz";

export default combineReducers({
  networkInfo,
  quiz
});
