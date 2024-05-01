import { useState } from "react";
import { useTodos } from "../hooks/useTodos";

function AddTodo() {
  const [descTodo, setDescTodo] = useState("");

  const { addNewTodo } = useTodos();

  const handleAddTodo = () => {
    addNewTodo(descTodo);
    setDescTodo("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Title todo..."
        value={descTodo}
        onChange={(e) => setDescTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
}

export default AddTodo;
