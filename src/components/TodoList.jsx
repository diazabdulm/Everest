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
}));

const TodoList = ({ header, projectName, tasksData, toggleDrawer }) => {
  const classes = useStyles();
  const [addFormValue, setAddFormValue] = useState("");

  const handleInputChange = event => setAddFormValue(event.target.value);

  const handleFormSubmit = event => {
    if (event.key === "Enter") {
      setAddFormValue("");
    }
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
      {header}
    </main>
  );
};

export default TodoList;
