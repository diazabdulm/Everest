import React from "react";
import { useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";

import { selectProjectTasks } from "../../redux/tasks.module";
import { selectCurrentProject } from "../../redux/projects.module";

import Task from "../task/task.component";
import AddTask from "../add-task/add-task.component";

import useStyles from "./content.styles";

const Content = ({ match }) => {
  const classes = useStyles();
  const project = useSelector(state =>
    selectCurrentProject(state, match.params.id)
  );
  const tasks = useSelector(state =>
    selectProjectTasks(state, match.params.id)
  );

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Typography variant="h6" gutterBottom className={classes.title}>
        {project.text}
      </Typography>
      {tasks.map(({ id, ...otherProps }) => (
        <Task key={id} id={id} {...otherProps} />
      ))}
      <AddTask projectId={project.id} />
    </main>
  );
};

export default Content;
