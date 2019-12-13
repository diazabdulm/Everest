import React, { Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import useTasks from "../hooks/useTasks";

import Sidebar from "../components/Sidebar";
import Project from "../components/Project";

const TasksPage = () => {
  const { projectId } = useParams();
  const userId = useSelector(state => state.firebase.auth.uid);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const tasks = useTasks(projectId);

  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);

  return (
    <Fragment>
      <Sidebar toggleDrawer={handleDrawerToggle} />
      <Project toggleDrawer={handleDrawerToggle} projectId={projectId} />
    </Fragment>
  );
};

export default TasksPage;
