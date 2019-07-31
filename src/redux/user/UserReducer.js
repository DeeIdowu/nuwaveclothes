import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: null
};

//default parameter value, if state is not set placed inital_state
const userReducer = (state = INITIAL_STATE, action) => {
  //return of state we want via switch statement
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USERSET_CURRENT_USER: //return the action otherwise return intial state
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
