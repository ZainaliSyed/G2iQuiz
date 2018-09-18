import { fork } from "redux-saga/effects";

import init from "./init";
import quiz from "./quiz";
export default function* root() {
  // yield fork(init);
  // yield fork(quiz);
}
