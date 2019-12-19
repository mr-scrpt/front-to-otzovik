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
    [fetchPersonsListSortRequest]: (state, action) => ({
      ...state.sort,
      ...action.payload
    })
  },
  {
    limit: 5,
    currentPage: 1,
    sortField: "name",
    sortDir: "asc",
    search: ""
  }
);
export default combineReducers({
  list,
  error,
  sort
});
