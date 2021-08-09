import React from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Header from "./components/Header";
import Library from "./components/Library";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Library">
          <Library />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
