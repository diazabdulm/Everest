import React, { useState } from "react";
import {
	makeStyles,
	Divider,
	List,
	ListItem,
	ListItemIcon,
	ListItemText
} from "@material-ui/core";
import {
	AddCircle,
	AllInboxRounded,
	EventRounded,
	DateRangeRounded,
	InboxRounded
} from "@material-ui/icons";

import Avatar from "./Avatar";
import FilterLink from "./FilterLink";
import ProjectList from "./ProjectList";

import { default as AddProjectDialog } from "./AddProject";

const useStyles = makeStyles(theme => ({
	divider: {
		marginTop: 8,
		marginBottom: 8
	}
}));

export default function Drawer() {
	const classes = useStyles();
	const [addProjectDialogOpen, setAddProjectDialogOpen] = useState(false);

	const toggleAddProjectDialog = () =>
		setAddProjectDialogOpen(!addProjectDialogOpen);

	return (
		<List>
			<Avatar />
			<FilterLink name="All" filter="SHOW_ALL">
				<AllInboxRounded />
			</FilterLink>
			<FilterLink name="Today" filter="SHOW_TODAY">
				<EventRounded />
			</FilterLink>
			<FilterLink name="Week" filter="SHOW_WEEK">
				<DateRangeRounded />
			</FilterLink>
			<FilterLink name="Inbox" filter="SHOW_INBOX">
				<InboxRounded />
			</FilterLink>
			<Divider variant="middle" className={classes.divider} />
			<ProjectList />
			<ListItem button onClick={toggleAddProjectDialog}>
				<ListItemIcon>
					<AddCircle />
				</ListItemIcon>
				<ListItemText primary="Add Project" />
			</ListItem>
			<AddProjectDialog
				open={addProjectDialogOpen}
				handleClose={toggleAddProjectDialog}
			/>
		</List>
	);
}
