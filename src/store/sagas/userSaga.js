import { put, takeEvery, call } from "redux-saga/effects";
import {
  USER_ACTIONS,
  setUsers,
  setLoading,
  setError,
} from "../reducers/userReducer";

const fetchUsersFromApi = () =>
  fetch("https://jsonplaceholder.typicode.com/users?_limit=10").then(
    (response) => response.json()
  );

function* fetchUserWorker() {
  yield put(setError(null));
  yield put(setUsers([]));
  yield put(setLoading(true));

  try {
    const data = yield call(fetchUsersFromApi);
    yield put(setUsers(data));
  } catch (error) {
    yield put(setError(error.message));
  } finally {
    yield put(setLoading(false));
  }
}

export function* userWatcher() {
  yield takeEvery(USER_ACTIONS.FETCH_USERS, fetchUserWorker);
}
