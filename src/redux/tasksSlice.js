import chrono from "chrono-node";
import { createSlice } from "@reduxjs/toolkit";

import { tasksRef, convertSnapshotToMap } from "../common/firebase.utils";

const tasks = createSlice({
   name: "tasks",
   initialState: [],
   reducers: {
      setTasks: (state, action) => action.payload
   }
});

export const { setTasks } = tasks.actions;

export default tasks.reducer;

export const selectProjectTasks = (state, projectId) =>
   state.tasks.filter(task => task.projectId === projectId);

export const addTask = ({ name, projectId }) => async (dispatch, getState) => {
   try {
      const newTaskData = {
         userId: getState().user.currentUser.id,
         name: name.trim(),
         createdAt: new Date(),
         date: chrono.parseDate(name),
         projectId
      };
      await tasksRef.add(newTaskData);
   } catch (error) {
      throw new Error(error);
   }
};

export const deleteTask = taskId => dispatch => tasksRef.doc(taskId).delete();

export const subscribeToUserTasks = setUnsubscribe => {
   return (dispatch, getState) => {
      const userId = getState().user.currentUser.id;

      const unsubscribe = tasksRef
         .orderBy("createdAt", "desc")
         .where("userId", "==", userId)
         .onSnapshot(snapshot => {
            const data = convertSnapshotToMap(snapshot);
            dispatch(setTasks(data));
         });

      setUnsubscribe(unsubscribe);
   };
};
