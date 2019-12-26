import { createSlice } from "@reduxjs/toolkit";

import { tasksRef } from "../common/firebase.utils";

const tasks = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    setTasks: (state, action) => action.payload
  }
});

export const { setTasks } = tasks.actions;

export default tasks.reducer;

export const selectProjectTasks = projectId => {
  
}

export const addTask = newTask => async dispatch => tasksRef.add(newTask);

export const removeTask = taskId => async dispatch =>
  tasksRef.doc(taskId).remove();

export const fetchTasks = () => async dispatch =>
  tasksRef.onSnapshot(snapshot => {
    setTasks(snapshot.data());
  });
