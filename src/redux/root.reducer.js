import { combineReducers } from "redux";

import drawerReducer from "./ducks/drawer.duck";
import projectsReducer from "./ducks/projects.duck";

const rootReducer = combineReducers({
  drawer: drawerReducer,
  projects: projectsReducer
});

export default rootReducer;
