import { useReducer } from "react";

const initialState = {
  contador: 0,
};

type ActionType =
  | { type: "INCREMENTAR" }
  | { type: "DECREMENTAR" }
  | { type: "CUSTOM"; payload: number };

function contadorReducer(state: typeof initialState, action: ActionType) {
  switch (action.type) {
    case "INCREMENTAR":
      return { ...state, contador: state.contador + 1 };
    case "DECREMENTAR":
      return { ...state, contador: state.contador - 1 };
    case "CUSTOM":
      return { ...state, contador: action.payload };
    default:
      return state;
  }
}
function ContadorRed() {
  const [{ contador }, dispatch] = useReducer(contadorReducer, initialState);
  return (
    <>
      <h2>Contador: {contador}</h2>
      <button onClick={() => dispatch({ type: "INCREMENTAR" })}>
        Incrementar
      </button>
      <button onClick={() => dispatch({ type: "DECREMENTAR" })}>
        Decrementar
      </button>
      <button onClick={() => dispatch({ type: "CUSTOM", payload: 100 })}>
        100
      </button>
    </>
  );
}

export default ContadorRed;
