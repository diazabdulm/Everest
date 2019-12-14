import { createSlice } from "@reduxjs/toolkit";

import { projectsRef } from "../common/firebase.utils";

const projectsSlice = createSlice({
  name: "projects",
  initialState: [],
  reducers: {
    setProjects: (state, action) => action.payload
  }
});

export const { setProjects } = projectsSlice.actions;

export default projectsSlice.reducer;

export const selectProjects = state => state.projects;

// export const selectCurrentProjectName = state => state.projects.filter(project => project.id === project)

export const addProject = newProject => async dispatch =>
  projectsRef.add(newProject);

export const removeProject = projectId => async dispatch =>
  projectsRef.doc(projectId).remove();

export const fetchProjects = () => async dispatch =>
  projectsRef.onSnapshot(snapshot => {
    setProjects(snapshot.data());
  });
