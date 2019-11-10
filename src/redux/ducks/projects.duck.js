const ADD_PROJECT = "everest/projects/ADD_PROJECT";

const INITIAL_STATE = {
  collection: [
    {
      id: 0,
      title: "Work"
    },
    {
      id: 1,
      title: "Family"
    },
    {
      id: 2,
      title: "College"
    }
  ]
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.payload) {
    case ADD_PROJECT:
      return {
        ...state,
        collection: [...state.collection, action.payload]
      };
    default:
      return state;
  }
}

export const addProject = projectData => ({
  type: ADD_PROJECT,
  payload: projectData
});
