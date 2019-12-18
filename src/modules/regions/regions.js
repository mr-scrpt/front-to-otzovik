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
    [fetchRegionsListSuccess]: (_, action) => action.payload.data,
    [fetchRegionsListFailure]: () => []
  },
  []
);

const error = handleActions(
  {
    [fetchRegionsListRequest]: () => ({}),
    [fetchRegionsListSuccess]: () => ({}),
    [fetchRegionsListFailure]: (_, action) => ({ ...action.payload })
  },
  {}
);

export default combineReducers({
  list,
  error
  //loading
});
