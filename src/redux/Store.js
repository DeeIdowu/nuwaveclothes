import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import rootReducer from "./root-reducer";
import createSagaMiddleware from "redux-saga";

import { fetchCollectionsStart } from "./shop/ShopSagas";

//for saga middleware:
const sagaMiddleware = createSagaMiddleware();

//setting up middleware via array - the array enables you to add multiple middlewares
const middlewares = [sagaMiddleware];
//to not display logger in production:
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

//creation of store
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

//for use of saga:
sagaMiddleware.run(fetchCollectionsStart);

//exporting store via ReduxPersist
export const persistor = persistStore(store);

export default { store, persistor };
