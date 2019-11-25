import { combineReducers } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";

import drawerReducer from "./drawer.module";
import projectsReducer from "./projects.module";
import tasksReducer from "./tasks.module";
import userReducer from "./user.module";

const middlewares = [];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const persistConfig = {
  key: "root",
  storage
};

const rootReducer = combineReducers({
  drawer: drawerReducer,
  projects: projectsReducer,
  tasks: tasksReducer,
  user: userReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false
    }),
    ...middlewares
  ]
});

const persistor = persistStore(store);

export { store, persistor };