import CartActionTypes from "./CartTypes";
import { addItemToCart, removeItemFromCart } from "./CartUtils";

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
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id
        ) // using filter method
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      };
    default:
      return state;
  }
};

export default cartReducer;
