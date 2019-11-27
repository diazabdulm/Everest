import v4 from "uuid/v4";
import chrono from "chrono-node";
import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import moment from "moment";

import { signOutSuccess } from "./user.module";

import {
  firestore,
  convertTasksSnapshotToMap
} from "../firebase/firebase.utils";

const tasks = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: ({ text, projectId }) => ({
        payload: {
          id: v4(),
          date: chrono.parseDate(text),
          text,
          projectId
        }
      })
    },
    removeTask: (state, action) =>
      state.filter(task => task.id !== action.payload),
    setTasks: (state, action) => {
      state = action.payload;
      return state;
    }
  },
  extraReducers: {
    [signOutSuccess]: () => [] // clear tasks upon user sign out
  }
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

export const selectProjectTasks = (state, currentProjectId) => {
  return state.tasks.filter(task => task.projectId === currentProjectId);
};

export const fetchTasks = () => {
  return async (dispatch, getState) => {
    try {
      const userId = getState().user.currentUser.id;
      const tasksRef = firestore.collection("users").doc(userId).collection("tasks");
      const snapshot = await tasksRef.get();
      const taskCollection = convertTasksSnapshotToMap(snapshot);
      dispatch(setTasks(taskCollection));
    } catch (error) {
      console.log(error);
    }
  };
};
