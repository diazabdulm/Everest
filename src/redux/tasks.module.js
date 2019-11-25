import v4 from "uuid/v4";
import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

import { addUserData } from "../firebase/firebase.utils";

const tasks = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: payload => ({
        payload: { id: v4(), ...payload }
      })
    },
    removeTask: (state, action) =>
      state.filter(task => task.id !== action.payload),
    setTasks: (state, action) => {
      state = action.payload;
      return state;
    }
  }
});

export const { addTask, removeTask, setTasks } = tasks.actions;

export default tasks.reducer;

export const selectProjectTasks = (state, currentProjectId) => {
  console.log(currentProjectId)
  return state.tasks.filter(task => task.projectId === currentProjectId);
};

export const selectAllTasks = state => state.tasks;

export const selectTodayTasks = state => {
  const today = new Date();
  return state.tasks.filter(
    task => task.date && moment(task.date).isSame(today, "day")
  );
};

export const selectWeekTasks = state => {
  const nextWeek = moment().add(5, "days");
  return state.tasks.filter(task => moment(task.date).isBefore(nextWeek));
};

export const beginAddTask = taskData => {
  return async (dispatch, getState) => {
    const userId = getState().user.currentUser.id;
    console.log(taskData);

    try {
      await addUserData(userId, "tasks", taskData);
      dispatch(addTask(taskData));
    } catch (error) {
      console.log(`failure ${error}`);
    }
  };
};
