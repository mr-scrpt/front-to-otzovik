import { combineReducers } from "redux";

import { handleActions } from "redux-actions";

import {
  fetchPersonsListRequest,
  fetchPersonsListSuccess,
  fetchPersonsListFailure,
  fetchPersonsListSortRequest
} from "./actions";

const list = handleActions(
  {
    [fetchPersonsListRequest]: () => [],
    [fetchPersonsListSuccess]: (_, action) => action.payload.data,
    [fetchPersonsListFailure]: () => []
  },
  []
);

const error = handleActions(
  {
    [fetchPersonsListRequest]: () => {},
    [fetchPersonsListSuccess]: () => {},
    [fetchPersonsListFailure]: (_, action) => ({ ...action.payload })
  },
  {}
);

const sort = handleActions(
  {
    [fetchPersonsListSortRequest]: (state, action) => action.payload
  },
  {
    limit: 10,
    currentPage: 1,
    sortField: "name",
    sortDir: "asc"
  }
);
export default combineReducers({
  list,
  error,
  sort
});
