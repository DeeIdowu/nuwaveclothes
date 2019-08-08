import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import rootReducer from "./root-reducer";

//setting up middleware via array - the array enables you to add multiple middlewares
const middlewares = [];
//to not display logger in production:
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

//creation of store
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

//exporting store via ReduxPersist
export const persistor = persistStore(store);

export default { store, persistor };
