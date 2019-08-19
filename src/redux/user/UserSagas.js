import { takeLatest, put, all, call } from "redux-saga/effects";
import UserActionTypes from "./user.types";
import {
  auth,
  googleProvider,
  createdUserProfileDocument
} from "../../firebase/firebase.utils";
import { googleSignInStart } from "./userActions";
import { googleSignInSuccess, googleSignInFailure } from "./userActions";

//obtain sign in method from google:
export function* signInWithGoogle() {
  //from firebase utils/sign in component:
  //api call via try catch
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createdUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(
      googleSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data })
    );
  } catch (error) {
    yield put(googleSignInFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart)]);
}
