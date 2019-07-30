import React from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Homepage from "./components/pages/homepage/Homepage";
import Shop from "./components/pages/shop/Shop";
import SignInSignOut from "./components/pages/sign-in-sign-out/SignInSignOut";
//import Firebase Auth:
import { auth, createdUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  //preventing memory leaks:
  unsubscribeFromAuth = null;

  //to fire firebase authentication:
  componentDidMount() {
    auth.onAuthStateChanged(async userAuth => {
      //if user auth exist:
      if (userAuth) {
        //obtaining userRef object form the utils/data checking if database updated:
        const userRef = await createdUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          //display new user or user already stored in database via DocumentSnapshot
          //example to obtain properties/data of user:
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
              //for confirmation the above function is working:
            },
            () => console.log(this.state)
          );
        });
      }
      //for the return of user being null if users signs out
      this.setState({ currentUser: userAuth });
    });
  }

  //for halting memory leaks:
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        {/*Display user current logged in/out status via header*/}
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/signin" component={SignInSignOut} />
        </Switch>
      </div>
    );
  }
}

export default App;
