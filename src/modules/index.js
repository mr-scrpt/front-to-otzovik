import { combineReducers } from "redux";
import { fork } from "redux-saga/effects";
import regions, { sagaRegion } from "./regions";
import notification from "./notification";
import { reducer as formReducer } from "redux-form";
export default combineReducers({ regions, form: formReducer, notification });

export function* rootSaga() {
  yield fork(sagaRegion);
}
