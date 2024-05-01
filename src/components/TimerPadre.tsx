import { useState } from "react";
import Timer from "./Timer";

function TimerPadre() {
    const [milisegundos, setMilisegundos] = useState(1000);
  return (
    <>
      <span>Milisegundos {1000}</span>
      <br />
      <button onClick={() => setMilisegundos(1000)}>1000</button>
      <button onClick={() => setMilisegundos(3000)}>3000</button>
      <Timer milisegundos={milisegundos}/>
    </>
  );
}

export default TimerPadre