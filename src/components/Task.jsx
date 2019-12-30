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
		<ListItem dense button disableGutters divider>
			<ListItemIcon>
				<Checkbox
					edge="start"
					checked={false}
					inputProps={{ "aria-labelledby": name }}
					onClick={() => dispatch(deleteTask(id))}
				/>
			</ListItemIcon>
			<ListItemText primary={name} />
		</ListItem>
	);
}
