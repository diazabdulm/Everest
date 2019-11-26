import { createSlice } from "@reduxjs/toolkit";

import {
  auth,
  googleProvider,
  getCurrentUser,
  createUserProfileDocument
} from "../firebase/firebase.utils";

const user = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    error: null
  },
  reducers: {
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.error = null;
    },
    signOutSuccess: state => {
      state.currentUser = null;
      state.error = null;
    },
    processFailure: (state, action) => {
      state.error = action.payload;
    }
  }
});

export const { signInSuccess, signOutSuccess, processFailure } = user.actions;

export default user.reducer;

export const getSnapshotFromUserAuth = (userAuth, additionalData) => {
  return async dispatch => {
    try {
      const userRef = await createUserProfileDocument(userAuth, additionalData);
      const userSnapshot = await userRef.get();
      dispatch(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    } catch (error) {
      dispatch(processFailure(error));
    }
  };
};

export const signInWithGoogle = () => {
  return async dispatch => {
    try {
      const { user } = await auth.signInWithPopup(googleProvider);
      dispatch(getSnapshotFromUserAuth(user));
    } catch (error) {
      dispatch(processFailure(error));
    }
  };
};

export const isUserAuthenticated = () => {
  return async dispatch => {
    try {
      const userAuth = await getCurrentUser();
      if (!userAuth) return;
      dispatch(getSnapshotFromUserAuth(userAuth));
    } catch (error) {
      dispatch(processFailure(error));
    }
  };
};

export const signOut = () => {
  return dispatch => {
    try {
      auth.signOut();
      dispatch(signOutSuccess());
    } catch (error) {
      dispatch(processFailure(error));
    }
  };
};