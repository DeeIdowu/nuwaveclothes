import CartActionTypes from "./CartTypes";

const INITIAL_STATE = {
  hidden: true, // to hide the cart upon entering webpage
  cartItems: []
};

//for changes:
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN: //the string that derives from CartActions
      return {
        ...state,
        hidden: !state.hidden //if true return false, if false return true
      };

    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload]
      };
    default:
      return state;
  }
};

export default cartReducer;
