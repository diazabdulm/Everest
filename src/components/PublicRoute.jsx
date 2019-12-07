import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { isEmpty } from "react-redux-firebase";

const PublicRoute = ({ component: Component, ...componentProps }) => {
  const auth = useSelector(state => state.firebase.auth);

  return (
    <Route
      {...componentProps}
      render={routeProps =>
        isEmpty(auth) ? (
          <Component {...componentProps} {...routeProps} />
        ) : (
          <Redirect to="/projects/all" />
        )
      }
    />
  );
};

export default PublicRoute;
