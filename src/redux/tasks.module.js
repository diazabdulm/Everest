import v4 from "uuid/v4";
import chrono from "chrono-node";
import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import moment from "moment";

import { firestore } from "../firebase/firebase.utils";

const tasks = createSlice({
  name: "tasks",
  initialState: []
});

export const { addTask, removeTask, setTasks } = tasks.actions;

export default tasks.reducer;

export const selectAllTasks = state => state.tasks;

export const selectTodayTasks = createSelector([selectAllTasks], tasks => {
  const today = moment();
  return tasks.filter(task => moment(task.date).isSame(today, "day"));
});

export const selectWeekTasks = createSelector([selectAllTasks], tasks => {
  const nextWeek = moment().add(5, "days");
  return tasks.filter(task => moment(task.date).isBefore(nextWeek));
});

export const selectInboxTasks = createSelector([selectAllTasks], tasks =>
  tasks.filter(task => task.projectId === 0)
);