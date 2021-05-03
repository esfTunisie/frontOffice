import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import LandingPage from "../Pages/LandingPage/LandingPage"
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute"


const MainRoute = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
};

export default MainRoute;