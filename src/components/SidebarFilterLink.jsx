import React from "react";
import { useDispatch } from "react-redux";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

import { setVisibilityFilter } from "../redux/visibilityFilterSlice";

const SidebarFilterLink = ({ filter, icon, name }) => {
	const dispatch = useDispatch();

	return (
		<ListItem button onClick={() => dispatch(setVisibilityFilter(filter))}>
			<ListItemIcon>{icon}</ListItemIcon>
			<ListItemText primary={name} />
		</ListItem>
	);
};

export default SidebarFilterLink;
