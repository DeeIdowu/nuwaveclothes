import { createSelector } from "reselect";

//input selector - obtains the whole state and produces a slice of it, obtaining reducer state of cart:
const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems //return of value of property in order
);

//for the cartitems counter:
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);
