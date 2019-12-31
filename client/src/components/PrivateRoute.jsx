import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

import { selectCurrentUser } from "../redux/userSlice";

const PrivateRoute = ({ component: Component, ...componentProps }) => {
	const auth = useSelector(selectCurrentUser);

	return (
		<Route
			{...componentProps}
			render={routeProps =>
				auth ? (
					<Component {...componentProps} {...routeProps} />
				) : (
					<Redirect to="/" />
				)
			}
		/>
	);
};

export default PrivateRoute;
