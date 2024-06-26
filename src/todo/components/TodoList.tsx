// import { useContext } from "react";
// import { TodoContext } from "../context/todoContext";
import TodoItem from "./TodoItem";
import { useTodos } from "../hooks/useTodos";

function TodoList() {
  //   const { todoState } = useContext(TodoContext);
  //   const { todos } = todoState;
  const { todos } = useTodos();
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
