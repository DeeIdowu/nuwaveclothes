import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
//importing React-Redux store:
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";

//import store
import store from "./redux/Store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
