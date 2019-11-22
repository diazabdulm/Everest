import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import drawerReducer from "./drawer.module";
import projectsReducer from "./projects.module";
import tasksReducer from "./tasks.module";
import userReducer from "./user.module";

const middlewares = [];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const rootReducer = combineReducers({
  drawer: drawerReducer,
  projects: projectsReducer,
  tasks: tasksReducer,
  user: userReducer
});

const store = configureStore({
  reducer: rootReducer,
  middlewares
});

export default store;
