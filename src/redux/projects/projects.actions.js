import { ProjectsTypes } from "./projects.types";

export const addProject = projectData => ({
  type: ProjectsTypes.ADD_PROJECT,
  payload: projectData
});
