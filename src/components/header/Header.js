import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/CartIcon";

import { ReactComponent as Logo } from "../../assets/crown.svg"; //designated for logos or adding images

import "./header.scss";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
  </div>
);

//passing args for connect, to access the state/root-reducer
//how to get value from root-reducer, state is the root reducer
const mapStatetoProps = state => ({
  //obtain user value from currentUser and root reducer
  //by doing so you can remove current user state from component in App.js
  currentUser: state.user.currentUser
});

export default connect(mapStatetoProps)(Header);
