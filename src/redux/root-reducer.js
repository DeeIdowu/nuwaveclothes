import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // for the local storage as default

import userReducer from "./user/UserReducer";

import cartReducer from "./cart/CartReducer";

//persist config:
const persistConfig = {
  key: "root", //storing in root
  storage,
  whitelist: ["cart"] //contains any reducers we want to store
};

const rootReducer = combineReducers({
  user: userReducer, //stored via firebase
  cart: cartReducer
});

export default persistReducer(persistConfig, rootReducer);
