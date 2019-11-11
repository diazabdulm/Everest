import { createSelector } from "reselect";

const ADD_PROJECT = "everest/projects/ADD_PROJECT";

export default function reducer(state = [], action) {
  switch (action.type) {
    case ADD_PROJECT:
      return [...state, action.payload];
    default:
      return state;
  }
}

export const addProject = projectData => ({
  type: ADD_PROJECT,
  payload: projectData
});

export const selectProjects = state => state.projects;

export const selectIndividualProject = name =>
  createSelector(
    [selectProjects],
    projects =>
      projects.find(individualProject => individualProject.name === name)
  );
