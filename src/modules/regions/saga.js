import {
  takeLatest,
  select,
  fork,
  takeEvery,
  call,
  put
} from "redux-saga/effects";
import {
  fetchRegionsListRequest,
  fetchRegionsListSuccess,
  fetchRegionsListFailure,
  fetchRegionAddRequest,
  fetchRegionUpdRequest,
  fetchRegionDelRequest
} from "./actions";

import { isLoading } from "../loading";
import { getRegionList, addRegion, updRegion, deleteRegion } from "./api";

function* fetchWatcher() {
  yield takeEvery(fetchRegionsListRequest, getRegionsBD);
  yield takeEvery(fetchRegionAddRequest, addRegionBD);
  yield takeEvery(fetchRegionUpdRequest, updRegionBD);
  yield takeEvery(fetchRegionDelRequest, deleteRegionBD);
}

export function* getRegionsBD() {
  yield put(yield isLoading(true));
  try {
    const res = yield getRegionList();
    yield put(fetchRegionsListSuccess(res));
    yield put(yield isLoading(false));
  } catch (e) {
    yield put(fetchRegionsListFailure(e));
    yield put(yield isLoading(false));
  }
}

export function* addRegionBD({ payload }) {
  yield put(yield isLoading(true));
  try {
    yield addRegion(payload);
    yield getRegionsBD();
    yield put(yield isLoading(false));
  } catch (e) {
    yield put(fetchRegionsListFailure(e));
    yield getRegionsBD();
  }
}

export function* updRegionBD({ payload }) {
  yield put(yield isLoading(true));
  try {
    yield updRegion(payload);
    yield getRegionsBD();
    yield put(yield isLoading(false));
  } catch (e) {
    yield put(fetchRegionsListFailure(e));
    yield getRegionsBD();
  }
}

export function* deleteRegionBD({ payload }) {
  yield put(yield isLoading(true));
  try {
    yield deleteRegion(payload);
    yield getRegionsBD();
    yield put(yield isLoading(false));
  } catch (e) {
    yield put(fetchRegionsListFailure(e));
    yield getRegionsBD();
  }
}

export default function*() {
  yield fork(fetchWatcher);
}
