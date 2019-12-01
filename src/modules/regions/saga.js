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
  fetchRegionUpdRequest
} from "./actions";

import { getRegionList, addRegion, updRegion } from "./api";

function* fetchWatcher() {
  yield takeEvery(fetchRegionsListRequest, getRegionsBD);
  yield takeEvery(fetchRegionAddRequest, addRegionBD);
  yield takeEvery(fetchRegionUpdRequest, updRegionBD);
}

export function* getRegionsBD() {
  const res = yield getRegionList();
  yield put(fetchRegionsListSuccess(res));
}

export function* addRegionBD({ payload }) {
  yield addRegion(payload);
  yield getRegionsBD();
}

export function* updRegionBD({ payload }) {
  yield updRegion(payload);
  yield getRegionsBD();
}

/* export function* getCoords(action) {
  const { from, to } = action.payload;
  const coords = yield call(getCoordsPoint, from, to);
  if (coords) {
    yield put(fetchCoordsSuccess(coords));
  }
} */

export default function*() {
  yield fork(fetchWatcher);
}
