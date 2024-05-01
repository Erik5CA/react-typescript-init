import { useReducer } from "react";
import { Todo, TodoState } from "../interfaces/interfaces";
import { TodoContext } from "./todoContext";
import { todoReducer } from "./todoRecuder";

interface props {
  children: JSX.Element | JSX.Element[];
}

const INITIAL_STATE: TodoState = {
  todoCount: 2,
  todos: [
    {
      id: "1",
      desc: "Learn React",
      completed: false,
    },
    {
      id: "2",
      desc: "Learn Redux",
      completed: false,
    },
  ],
  completed: 0,
  pending: 2,
};

function TodoProviser({ children }: props) {
  const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE);

  const addNewTodo = (desc: string) => {
    const id = Math.random().toString();
    const newTodo: Todo = {
      id,
      desc,
      completed: false,
    };
    dispatch({ type: "ADD_TODO", payload: newTodo });
  };

  const toggleTodo = (id: string) => {
    dispatch({ type: "TOGGLE_TODO", payload: { id } });
  };

  return (
    <TodoContext.Provider value={{ todoState, toggleTodo, addNewTodo }}>
      {children}
    </TodoContext.Provider>
  );
}

export default TodoProviser;
