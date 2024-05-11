import { all } from "redux-saga/effects";
import { counterWatcher } from "./counterSaga";
import { userWatcher } from "./userSaga";

export default function* rootWatcher() {
  yield all([counterWatcher(), userWatcher()]);
}
