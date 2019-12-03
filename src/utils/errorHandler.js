import { popupDispatch } from "./popupDispatch";

const errorHandler = e => {
  if (e.message) {
    popupDispatch(e.message, "err");
    throw e.message;
  } else {
    popupDispatch("Сервер недоступен", "err");
    throw { status: 400, message: "Сервер недоступен" };
  }
};

export default errorHandler;
