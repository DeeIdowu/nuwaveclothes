import React from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";

import Homepage from "./components/pages/homepage/Homepage";
import Shop from "./components/pages/shop/Shop";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
