import { useState } from "react";

interface User {
  id: string;
  name: string;
}

function Usuario() {
  const [user, setUser] = useState<User>();
  const login = () => {
    setUser({
      id: "ABC123",
      name: "Erik Castillo",
    });
  };
  return (
    <div>
      <h3>Usuario</h3>
      <button onClick={login}>Login</button>
      {!user ? <pre> No hay usuario </pre> : <pre> {JSON.stringify(user)}</pre>}
    </div>
  );
}

export default Usuario;
