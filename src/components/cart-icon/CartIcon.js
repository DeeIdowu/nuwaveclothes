import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/CartActions";
import { selectCartItemsCount } from "../../redux/cart/CartSelector";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./carticon.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

//for the actions use:
const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

//for the reselector, passing reducer state into selector:
const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
