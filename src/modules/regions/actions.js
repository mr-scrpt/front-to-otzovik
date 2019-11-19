import { createAction } from "redux-actions";

export const fetchRegionsListRequest = createAction(
  "REGION/FETCH_REGIONS_LIST_REQUEST"
);
export const fetchRegionsListSuccess = createAction(
  "REGION/FETCH_REGIONS_LIST_SUCCESS"
);
export const fetchRegionsListFailure = createAction(
  "REGION/FETCH_REGIONS_LIST_FAILURE"
);
