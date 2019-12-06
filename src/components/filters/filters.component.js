import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
  selectTodayTasks,
  selectWeekTasks,
  selectInboxTasks
} from "../../redux/tasks.module";

import TaskList from "../task-list/task-list.component";

const InboxProjectId = 0;

export const AllTasks = () => {
  const tasks = useSelector(state => state.firestore.ordered.tasks);

  return (
    <TaskList projectName="All" projectId={InboxProjectId} tasks={tasks} />
  );
};

export const TodayTasks = () => {
  const tasks = useSelector(selectTodayTasks);

  return (
    <TaskList projectName="Today" projectId={InboxProjectId} tasks={tasks} />
  );
};

export const WeekTasks = () => {
  const tasks = useSelector(selectWeekTasks);

  return (
    <TaskList
      projectName="Next 7 Days"
      projectId={InboxProjectId}
      tasks={tasks}
    />
  );
};

export const InboxTasks = () => {
  const tasks = useSelector(selectInboxTasks);

  return (
    <TaskList projectName="Inbox" projectId={InboxProjectId} tasks={tasks} />
  );
};

export const ProjectTasks = () => {
  const { projectId } = useParams();
  const { name: projectName } = useSelector(
    state => state.firestore.data.projects[projectId]
  );
  const tasks = useSelector(state => state.firestore.ordered.tasks);
  const projectTasks = tasks.filter(
    ({ projectId: taskProjectId }) => taskProjectId === projectId
  );

  return (
    <TaskList
      projectName={projectName}
      projectId={projectId}
      tasks={projectTasks}
    />
  );
};
