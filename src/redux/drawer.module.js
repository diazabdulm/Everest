import { createSlice } from "@reduxjs/toolkit";

const drawer = createSlice({
  name: "drawer",
  initialState: {
    open: false,
    width: 240
  },
  reducers: {
    toggleDrawer: state => {
      state.open = !state.open;
    }
  }
});

export const { toggleDrawer } = drawer.actions;

export default drawer.reducer;
