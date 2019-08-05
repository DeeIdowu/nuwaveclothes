//obtaining action
import CartActionTypes from "./CartTypes";

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item //payload is refering action.payload, the value of payload is item
});
