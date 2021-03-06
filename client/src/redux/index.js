import { combineReducers } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";

import tasks from "./tasksSlice";
import projects from "./projectsSlice";
import visibilityFilter from "./visibilityFilterSlice";
import user from "./userSlice";

const middlewares = [];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const persistConfig = {
  key: "root",
  storage
};

const rootReducer = combineReducers({
  tasks,
  projects,
  visibilityFilter,
  user
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false
    }),
    ...middlewares
  ]
});

export const persistor = persistStore(store);
