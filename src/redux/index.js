import { combineReducers } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";

import { firebaseReducer } from "react-redux-firebase";
import { createFirestoreInstance, firestoreReducer } from "redux-firestore";

import firebase from "../common/firebase.utils";

import drawerReducer from "./drawerSlice";

const reactReduxFirebaseConfig = {};

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
  firebase: firebaseReducer,
  firestore: firestoreReducer
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

const reactReduxFirebaseProps = {
  firebase,
  config: reactReduxFirebaseConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

export { store, persistor, reactReduxFirebaseProps };
