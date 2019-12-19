import {
  takeLatest,
  select,
  fork,
  takeEvery,
  call,
  put
} from "redux-saga/effects";

import {
  fetchPersonsAddRequest,
  fetchPersonsAddSuccess,
  fetchPersonsAddFailure,
  fetchPersonsListRequest,
  fetchPersonsListSuccess,
  fetchPersonsListFailure
} from "./actions";

import { isLoading } from "../loading";

import { addPerson, getPersons } from "./api";
function* fetchWatcher() {
  yield takeLatest(fetchPersonsAddRequest, addPersonsDB);
  yield takeLatest(fetchPersonsListRequest, getPersonsDB);
}

export function* getPersonsDB({ payload }) {
  yield put(yield isLoading(true));
  try {
    const persons = yield getPersons(payload);
    yield put(fetchPersonsListSuccess(persons));
    yield put(yield isLoading(false));
  } catch (e) {
    yield put(yield isLoading(false));
    yield put(fetchPersonsListFailure(e));
  }
}

export function* addPersonsDB({ payload }) {
  yield put(yield isLoading(true));
  try {
    yield addPerson(payload);
    //yield getPersonsDB({});
    yield put(fetchPersonsAddSuccess());

    yield put(yield isLoading(false));
  } catch (e) {
    yield put(yield isLoading(false));
    yield put(fetchPersonsAddFailure(e));
  }
}

export default function*() {
  yield fork(fetchWatcher);
}
