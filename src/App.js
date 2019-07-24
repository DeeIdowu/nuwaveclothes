import React from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";

import Homepage from "./components/pages/homepage/Homepage";

//displaying demo router
const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
