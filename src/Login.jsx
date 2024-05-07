import { useState, useEffect } from "react";
import Header from "./Componentes/Header";
import Footer from "./Componentes/Footer";
import { Api } from "../Api";
import { Link } from "react-router-dom";

function Login() {
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");

  const api = async () => {
    try {
      await Api();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    api();
  }, []);

  const handleSubmit = async () => {
    try {
      const info = {
        username: usuario,
        password: contraseña,
      };
      const response = await fetch(`http://localhost:22513/admin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(info),
      });

      if (!response.ok) {
        console.error('Error al traer la info')
      }

      const data = await response.json()
      const token = data.token
      localStorage.setItem('token', token)
      window.location.reload(); 
    } catch (error) {
      console.error("Error al enviar la solicitud", error);
    }
  };

  return (
    <>
      <Header />
      <div className="login-form">
        <form>
          <div className="input-group">
            <label htmlFor="usuario">Nombre de usuario</label>
            <input
              type="text"
              id="usuario"
              placeholder="Usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="contraseña">Contraseña</label>
            <input
              type="password"
              id="contraseña"
              placeholder="Contraseña"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
            />
          </div>
          <Link to="/" onClick={handleSubmit} className="boton-fucsia-block">
            Iniciar sesión
          </Link>
        </form>
        <Link to="/usuario" className="crear-usuario-link">
          ¿No tienes usuario?
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default Login;
