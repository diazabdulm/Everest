import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import moment from "moment";

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
