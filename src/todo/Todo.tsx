import AddTodo from "./components/AddTodo";
import Title from "./components/Title";
import TodoList from "./components/TodoList";
import TodoProviser from "./context/TodoProviser";
// import { useTodos } from "./hooks/useTodos";

function Todo() {
  // const {pendingTodos} = useTodos()
  return (
    <TodoProviser>
      <AddTodo />
      <Title />
      <TodoList />
    </TodoProviser>
  );
}

export default Todo;
