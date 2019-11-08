import { createSelector } from "reselect";

const selectProjects = state => state.projects;

export const selectProjectTitles = category =>
  createSelector(
    [selectProjects],
    projects => projects[category].map(({ title }) => title)
  );
