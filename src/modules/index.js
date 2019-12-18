import { combineReducers } from "redux";
import { fork } from "redux-saga/effects";
import regions, { sagaRegion } from "./regions";
import persons, { sagaPerson } from "./persons";
import notification from "./notification";
import loading from "./loading";
import { reducer as formReducer } from "redux-form";
export default combineReducers({
  regions,
  persons,
  form: formReducer,
  notification,
  loading
});

export function* rootSaga() {
  yield fork(sagaRegion);
  yield fork(sagaPerson);
}
