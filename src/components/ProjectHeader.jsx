import React from "react";
import { useDispatch } from "react-redux";
import { makeStyles, IconButton, Typography } from "@material-ui/core";
import { MenuRounded, DeleteForever } from "@material-ui/icons";

import { deleteProject } from "../redux/projectsSlice";

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

export default function ProjectHeader() {
	const classes = useStyles();
	const dispatch = useDispatch();

	return (
		<div className={classes.header}>
			<IconButton
				color="inherit"
				aria-label="open drawer"
				edge="start"
				className={classes.menu}
				// onClick={toggleDrawer}
			>
				<MenuRounded />
			</IconButton>
			<Typography variant="h5">Selected Project: </Typography>
			<IconButton
				color="inherit"
				aria-label="delete project"
				edge="end"
				className={classes.delete}
				// onClick={() => dispatch(deleteProject(projectId))}
			>
				<DeleteForever />
			</IconButton>
		</div>
	);
}
