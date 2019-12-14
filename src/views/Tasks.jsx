import React, { Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import useTasks from "../hooks/useTasks";

import Sidebar from "../components/Sidebar";
import TodoList from "../components/TodoList";

import TodoListHeader from "../components/TodoListHeader";

const TasksPage = () => {
  const { projectId } = useParams();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const projectName = useSelector(selectProjectName);
  // const tasks = useTasks(projectId);

  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);

  return (
    <Fragment>
      <Sidebar drawerOpen={drawerOpen} toggleDrawer={handleDrawerToggle} />
      <TodoList
        header={<TodoListHeader toggleDrawer={handleDrawerToggle} />}
        taskList={}
        addTask={}
        projectId={projectId}
        toggleDrawer={handleDrawerToggle}
      />
    </Fragment>
  );
};

export default TasksPage;
