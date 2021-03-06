import { createSlice, createSelector } from "@reduxjs/toolkit";

import {
  auth,
  googleProvider,
  getCurrentUser,
  createUserProfileDocument
} from "../common/firebase.utils";

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
    signOutSuccess: () => ({
      currentUser: null,
      error: null
    }),
    processError: (state, action) => {
      state.error = action.payload;
    }
  }
});

export const { signInSuccess, signOutSuccess, processError } = user.actions;

export default user.reducer;

export const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);

export const selectDisplayName = createSelector(
  [selectCurrentUser],
  user => user.displayName
);

export const getSnapShotFromUserAuth = (
  userAuth,
  additionalData
) => async dispatch => {
  try {
    const userRef = await createUserProfileDocument(userAuth, additionalData);
    const userSnapshot = await userRef.get();
    dispatch(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    dispatch(processError(error));
  }
};

export const checkUserSession = () => async dispatch => {
  try {
    const userAuth = await getCurrentUser();
    if (!userAuth) return;
    dispatch(getSnapShotFromUserAuth(userAuth));
  } catch (error) {
    dispatch(processError(error));
  }
};

export const signInWithGoogle = () => async dispatch => {
  try {
    const { user } = await auth.signInWithPopup(googleProvider);
    dispatch(getSnapShotFromUserAuth(user));
  } catch (error) {
    dispatch(processError(error));
  }
};

export const signInWithEmail = (email, password) => async dispatch => {
  try {
    const { user } = await auth.signInWithEmailAndPassword(email, password);
    dispatch(getSnapShotFromUserAuth(user));
  } catch (error) {
    dispatch(processError(error));
  }
};

export const signInAfterSignUp = (user, additionalData) => async dispatch =>
  dispatch(getSnapShotFromUserAuth(user, additionalData));

export const signUp = (displayName, email, password) => async dispatch => {
  try {
    const { user } = await auth.createUserWithEmailAndPassword(email, password);
    dispatch(signInAfterSignUp(user, displayName));
  } catch (error) {
    dispatch(processError(error));
  }
};

export const signOut = () => async dispatch => {
  try {
    await auth.signOut();
    dispatch(signOutSuccess());
  } catch (error) {
    dispatch(processError(error));
  }
};
