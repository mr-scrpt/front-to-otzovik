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
  fetchRegionAddRequest
} from "./actions";

//import { openNotification } from "../notification";

import { getRegionList, addRegion } from "./api";

function* fetchWatcher() {
  yield takeEvery(fetchRegionsListRequest, getRegionsBD);
  yield takeEvery(fetchRegionAddRequest, addRegionBD);
}

export function* getRegionsBD() {
  const res = yield getRegionList();
  yield put(fetchRegionsListSuccess(res));
}

export function* addRegionBD({ payload }) {
  yield addRegion(payload);
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
