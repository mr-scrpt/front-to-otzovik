import { createAction } from "redux-actions";
//LIST
export const fetchPersonsListRequest = createAction(
  "PERSON/FETCH_PERSON_LIST_REQUEST"
);

export const fetchPersonsListSuccess = createAction(
  "PERSON/FETCH_PERSON_LIST_SUCCESS"
);

export const fetchPersonsListFailure = createAction(
  "PERSON/FETCH_PERSON_LIST_FAILURE"
);

//ADD
export const fetchPersonsAddRequest = createAction(
  "PERSON/FETCH_PERSON_ADD_REQUEST"
);

export const fetchPersonsAddSuccess = createAction(
  "PERSON/FETCH_PERSON_ADD_SUCCESS"
);

export const fetchPersonsAddFailure = createAction(
  "PERSON/FETCH_PERSON_ADD_FAILURE"
);

// SORT
export const fetchPersonsListSortRequest = createAction(
  "PERSON/FETCH_PERSON_LIST_SORT_REQUEST"
);
