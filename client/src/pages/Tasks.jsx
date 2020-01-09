import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core";

import { subscribeToUserTasks } from "../redux/tasksSlice";
import { subscribeToUserProjects } from "../redux/projectsSlice";

import AddTask from "../components/AddTask";
import TaskList from "../components/task-list/task-list.component";
import ProjectHeader from "../components/project-header/project-header.component";
import Sidebar from "../components/sidebar/sidebar.componentt";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex"
  },
  main: {
    flexGrow: 1,
    paddingTop: 0,
    padding: theme.spacing(3)
  },
  toolbar: theme.mixins.toolbar
}));

export default function TasksPage() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);

  /*
		Both the tasks and projects useEffect methods attach
		to their respective firestore listener, and on component unmount 
		the cleanup method is executed.
	*/

  useEffect(() => {
    let unsubscribe = () => {};
    dispatch(subscribeToUserTasks(func => (unsubscribe = func)));
    return () => unsubscribe();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let unsubscribe = () => {};
    dispatch(subscribeToUserProjects(func => (unsubscribe = func)));
    return () => unsubscribe();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={classes.container}>
      <ProjectHeader toggleDrawer={handleDrawerToggle} />
      <Sidebar drawerOpen={drawerOpen} toggleDrawer={handleDrawerToggle} />
      <main className={classes.main}>
        <div className={classes.toolbar} />
        <AddTask />
        <TaskList />
      </main>
    </div>
  );
}
