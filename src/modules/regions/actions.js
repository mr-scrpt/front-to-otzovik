import { createAction } from "redux-actions";
// LOAD
export const fetchRegionsListRequest = createAction(
  "REGION/FETCH_REGIONS_LIST_REQUEST"
);
export const fetchRegionsListSuccess = createAction(
  "REGION/FETCH_REGIONS_LIST_SUCCESS"
);
export const fetchRegionsListFailure = createAction(
  "REGION/FETCH_REGIONS_LIST_FAILURE"
);

// ADD
export const fetchRegionAddRequest = createAction(
  "REGION/FETCH_REGION_ADD_REQUEST"
);

// UPDATE
export const fetchRegionUpdRequest = createAction(
  "REGION/FETCH_REGION_UPD_REQUEST"
);

// DELETE
export const fetchRegionDelRequest = createAction(
  "REGION/FETCH_REGION_DEL_REQUEST"
);
