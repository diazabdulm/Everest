import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...componentProps }) => {
  const user = useSelector(({ user }) => user.currentUser);

  return (
    <Route
      {...componentProps}
      render={routeProps =>
        user ? (
          <Component {...componentProps} {...routeProps} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default PrivateRoute;
