import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import moment from "moment";

const selectTodayTasks = tasks =>
	tasks.filter(task => moment(task.date).isSame(moment(), "day"));

const selectWeekTasks = tasks => {
	const nextWeek = moment().add(5, "days");
	return tasks.filter(task => moment(task.date).isBefore(nextWeek));
};

const selectInboxTasks = tasks => tasks.filter(task => task.projectId === 0);

const selectProjectTasks = (projectId, tasks) =>
	tasks.filter(task => task.projectId === projectId);

const useTasks = projectId => {
	const [tasks, setTasks] = useState([]);
	const taskList = useSelector(state => state.firestore.ordered.tasks);

	useEffect(() => {
		switch (projectId) {
			case "all":
				return setTasks(taskList);
			case "today":
				return setTasks(selectTodayTasks(taskList));
			case "week":
				return setTasks(selectWeekTasks(taskList));
			default:
				return setTasks(selectProjectTasks(projectId, taskList));
		}
	}, [projectId, taskList]);

	return tasks;
};

export default useTasks;
