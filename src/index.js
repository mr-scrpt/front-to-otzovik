import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import { BrowserRouter as Router } from "react-router-dom";
import Notification from "./components/notification";
import Loader from "./components/loader";
import { Provider } from "react-redux";
import createStore from "./store";

export const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
      <Notification />
      <Loader />
    </Router>
  </Provider>,
  document.getElementById("root")
);
