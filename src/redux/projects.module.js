import { createSelector } from "reselect";

const ADD_PROJECT = "everest/projects/ADD_PROJECT";

const INITIAL_STATE = {
  collection: []
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_PROJECT:
      return {
        ...state,
        collection: [...state.collection, action.payload]
      };
    default:
      return state;
  }
}

export const addProject = projectData => ({
  type: ADD_PROJECT,
  payload: projectData
});

const selectProjects = state => state.projects.collection;

export const selectProject = name =>
  createSelector(
    [selectProjects],
    collection =>
      collection.find(collectionItem => collectionItem.name === name)
  );
