import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { ListRounded } from "@material-ui/icons";

export default function ProjectList() {
	const projects = useSelector(state => state.projects);

	return (
		<Fragment>
			{projects.map(({ id, name }) => (
				<ListItem button key={id} component={Link} to={`/projects/${id}`}>
					<ListItemIcon>
						<ListRounded />
					</ListItemIcon>
					<ListItemText primary={name} />
				</ListItem>
			))}
		</Fragment>
	);
}
