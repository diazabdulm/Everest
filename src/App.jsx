import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core";

import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";

import SignInPage from "./views/SignIn";
import TasksPage from "./views/Tasks";

const useStyles = makeStyles(theme => ({
	root: {
		display: "flex"
	}
}));

const App = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<PublicRoute exact path="/" component={SignInPage} />
			<PrivateRoute path="/projects/:projectId" component={TasksPage} />
		</div>
	);
};

export default App;
