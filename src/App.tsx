// import './App.css'

import Counter from "./components/Counter";
import Usuario from "./components/Usuario";

import TimerPadre from "./components/TimerPadre";
import ContadorRed from "./components/ContadorRed";
import Formulario from "./components/Formulario";
import Todo from "./todo/Todo";

function App() {
  return (
    <>
      <h1>React +TypeScript</h1>
      <hr />
      <h2>useState</h2>
      <Counter />
      <br />
      <Usuario />
      <hr />
      <h2>useEffect - useRef</h2>
      <TimerPadre />
      <hr />
      <h2>useReducer</h2>
      <ContadorRed />
      <hr />
      <h2>customHooks</h2>
      <Formulario />
      <hr />
      <h2>Todo App</h2>
      <Todo />
    </>
  );
}

export default App;
