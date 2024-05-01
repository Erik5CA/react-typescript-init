import { Todo, TodoState } from "../interfaces/interfaces";

type TodoActions =
  | { type: "ADD_TODO"; payload: Todo }
  | { type: "TOGGLE_TODO"; payload: { id: string } };

export const todoReducer = (
  state: TodoState,
  action: TodoActions
): TodoState => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map(({ ...todo }) => {
          if (todo.id === action.payload.id) {
            todo.completed = !todo.completed;
          }
          return todo;
        }),
        completed: state.todos.filter(({ ...todo }) => todo.completed).length,
        pending: state.todos.filter(({ ...todo }) => !todo.completed).length,
      };
    default:
      return state;
  }
};
