import React from "react";
import ReactDOM from "react-dom";
import "./sass/index.scss";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store } from "./store/store";
import App from "./components/App/App";

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
