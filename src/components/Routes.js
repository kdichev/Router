import React from "react";
import { Route, Switch } from "react-router-dom";

const Routes = ({ routes = [] }) => (
  <Switch>
    {routes.map((route, i) => <Route exact key={i} {...route} />)}
  </Switch>
);

export default Routes;
