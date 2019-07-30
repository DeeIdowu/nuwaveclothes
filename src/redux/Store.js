import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

//setting up middleware via array - the array enables you to add multiple middlewares
const middlewares = [logger];

//creation of store
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
