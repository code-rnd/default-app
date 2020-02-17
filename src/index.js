import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store";

import WidjetComponent from "./components/WidjetComponent";

import "./styles/style.scss";

ReactDOM.render(
  <Provider store={store}>
    <WidjetComponent />
  </Provider>,
  document.getElementById("root")
);
