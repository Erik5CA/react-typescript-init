import { useTodos } from "../hooks/useTodos";

function Title() {
  const { pendingTodos, completedTodos } = useTodos();
  return (
    <>
      <h3>Todos pending: {pendingTodos}</h3>
      <h3>Todos completed: {completedTodos}</h3>
    </>
  );
}

export default Title;
