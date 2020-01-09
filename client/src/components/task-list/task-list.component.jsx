import React from "react";
import moment from "moment";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { List } from "@material-ui/core";

import Task from "../task/task.component";

const getVisibleTasks = (currentProjectId, tasks, filter) => {
	switch (filter) {
		case "SHOW_ALL":
			return tasks;
		case "SHOW_TODAY":
			const today = moment();
			return tasks.filter(
				task => task.date && moment(task.date.toDate()).isSame(today, "day")
			);
		case "SHOW_WEEK":
			const nextWeek = moment().add(1, "week");
			return tasks.filter(
				task =>
					task.date && moment(task.date.toDate()).isSameOrBefore(nextWeek)
			);
		case "SHOW_INBOX":
			return tasks.filter(task => task.projectId === "inbox");
		case "SHOW_USER_PROJECT":
			return tasks.filter(task => task.projectId === currentProjectId);
		default:
			throw new Error(`Unknown error filtering tasks`);
	}
};

export default function TaskList() {
	const { projectId } = useParams();
	const tasks = useSelector(state =>
		getVisibleTasks(projectId, state.tasks, state.visibilityFilter)
	);

	return (
		<List>
			{tasks.map(task => (
				<Task key={task.id} {...task} />
			))}
		</List>
	);
}
