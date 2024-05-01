import { useContext } from "react";
import { TodoContext } from "../context/todoContext";

export const useTodos = () => {
  const { todoState, toggleTodo, addNewTodo } = useContext(TodoContext);
  const { todos, pending, completed } = todoState;
  return {
    todos: todos,
    pendingTodos: pending,
    completedTodos: completed,
    toggleTodo,
    addNewTodo,
  };
};
