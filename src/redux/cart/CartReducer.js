import CartActionTypes from "./CartTypes";

const INITIAL_STATE = {
  hidden: true // to hide the cart upon entering webpage
};

//for changes:
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN: //the string that derives from CartActions
      return {
        ...state,
        hidden: !state.hidden //if true return false, if false return true
      };
    default:
      return state; //using toggle for hidden or unhidden state via true or false
  }
};

export default cartReducer;
