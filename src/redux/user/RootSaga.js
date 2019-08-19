import { all, call } from "redux-saga/effects";

import { fetchCollectionsStart } from "../shop/ShopSagas";
import { userSagas } from "./UserSagas";

export default function* rootSaga() {
  yield all([call(fetchCollectionsStart), call(userSagas)]);
}
