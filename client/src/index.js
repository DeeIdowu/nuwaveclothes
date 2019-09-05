import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
//importing React-Redux store:
import { Provider } from "react-redux";
//importing persistor and component for persisted reducer
import { PersistGate } from "redux-persist/integration/react";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import App from "./App";

//import store
import { store, persistor } from "./redux/Store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

//for PWA
serviceWorker.register();
