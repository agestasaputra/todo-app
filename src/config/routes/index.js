import React from "react";
import { Route, Switch, withRouter, useLocation } from "react-router-dom";
import Navbar from "app/components/navbar";
import Landing from "app/pages/landing";
import Create from "app/pages/create";

const Routes = ({ state, dispatch }) => {
  const location = useLocation();
  return (
    <React.Suspense fallback={null}>
      <Navbar state={state} dispatch={dispatch} location={location} />
      <Switch>
        <Route
          path="/create"
          component={(props) => (
            <Create {...props} state={state} dispatch={dispatch} />
          )}
        />
        <Route
          exact
          path="/"
          component={(props) => (
            <Landing {...props} state={state} dispatch={dispatch} />
          )}
        />
      </Switch>
    </React.Suspense>
  );
};

export default withRouter(Routes);
