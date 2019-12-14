import React, { useState } from "react";
import {
  makeStyles,
  IconButton,
  TextField,
  Typography
} from "@material-ui/core";
import {
  MenuRounded as MenuIcon,
  MoreHoriz as MoreIcon
} from "@material-ui/icons";

import TodoListItem from "./TodoListItem";

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  textField: {
    marginBottom: theme.spacing(2)
  },
  input: {
    padding: theme.spacing(2),
    borderRadius: "4px"
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
  projectActions: {
    position: "absolute",
    right: 0
  }
}));

const TodoList = ({ projectName, tasksData, toggleDrawer }) => {
  const classes = useStyles();
  const [addFormValue, setAddFormValue] = useState("");

  const handleInputChange = event => setAddFormValue(event.target.value);

  const handleFormSubmit = event => {
    if (event.key === "Enter") {
      setAddFormValue("");
    }
  };

  const renderHeader = () => {
    return (
      <div className={classes.header}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          className={classes.menuButton}
          onClick={toggleDrawer}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h5">{projectName}</Typography>
        <IconButton
          color="inherit"
          aria-label="open project actions"
          edge="end"
          className={classes.projectActions}
        >
          <MoreIcon />
        </IconButton>
      </div>
    );
  };

  const renderAddForm = () => {
    return (
      <TextField
        variant="filled"
        placeholder="Add a task..."
        fullWidth
        onChange={handleInputChange}
        onKeyPress={handleFormSubmit}
        value={addFormValue}
        InputProps={{
          disableUnderline: true,
          classes: {
            input: classes.input
          }
        }}
        className={classes.textField}
      />
    );
  };

  const renderTasks = () => {
    const tasks = tasksData.map(({ id, ...otherProps }) => (
      <TodoListItem key={id} {...otherProps} />
    ));

    if (tasksData) return tasks;
    return null;
  };

  return (
    <main className={classes.content}>
      {renderHeader()}
      {renderAddForm()}
      {renderTasks()}
    </main>
  );
};

export default TodoList;
