import { createSlice, createSelector } from "@reduxjs/toolkit";

const visibilityFilter = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {}
});

export default visibilityFilter.reducer;

const getVisibilityFilter = state => state.visibilityFilter;
const getTasks = state => state.tasks;

export const getVisibleTasks = createSelector(
  [getVisibilityFilter, getTasks],
  (visibilityFilter, todos) => {}
);
