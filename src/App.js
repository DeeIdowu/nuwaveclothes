import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/header/Header";
//pages
import Homepage from "./components/pages/homepage/Homepage";
import Shop from "./components/pages/shop/Shop";
import SignInSignOut from "./components/pages/sign-in-sign-out/SignInSignOut";
import Checkout from "./components/pages/checkout/Checkout";

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/UserSelector";
import { checkUserSession } from "./redux/user/userActions";

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]); //to make sure it only checks once

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
        <Route exact path="/checkout" component={Checkout} />
        <Route
          exact
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <SignInSignOut />)}
        />
      </Switch>
    </div>
  );
};

//to disable access to login page:
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
