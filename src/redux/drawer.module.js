import { createSelector } from "reselect";

const TOGGLE_DRAWER = "everest/drawer/TOGGLE_DRAWER";

const INITIAL_STATE = {
  open: false
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return {
        ...state,
        open: !state.open
      };
    default:
      return state;
  }
}

export const toggleDrawer = () => ({
  type: TOGGLE_DRAWER
});

const selectDrawer = state => state.drawer;

export const selectDrawerState = createSelector(
  [selectDrawer],
  drawer => drawer.open
);
