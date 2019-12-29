import React from "react";
import { makeStyles } from "@material-ui/core";

import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";
import ProjectHeader from "../components/ProjectHeader";
import Sidebar from "../components/Sidebar";

const useStyles = makeStyles(theme => ({
	container: {
		display: "flex"
	},
	main: {
		flexGrow: 1,
		padding: theme.spacing(3)
	}
}));

export default function TasksPage() {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<Sidebar />
			<main className={classes.main}>
				<ProjectHeader />
				<AddTask />
				<TaskList />
			</main>
		</div>
	);
}
