import React from "react";
import "./App.css";
import Welcome from "./components/welcome/welcome";
import Clock from "./components/Clock/Clock";
import Contact from "./components/Contact/Contact";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Navigation/Navigation";
import noMatch from "./components/404 page/404";
import Jeopardy from "./components/Jeopardy/Jeopardy";
function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/welcome/:name" component={Welcome} />
        <Route path="/clock" component={Clock} />
        <Route path="/contact" component={Contact} />
        <Route path="/jeopardy" component={Jeopardy} />
        <Route component={noMatch} />
      </Switch>
    </div>
  );
}

export default App;
