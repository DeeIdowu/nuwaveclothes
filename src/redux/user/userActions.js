import UserActionTypes from "./user.types";

//grabbing user function or user auth, or null to fire appropriate action
export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user //set user as payload.
});
//for google authentication
export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START
});
//for google sign in success
export const googleSignInSuccess = user => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_SUCCESS,
  payload: user
});

//for google sign in faiure:
export const googleSignInFailure = error => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_FAILURE,
  payload: error
});

//for email actions- must obtain user email and password therefore payload is object passed:
export const emailSignInStart = emailAndPassword => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword
});
//success
export const emailSignInSuccess = user => ({
  type: UserActionTypes.EMAIL_SIGN_IN_SUCCESS,
  payload: user
});

export const emailSignInFailure = error => ({
  type: UserActionTypes.EMAIL_SIGN_IN_FAILURE,
  payload: error
});
