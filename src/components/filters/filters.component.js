import React from "react";
import { useSelector } from "react-redux";

import {
  selectAllTasks,
  selectTodayTasks,
  selectWeekTasks
} from "../../redux/tasks.module";

import TaskList from "../task-list/task-list.component";

const projectId = 0; // Tasks entered will be added to Inbox

export const AllTasks = () => {
  const tasks = useSelector(selectAllTasks);

  console.log(tasks);

  return <TaskList projectName="All" projectId={projectId} tasks={tasks} />;
};

export const TodayTasks = () => {
  const tasks = useSelector(selectTodayTasks);

  console.log(tasks)

  return <TaskList projectName="Today" projectId={projectId} tasks={tasks} />;
};

export const WeekTasks = () => {
  const tasks = useSelector(selectWeekTasks);

  return <TaskList projectName="Week" projectId={projectId} tasks={tasks} />;
};


export const ProjectTasks = () => {

}