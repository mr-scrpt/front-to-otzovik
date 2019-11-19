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
    [fetchRegionsListRequest]: () => false,
    [fetchRegionsListSuccess]: () => (_, action) => action.payload,
    [fetchRegionsListFailure]: () => true
  },
  false
);

const loading = handleActions(
  {
    [fetchRegionsListRequest]: () => true,
    [fetchRegionsListSuccess]: () => false,
    [fetchRegionsListFailure]: () => false
  },
  false
);
export default combineReducers({
  list,
  error,
  loading
});
