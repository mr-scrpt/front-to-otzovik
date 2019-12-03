import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import {
  fetchRegionsListRequest,
  fetchRegionsListSuccess,
  fetchRegionsListFailure
} from "./actions";
const list = handleActions(
  {
    [fetchRegionsListRequest]: () => [],
    [fetchRegionsListSuccess]: (_, action) => action.payload,
    [fetchRegionsListFailure]: () => []
  },
  []
);

const error = handleActions(
  {
    [fetchRegionsListRequest]: () => ({ status: 200, message: "ok" }),
    [fetchRegionsListSuccess]: () => ({ status: 200, message: "ok" }),
    [fetchRegionsListFailure]: (_, action) => ({ ...action.payload })
  },
  { status: 200, message: "ok" }
);

/* const loading = handleActions(
  {
    [fetchRegionsListRequest]: () => true,
    [fetchRegionsListSuccess]: () => false,
    [fetchRegionsListFailure]: () => false
  },
  false
); */
export default combineReducers({
  list,
  error
  //loading
});
