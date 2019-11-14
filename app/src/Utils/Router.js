import React from "react";
import { Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";

import Register from "../Forms/Register";
import Login from "../Forms/Login";
import Users from "../Users";

const Router = () => {
  return (
    <>
      <Switch>
        <Route path="/signup" component={Register} />
        <Route path="/signin" component={Login} />
        <PrivateRoute path="/users" component={Users} />
      </Switch>
    </>
  );
};

export default Router;
