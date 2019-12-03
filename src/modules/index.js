import { combineReducers } from "redux";
import { fork } from "redux-saga/effects";
import regions, { sagaRegion } from "./regions";
import notification from "./notification";
import loading from "./loading";
import { reducer as formReducer } from "redux-form";
export default combineReducers({
  regions,
  form: formReducer,
  notification,
  loading
});

export function* rootSaga() {
  yield fork(sagaRegion);
}
