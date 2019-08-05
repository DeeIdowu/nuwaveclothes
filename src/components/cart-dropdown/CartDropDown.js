import React from "react";
import CustomButton from "../custom-buttom/CustomButton";
import "./cartdropdown.scss";

//stateless comp
const CartDropDown = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

export default CartDropDown;
