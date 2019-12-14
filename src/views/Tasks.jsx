import React, { Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import useTasks from "../hooks/useTasks";

import Sidebar from "../components/Sidebar";
import TodoList from "../components/TodoList";

const TasksPage = () => {
  const { projectId } = useParams();
  const [drawerOpen, setDrawerOpen] = useState(false);
  // const tasks = useTasks(projectId);

  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);

  return (
    <Fragment>
      <Sidebar drawerOpen={drawerOpen} toggleDrawer={handleDrawerToggle} />
      <TodoList projectId={projectId} toggleDrawer={handleDrawerToggle} />
    </Fragment>
  );
};

export default TasksPage;
