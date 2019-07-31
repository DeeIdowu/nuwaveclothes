import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/header/Header";
import Homepage from "./components/pages/homepage/Homepage";
import Shop from "./components/pages/shop/Shop";
import SignInSignOut from "./components/pages/sign-in-sign-out/SignInSignOut";
//import Firebase Auth:
import { auth, createdUserProfileDocument } from "./firebase/firebase.utils";
//setting currentUser via redux:
import { setCurrentUser } from "./redux/user/userActions";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createdUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shop} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInSignOut />
            }
          />
        </Switch>
      </div>
    );
  }
}

//to disable access to login page:
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

//for user of navigating and setting current user in homepage/login
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
