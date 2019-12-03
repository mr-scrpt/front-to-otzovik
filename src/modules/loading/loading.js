import { handleActions } from "redux-actions";
import { isLoading } from "./actions";

const loading = handleActions(
  {
    [isLoading]: (_, action) => {
      return action.payload;
    }
  },
  false
);

export default loading;
