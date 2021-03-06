import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-buttom/CustomButton";
import CartItem from "../cart-items/CartItem";
import { withRouter } from "react-router-dom";
import { selectCartItems } from "../../redux/cart/CartSelector";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../../redux/cart/CartActions";
import "./cartdropdown.scss";

//stateless comp
const CartDropDown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message"> Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
