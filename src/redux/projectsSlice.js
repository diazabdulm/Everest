import { createSlice } from "@reduxjs/toolkit";

import { projectsRef, convertSnapshotToMap } from "../common/firebase.utils";

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

export const selectCurrentProjectName = (state, projectId) =>
  state.projects.find(project => project.id === projectId).name;

export const addProject = name => async (dispatch, getState) => {
  try {
    const newProjectData = {
      userId: getState().user.currentUser.id,
      name: name.trim(),
      createdAt: new Date()
    };
    await projectsRef.add(newProjectData);
  } catch (error) {
    console.error(error);
  }
};

export const deleteProject = projectId => dispatch =>
  projectsRef.doc(projectId).delete();

export const fetchProjects = () => dispatch =>
  projectsRef.onSnapshot(snapshot => {
    setProjects(snapshot.data());
  });

export const subscribeToUserProjects = setUnsubscribe => {
  return (dispatch, getState) => {
    const userId = getState().user.currentUser.id;

    const unsubscribe = projectsRef
      .orderBy("createdAt", "asc")
      .where("userId", "==", userId)
      .onSnapshot(snapshot => {
        const data = convertSnapshotToMap(snapshot);
        dispatch(setProjects(data));
      });

    setUnsubscribe(unsubscribe);
  };
};
