const ADD_TASK = "everest/tasks/ADD_TASK";
const REMOVE_TASK = "everest/tasks/REMOVE_TASK";

export default function reducer(state = [], action) {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];
    case REMOVE_TASK:
      return state.filter(task => task.id !== action.payload);
    default:
      return state;
  }
}

export const addTask = taskData => ({
  type: ADD_TASK,
  payload: taskData
});

export const removeTask = taskId => ({
  type: REMOVE_TASK,
  payload: taskId
});

export const selectTasks = state => state.tasks;
