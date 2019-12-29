import React from "react";
import { useDispatch } from "react-redux";
import {
	Checkbox,
	ListItem,
	ListItemIcon,
	ListItemText
} from "@material-ui/core";

import { deleteTask } from "../redux/tasksSlice";

export default function Task({ id, name }) {
	const dispatch = useDispatch();

	return (
		<ListItem
			dense
			button
			disableGutters
			divider
			onClick={() => dispatch(deleteTask(id))}
		>
			<ListItemIcon>
				<Checkbox
					disableRipple
					edge="start"
					inputProps={{ "aria-labelledby": name }}
					checked={false}
				/>
			</ListItemIcon>
			<ListItemText primary={name} />
		</ListItem>
	);
}
