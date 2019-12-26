import { createSlice } from "@reduxjs/toolkit";

import { tasksRef, convertSnapshotToMap } from "../common/firebase.utils";

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
          text,
          projectId
        }
      })
    },
    setTasks: action => action.payload
  }
});

export const { setTasks } = tasks.actions;

export default tasks.reducer;

export const selectProjectTasks = projectId => {};

export const addTask = newTask => async dispatch => tasksRef.add(newTask);

export const removeTask = taskId => async dispatch =>
  tasksRef.doc(taskId).remove();

export const subscribeToUserTasks = setUnsubscribe => {
  return (dispatch, getState) => {
    const userId = getState().user.currentUser.id;

    const unsubscribe = tasksRef
      .where("userId", "==", userId)
      .onSnapshot(snapshot => {
        const data = convertSnapshotToMap(snapshot);
        dispatch(setTasks(data));
      });

    setUnsubscribe(unsubscribe);
  };
};
