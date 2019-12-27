import { createSlice, createSelector } from "@reduxjs/toolkit";

const visibilityFilter = createSlice({
	name: "visibilityFilter",
	initialState: "SHOW_ALL",
	reducers: {
		setVisibilityFilter: (state, action) => action.payload
	}
});

export const { setVisibilityFilter } = visibilityFilter.actions;

export default visibilityFilter.reducer;

const getVisibilityFilter = state => state.visibilityFilter;
const getTasks = state => state.tasks;

export const getVisibleTasks = createSelector(
	[getVisibilityFilter, getTasks],
	(visibilityFilter, todos) => {}
);
