import { UserActionTypes } from "./user.types";

//grabbing user function or user auth, or null to fire appropriate action
export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user //set user as payload.
});
