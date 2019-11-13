import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import { selectTasks } from "../redux/tasks.module";

import ContentTask from "./ContentTask";

import ContentAddTask from "./ContentAddTask";

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  toolbar: theme.mixins.toolbar
}));

const Content = ({ tasks }) => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Typography variant="h6" gutterBottom className={classes.title}>
        Inbox
      </Typography>
      {tasks.map(({ id, ...otherProps }) => (
        <ContentTask key={id} taskId={id} {...otherProps} />
      ))}
      <ContentAddTask />
    </main>
  );
};

const mapStateToProps = createStructuredSelector({
  tasks: selectTasks
});

export default connect(mapStateToProps)(Content);
