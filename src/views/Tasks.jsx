import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core";

import { subscribeToUserTasks, selectProjectTasks } from "../redux/tasksSlice";
import { subscribeToUserProjects } from "../redux/projectsSlice";

import Sidebar from "../components/Sidebar";

import TaskList from "../components/TaskList";

import TodoListHeader from "../components/TodoListHeader";
import TodoListAddForm from "../components/TodoListAddForm";
import TodoListItem from "../components/TodoListItem";

const useStyles = makeStyles(theme => ({
   content: {
      flexGrow: 1,
      padding: theme.spacing(3)
   },
   header: {
      display: "flex",
      alignItems: "center",
      position: "relative",
      marginBottom: theme.spacing(2)
   },
   menuButton: {
      [theme.breakpoints.up("sm")]: {
         display: "none"
      }
   },
   deleteProject: {
      position: "absolute",
      right: 0
   }
}));

const TasksPage = () => {
   const classes = useStyles();
   const dispatch = useDispatch();

   const [drawerOpen, setDrawerOpen] = useState(false);

   const { projectId } = useParams();
   const tasks = useSelector(state => selectProjectTasks(state, projectId));

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
            <TaskList />
            <TodoListHeader toggleDrawer={handleDrawerToggle} />
            <TodoListAddForm />
            {tasks.map(({ id, ...otherProps }) => (
               <TodoListItem key={id} id={id} {...otherProps} />
            ))}
         </main>
      </Fragment>
   );
};

export default TasksPage;
