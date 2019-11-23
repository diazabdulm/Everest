import v4 from "uuid/v4";
import { createSlice } from "@reduxjs/toolkit";

const tasks = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: ({ text, projectId }) => ({
        payload: { id: v4(), text, projectId }
      })
    },
    removeTask: (state, action) =>
      state.filter(task => task.id !== action.payload)
  }
});

export const { addTask, removeTask } = tasks.actions;

export const selectProjectTasks = (state, projectId) =>
  state.tasks.filter(task => task.projectId === projectId);

export default tasks.reducer;
