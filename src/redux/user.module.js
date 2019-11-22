import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    setUser(state, action) {
      state = action.payload;
    }
  }
});

export const { setUser } = user.actions;

export default user.reducer;
