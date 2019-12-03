import { handleActions } from "redux-actions";
import { openNotification, closeNotification } from "./actions";

//export const notificationSelector = state => state.notification;

const notification = handleActions(
  {
    [openNotification]: (state, action) => {
      const { text, variant } = action.payload;
      return [
        ...state,
        { text, variant, id: state.length + 1, isActive: !state.length }
      ];
    },
    [closeNotification]: (state, action) => {
      const withoutDeletedNotification = state.filter(
        notification => notification.id !== action.payload
      );

      if (withoutDeletedNotification.length) {
        return withoutDeletedNotification.map((not, i) => {
          if (i === withoutDeletedNotification.length - 1) {
            not.isActive = true;
          }
          return not;
        });
      } else {
        return withoutDeletedNotification;
      }
    }
  },
  []
);
export default notification;
