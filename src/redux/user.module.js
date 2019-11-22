import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    setUser(state, action) {
      state = action.payload;
      return state;
    }
  }
});

export const { setUser } = user.actions;

export default user.reducer;
