import React from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";

const getVisibleTasks = (tasks, filter) => {
	switch (filter) {
		case "SHOW_ALL":
			return tasks;
		case "SHOW_TODAY":
			const today = moment();
			return tasks.filter(task => moment(task.date).isSame(today, "day"));
		case "SHOW_WEEK":
			const nextWeek = moment().add(1, "week");
			return tasks.filter(task =>
				moment(task.date).isSameOrBefore(nextWeek)
			);
		case "SHOW_INBOX":
			return tasks.filter(task => task.projectId === "inbox");
		default:
			throw new Error("unknown filter: " + filter);
	}
};

const TaskList = () => {
	const tasks = useSelector(state =>
		getVisibleTasks(state.tasks, state.visibilityFilter)
	);
	const dispatch = useDispatch();

	console.log(tasks);

	return <div>{}</div>;
};

export default TaskList;
