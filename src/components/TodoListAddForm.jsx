import React, { useState } from "react";
import chrono from "chrono-node";
import { useDispatch } from "react-redux";
// import { useFirestore } from "react-redux-firebase";
import { makeStyles, TextField } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  textField: {
    marginBottom: theme.spacing(2)
  },
  input: {
    padding: theme.spacing(2),
    borderRadius: "4px"
  }
}));

const ProjectAddTask = ({ projectId }) => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleNameChange = event => setName(event.target.value);

  const handleTaskAdd = event => {
    if (event.key === "Enter") {
      // return firestore
      //   .collection("tasks")
      //   .add({
      //     userId,
      //     projectId,
      //     name: name.trim(),
      //     date: chrono.parseDate(name),
      //     createdAt: firestore.FieldValue.serverTimestamp()
      //   })
      //   .then(() => setName(""))
      //   .catch(() => alert("An error occurred. Please try again later."));
    }
  };

  return (
    <TextField
      variant="filled"
      placeholder="Add a task..."
      fullWidth
      onChange={handleNameChange}
      onKeyPress={handleTaskAdd}
      value={name}
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

export default ProjectAddTask;
