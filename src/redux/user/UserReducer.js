import UserActionTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  error: null
};

//default parameter value, if state is not set placed inital_state
const userReducer = (state = INITIAL_STATE, action) => {
  //return of state we want via switch statement
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS: //return the action otherwise return intial state
      return {
        ...state,
        currentUser: action.payload,
        //if succeeds clear error by:
        error: null
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null
      };
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
