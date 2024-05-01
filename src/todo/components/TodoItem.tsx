// import { useContext } from "react";
import { Todo } from "../interfaces/interfaces";
// import { TodoContext } from "../context/todoContext";
import { useTodos } from "../hooks/useTodos";

interface TodoItemProps {
  todo: Todo;
}

function TodoItem({ todo }: TodoItemProps) {
  //   const { toggleTodo } = useContext(TodoContext);
  const { toggleTodo } = useTodos();

  const handleClick = () => {
    toggleTodo(todo.id);
  };
  return (
    <li
      style={{
        cursor: "pointer",
        textDecoration: todo.completed ? "line-through" : "",
      }}
      onDoubleClick={handleClick}
    >
      {todo.desc}
    </li>
  );
}

export default TodoItem;
