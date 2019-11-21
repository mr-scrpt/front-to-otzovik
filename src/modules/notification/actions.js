import { createAction } from "redux-actions";

export const openNotification = createAction("NOTIFICATION/OPEN_NOTIFICATION");
export const closeNotification = createAction(
  "NOTIFICATION/CLOSE_NOTIFICATION"
);
