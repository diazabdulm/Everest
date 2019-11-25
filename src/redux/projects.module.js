import v4 from "uuid/v4";
import { createSlice } from "@reduxjs/toolkit";

const projects = createSlice({
  name: "projects",
  initialState: [],
  reducers: {
    addProject: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: text => ({
        payload: { id: v4(), text }
      })
    },
    removeProject: (state, action) =>
      state.filter(project => project.id !== action.payload.id),
    setProjects: (state, action) => {
      state = action.payload;
      return state;
    }
  }
});

export const { addProject, removeProject, setProjects } = projects.actions;

export const selectCurrentProject = (state, projectId) =>
  state.projects.find(project => project.id === projectId);

export default projects.reducer;
