import React, { useState } from "react";
import chrono from "chrono-node";
import { useSelector } from "react-redux";
import { useFirestore } from "react-redux-firebase";
import { TextField } from "@material-ui/core";

const AddTask = ({ projectId }) => {
  const [name, setName] = useState("");
  const firestore = useFirestore();
  const userId = useSelector(state => state.firebase.auth.uid);

  const handleNameChange = event => setName(event.target.value);

  const handleTaskAdd = event => {
    if (event.key === "Enter") {
      const newTask = {
        userId,
        projectId,
        name: name.trim(),
        date: chrono.parseDate(name),
        createdAt: firestore.FieldValue.serverTimestamp()
      };

      return firestore
        .collection("tasks")
        .add({
          userId,
          projectId,
          name: name.trim(),
          date: chrono.parseDate(name),
          createdAt: firestore.FieldValue.serverTimestamp()
        })
        .then(() => setName(""))
        .catch(() => alert("An error occurred. Please try again later."));
    }
  };

  return (
    <TextField
      id="outlined-basic"
      label="Add Task"
      variant="filled"
      fullWidth
      onChange={handleNameChange}
      onKeyPress={handleTaskAdd}
      value={name}
    />
  );
};

export default AddTask;