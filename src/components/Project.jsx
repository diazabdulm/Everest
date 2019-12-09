import React, { useEffect, useReducer } from "react";
import { makeStyles } from "@material-ui/core";

import Header from "./ProjectHeader";
import AddTask from "./ProjectAddTask";
import TaskList from "./ProjectTaskList";

const useStyles = makeStyles(theme => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(3)
    }
}));

const initialState = { projectId: 0, projectName: "", tasks: [] };

const projects = {
    all: {
        projectId: 0,

    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case ''
    }
}

const Project = ({ name, id, toggleDrawer }) => {
    const classes = useStyles();
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        if (id === "all") dispatch({ type: })
        if (id === "")
    }, [id])

    return (
        <main className={classes.content}>
      <Header projectName={name} toggleDrawer={toggleDrawer} />
      <AddTask projectId={id} />
      <TaskList tasks={tasks} />
    </main>
    );
};

export default Project;