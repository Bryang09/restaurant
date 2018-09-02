import React from "react";

import { Switch, Route } from "react-router-dom";

import Main from "./Components/Home/Main/Main";
import Menu from "./Components/Menu/Menu";
import About from "./Components/About/About";
import Catering from "./Components/Catering/Catering";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/menu" component={Menu} />
      <Route exact path="/about" component={About} />
      <Route exact path="/catering" component={Catering} />
    </Switch>
  );
};

export default Routes;
