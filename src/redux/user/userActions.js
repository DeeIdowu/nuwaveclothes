import UserActionTypes from "./user.types";

//grabbing user function or user auth, or null to fire appropriate action

//for google authentication
export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START
});

export const SignInSuccess = user => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user
});

export const SignInFailure = error => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error
});

//for email actions- must obtain user email and password therefore payload is object passed:
export const emailSignInStart = emailAndPassword => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword
});

//check for user persistence in session
export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION
});

//for sign out process:
export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START
});

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS
});

export const signOutFailure = error => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: error
});

//for sign up process
export const signUpStart = () => ({
  type: UserActionTypes.SIGN_UP_START
});

export const signUpSuccess = () => ({
  type: UserActionTypes.SIGN_UP_SUCCESS
});

export const signUpFailure = () => ({
  type: UserActionTypes.SIGN_UP_FAILURE
});
