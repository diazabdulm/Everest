import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import logger from "redux-logger";

import drawerReducer from "./drawer.module";
import projectsReducer from "./projects.module";
import tasksReducer from "./tasks.module";

const middlewares = [];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const rootReducer = combineReducers({
  drawer: drawerReducer,
  projects: projectsReducer,
  tasks: tasksReducer
});

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
