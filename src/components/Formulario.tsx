// import { ChangeEvent, useState } from "react";
import { useForm } from "../hooks/useForm";

interface FormData {
  email: string;
  nombre: string;
}

function Formulario() {
  //   const [formulario, setFormulario] = useState({
  //     email: "",
  //     nombre: "",
  //   });

  //   const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
  //     const { name, value } = target;
  //     setFormulario({
  //       ...formulario,
  //       [name]: value,
  //     });
  //   };

  const { formulario, handleChange } = useForm<FormData>({
    email: "erik@email.com",
    nombre: "erik",
  });

  const { email, nombre } = formulario;

  return (
    <form>
      <div>
        <label>Email:</label>
        <br />
        <input
          type="emial"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Nombre:</label>
        <br />
        <input
          type="text"
          name="nombre"
          value={nombre}
          onChange={handleChange}
        />
      </div>

      <pre>{JSON.stringify(formulario)}</pre>
    </form>
  );
}

export default Formulario;
