import { ProjectsTypes } from "./projects.types";

const INITIAL_STATE = {
  collection: {
    default: [
      { id: 0, title: "Inbox" },
      { id: 1, title: "Today" },
      { id: 2, name: "Next 7 Days" }
    ],
    user: {}
  }
};

const projectsReducer = (state = INITIAL_STATE, action) => {
  switch (action.payload) {
    case ProjectsTypes.ADD_PROJECT:
      return {
        ...state,
        collection: [...state.collection.user, action.payload]
      };
    default:
      return state;
  }
};

export default projectsReducer;
