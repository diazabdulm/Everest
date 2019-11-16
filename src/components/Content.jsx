import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import { selectProject } from "../redux/projects.module";

import ContentTask from "./ContentTask";

import ContentAddTask from "./ContentAddTask";

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  toolbar: theme.mixins.toolbar
}));

const Content = ({ project }) => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Typography variant="h6" gutterBottom className={classes.title}>
        {project.name}
      </Typography>
      {project.tasks.map(({ id, ...otherProps }) => (
        <ContentTask
          key={id}
          taskId={id}
          projectId={project.id}
          {...otherProps}
        />
      ))}
      <ContentAddTask projectId={project.id} />
    </main>
  );
};

const mapStateToProps = (state, ownProps) => ({
  project: selectProject(ownProps.match.params.id)(state)
});

export default connect(mapStateToProps)(Content);