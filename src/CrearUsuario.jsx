import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Componentes/Header";
import Footer from "./Componentes/Footer";
import { Api } from "../Api";

function CrearUsuario() {
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [error, setError] = useState("");

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
      const datos = {
        username: usuario,
        password: contraseña,
      };
      await fetch(`http://localhost:22513/usuario`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datos),
      });
    } catch (error) {
      console.error("No se pudo crear el usuario");
      setError("No se pudo crear el usuario")
    }
  };

  return (
    <>
      <Header />
      <div className="error-message">{error}</div> 
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
              className="usuario-input"
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
              className="contraseña-input"
            />
          </div>
          <Link to={`/admin`} className="boton-fucsia-block" onClick={handleSubmit} >Crear</Link> 
        </form>
      </div>
      <Footer />
    </>
  );
}

export default CrearUsuario;
