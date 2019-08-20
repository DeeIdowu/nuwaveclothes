import { all, call } from "redux-saga/effects";

import { shopSagas } from "../shop/ShopSagas";
import { userSagas } from "./UserSagas";
import { cartSagas } from "../cart/CartSagas";

export default function* rootSaga() {
  yield all([call(shopSagas), call(userSagas), call(cartSagas)]);
}
