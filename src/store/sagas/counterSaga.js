import { put, takeEvery } from "redux-saga/effects";
import {
  incrementCreator,
  decrementCreator,
  COUNTER_ACTIONS,
} from "../reducers/counterReducer";
import fakeWait from "../../utils/wait";

function* asyncIncrementWorker() {
  yield fakeWait(1000);
  yield put(incrementCreator());
}

function* asyncDecrementWorker() {
  yield fakeWait(1000);
  yield put(decrementCreator());
}

export function* counterWatcher() {
  yield takeEvery(COUNTER_ACTIONS.ASYNC_INCREMENT, asyncIncrementWorker);
  yield takeEvery(COUNTER_ACTIONS.ASYNC_DECREMENT, asyncDecrementWorker);
}
