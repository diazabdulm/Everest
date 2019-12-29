import { combineReducers } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";

import tasks from "./tasksSlice";
import projects from "./projectsSlice";
import visibilityFilter from "./visibilityFilterSlice";
import user from "./userSlice";

const middlewares = [];

if (process.env.NODE_ENV === "development") {
   middlewares.push(logger);
}

const rootReducer = combineReducers({
   tasks,
   projects,
   visibilityFilter,
   user
});

const store = configureStore({
   reducer: rootReducer,
   middleware: [
      ...getDefaultMiddleware({
         serializableCheck: false
      }),
      ...middlewares
   ]
});

export default store;
