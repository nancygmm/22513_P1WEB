import { useState } from "react";
import Header from "./Componentes/Header";
import Footer from "./Componentes/Footer";
import { Link} from "react-router-dom";

function PaginaCrear() {
  const [titulo, setTitulo] = useState("");
  const [nombre, setNombre] = useState("");
  const [contenido, setContenido] = useState("");
  const [tipo, setTipo] = useState("");

  const handleSubmit = async () => {
    try {
      const datos = {
        title: titulo,
        content: contenido,
        nombre: nombre,
        tipo: tipo,
      };
      const response = await fetch(`http://localhost:22513/posts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datos),
      });
      if (response.ok) {
        window.location.href = "/";
        if (location.pathname === "/") {
          window.location.reload();
        }
      }
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
    }
  };

  return (
    <>
      <Header />
      <main
        className="contenedor-item seccion-item"
        style={{ background: "rgba(0, 238, 255, 0.689)" }}
      >
        <form>
          <div style={{ marginBottom: "10px" }}>
            <p>Titulo:</p>
            <input type="text" onChange={(e) => setTitulo(e.target.value)} />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <p>Nombre:</p>
            <input type="text" onChange={(e) => setNombre(e.target.value)} />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <p>Contenido:</p>
            <textarea onChange={(e) => setContenido(e.target.value)}></textarea>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <p>Tipo:</p>
            <input type="text" onChange={(e) => setTipo(e.target.value)} />
          </div>
          <Link
            type="submit"
            onClick={handleSubmit}
            className="boton boton-aqua-block"
          >
            Crear
          </Link>
        </form>
      </main>
      <Footer />
    </>
  );
}

export default PaginaCrear;
