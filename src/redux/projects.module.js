import { omit } from "lodash";
import { createSelector } from "reselect";

const ADD_PROJECT = "everest/tasks/ADD_PROJECT";
const REMOVE_PROJECT = "everest/tasks/REMOVE_PROJECT";
const ADD_TASK = "everest/tasks/ADD_TASK";
const REMOVE_TASK = "everest/tasks/REMOVE_TASK";

export default function reducer(state = {}, action) {
  switch (action.type) {
    case ADD_PROJECT:
      const id = new Date().getTime();
      return {
        ...state,
        [id]: { id, ...action.payload }
      };
    case REMOVE_PROJECT:
      return omit(state, action.payload);
    case ADD_TASK:
      return {
        ...state,
        [action.payload.projectId]: {
          tasks: [
            ...state[action.payload.projectId].tasks,
            action.payload.newTaskData
          ]
        }
      };
    case REMOVE_TASK:
      return {
        ...state,
        [action.payload.projectId]: {
          tasks: [
            ...state.action.payload.projectId.tasks,
            action.payload.newTaskData
          ]
        }
      };
    default:
      return state;
  }
}

export const addProject = projectData => ({
  type: ADD_PROJECT,
  payload: projectData
});

export const removeProject = projectId => ({
  type: REMOVE_PROJECT,
  payload: projectId
});

export const addTask = taskData => ({
  type: ADD_TASK,
  payload: taskData
});

export const removeTask = taskId => ({
  type: REMOVE_TASK,
  payload: taskId
});

const selectProjects = state => state.projects;

export const selectProject = projectId =>
  createSelector([selectProjects], projects => projects[projectId]);


export const selectProjectList = createSelector([selectProjects], projects =>
  Object.keys(projects)
    .map(id => projects[id])
    .sort((a, b) => a - b)
);
