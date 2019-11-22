import { openNotification } from "../modules/notification";
import { store } from "../index";
export const popupDispatch = (text, variant = "err") => {
  store.dispatch(openNotification({ text, variant }));
};
