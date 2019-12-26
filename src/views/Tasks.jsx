import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core";

import { subscribeToUserTasks, selectProjectTasks } from "../redux/tasksSlice";
import { subscribeToUserProjects } from "../redux/projectsSlice";

import Sidebar from "../components/Sidebar";

import TodoListHeader from "../components/TodoListHeader";
import TodoListAddForm from "../components/TodoListAddForm";
import TodoListItem from "../components/TodoListItem";

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

const TasksPage = () => {
  const { projectId } = useParams();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const tasks = useSelector(state => selectProjectTasks(state, projectId));
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);

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
    <Fragment>
      <Sidebar drawerOpen={drawerOpen} toggleDrawer={handleDrawerToggle} />
      <main className={classes.content}>
        <TodoListHeader toggleDrawer={handleDrawerToggle} />
        {/* <TodoListAddForm projectId={projectId} /> */}
        {/* {tasks.map(({ id, ...otherProps }) => (
          <TodoListItem key={id} {...otherProps} />
        ))} */}
      </main>
    </Fragment>
  );
};

export default TasksPage;
