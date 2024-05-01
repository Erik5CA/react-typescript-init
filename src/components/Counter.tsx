import { useState } from "react"

function Counter() {

    const [counter, setCounter] = useState(0)
    const incrementar = (numero: number = 1): void => {
        setCounter(counter + numero)
    }
  return (
    <div>
        <h3>Counter</h3>
        <span>Valor: {counter}</span>
        <br />
        <br />
        <button onClick={() => incrementar()}>+1</button>
        <button onClick={() => incrementar(2)}>+2</button>
        <button onClick={() => setCounter(0)}>Reset</button>
    </div>
  )
}

export default Counter