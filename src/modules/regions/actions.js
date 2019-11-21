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

export const fetchRegionAddRequest = createAction(
  "REGION/FETCH_REGION_ADD_REQUEST"
);
export const fetchRegionAddSuccess = createAction(
  "REGION/FETCH_REGION_ADD_SUCCESS"
);
export const fetchRegionAddFailure = createAction(
  "REGION/FETCH_REGION_ADD_FAILURE"
);
