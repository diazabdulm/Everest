import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles, IconButton, Typography } from "@material-ui/core";
import { MenuRounded, DeleteForever } from "@material-ui/icons";

import {
	deleteProject,
	selectCurrentProjectName
} from "../redux/projectsSlice";

const useStyles = makeStyles(theme => ({
	header: {
		display: "flex",
		alignItems: "center",
		position: "relative",
		marginBottom: theme.spacing(2)
	},
	menu: {
		[theme.breakpoints.up("sm")]: {
			display: "none"
		}
	},
	delete: {
		position: "absolute",
		right: 0
	}
}));

const getCurrentProjectName = (state, projectId, filter) => {
	switch (filter) {
		case "SHOW_ALL":
			return "All";
		case "SHOW_TODAY":
			return "Today";
		case "SHOW_WEEK":
			return "Week";
		case "SHOW_INBOX":
			return "Inbox";
		case "SHOW_USER_PROJECT":
			return selectCurrentProjectName(state, projectId);
	}
};

export default function ProjectHeader({ toggleDrawer }) {
	const classes = useStyles();
	const dispatch = useDispatch();
	const history = useHistory();

	const { projectId } = useParams();
	const currentFilter = useSelector(state => state.visibilityFilter);
	const currentProjectName = useSelector(state =>
		getCurrentProjectName(state, projectId, currentFilter)
	);

	const handleProjectDelete = () => {
		history.push("/projects/all");
		dispatch(deleteProject(projectId));
	};

	return (
		<div className={classes.header}>
			<IconButton
				color="inherit"
				aria-label="open drawer"
				edge="start"
				className={classes.menu}
				onClick={toggleDrawer}
			>
				<MenuRounded />
			</IconButton>
			<Typography variant="h5">{currentProjectName}</Typography>
			{currentFilter === "SHOW_USER_PROJECT" && (
				<IconButton
					color="inherit"
					aria-label="delete project"
					edge="end"
					className={classes.delete}
					onClick={handleProjectDelete}
				>
					<DeleteForever />
				</IconButton>
			)}
		</div>
	);
}
