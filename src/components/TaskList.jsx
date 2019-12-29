import React from "react";
import { useSelector } from "react-redux";
import { List } from "@material-ui/core";

import Task from "./Task";

const getVisibleTasks = (tasks, filter) => {
	switch (filter) {
		case "SHOW_ALL":
			return tasks;
	}
};

export default function TaskList() {
	const tasks = useSelector(state =>
		getVisibleTasks(state.tasks, state.visibilityFilter)
	);

	return (
		<List>
			{tasks.map(task => (
				<Task key={task.id} {...task} />
			))}
		</List>
	);
}
