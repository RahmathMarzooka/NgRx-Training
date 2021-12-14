import store from "./store";

let allTodos = [
  {
    id: 1,
    title: "Go to gym",
    isChecked: false,
  },
  {
    id: 2,
    title: "Buy milk",
    isChecked: false,
  },
  {
    id: 3,
    title: "Write article",
    isChecked: false,
  },
  {
    id: 4,
    title: "go to market",
    isChecked: false,
  },
  {
    id: 5,
    title: "study for one hour",
    isChecked: false,
  },
];
let initialState = {
  allTodos: allTodos,
  isAllCompleted: false,
};

function rootReducer(state: any = initialState, action: any) {
  switch (action.type) {
    case "TODO_CHECKED": {
      const allTodos = state.allTodos.map((t: any) => {
        if (t.id === action.payload.id) {
          return {
            ...t,
            isChecked: !t.isChecked,
          };
        }
        return t;
      });

      return {
        ...state,
        allTodos,
      };
    }
    case "TODO_ADDED": {
      const allTodos = [
        ...state.allTodos,
        {
          id: 6,
          title: action.payload,
          isChecked: false,
        },
      ];
      return {
        ...state,
        allTodos,
      };
    }
  }
  return state;
}

export default rootReducer;
