import React from "react";
import { Route, Switch } from "react-router-dom";
import CalculatorMain from "../screens/CalculatorMain";
import NotFound from "../screens/NotFound";

const BaseRouter = () => (
  <React.Fragment>
    <Switch>
      <Route exact path="/" component={CalculatorMain} />
      <Route component={NotFound} />
    </Switch>
  </React.Fragment>
);
export default BaseRouter;
