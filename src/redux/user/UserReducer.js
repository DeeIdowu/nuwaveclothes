import UserActionTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  error: null
};

//default parameter value, if state is not set placed inital_state
const userReducer = (state = INITIAL_STATE, action) => {
  //return of state we want via switch statement
  switch (action.type) {
    case UserActionTypes.GOOGLE_SIGN_IN_SUCCESS:
    case UserActionTypes.EMAIL_SIGN_IN_SUCCESS: //return the action otherwise return intial state
      return {
        ...state,
        currentUser: action.payload,
        //if succeeds clear error by:
        error: null
      };
    case UserActionTypes.GOOGLE_SIGN_IN_FAILURE:
    case UserActionTypes.EMAIL_SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
