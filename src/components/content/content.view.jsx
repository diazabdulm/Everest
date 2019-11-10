import React from "react";
import Typography from "@material-ui/core/Typography";

import Task from "./task";

import useStyles from "./content.styles";

const Content = ({ projectName, tasks }) => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Typography variant="h6" gutterBottom className={classes.title}>
        Productivity
      </Typography>
      {[{ id: 0, name: "Do Homework" }, { id: 1, name: "Clean" }].map(
        ({ id, name }) => (
          <Task key={id} name={name} />
        )
      )}
    </main>
  );
};

export default Content;
