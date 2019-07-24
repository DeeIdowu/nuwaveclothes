import React from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Homepage from "./components/pages/homepage/Homepage";
import Shop from "./components/pages/shop/Shop";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
