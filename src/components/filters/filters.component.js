import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
  selectAllTasks,
  selectTodayTasks,
  selectWeekTasks,
  selectInboxTasks,
  selectProjectTasks
} from "../../redux/tasks.module";

import { selectCurrentProject } from "../../redux/projects.module";

import TaskList from "../task-list/task-list.component";

const projectId = 0; // Tasks entered will be added to Inbox

export const AllTasks = () => {
  const tasks = useSelector(selectAllTasks);

  return <TaskList projectName="All" projectId={projectId} tasks={tasks} />;
};

export const TodayTasks = () => {
  const tasks = useSelector(selectTodayTasks);

  return <TaskList projectName="Today" projectId={projectId} tasks={tasks} />;
};

export const WeekTasks = () => {
  const tasks = useSelector(selectWeekTasks);

  return (
    <TaskList projectName="Next 7 Days" projectId={projectId} tasks={tasks} />
  );
};

export const InboxTasks = () => {
  const tasks = useSelector(selectInboxTasks);

  return <TaskList projectName="Inbox" projectId={projectId} tasks={tasks} />;
};

export const ProjectTasks = () => {
  const { projectId } = useParams();
  const { text } = useSelector(state => selectCurrentProject(state, projectId));
  const tasks = useSelector(state => selectProjectTasks(state, projectId));

  return <TaskList projectName={text} projectId={projectId} tasks={tasks} />;
};
