import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "./Componentes/Header";
import Footer from "./Componentes/Footer";

function PaginaEditar() {
  const [id, setId] = useState("");
  const [titulo, setTitulo] = useState("");
  const [nombre, setNombre] = useState("");
  const [contenido, setContenido] = useState("");
  const [tipo, setTipo] = useState("");

  const { postId } = useParams();
 
  const obtenerPostParaEditar = async () => {
    try {
      const response = await fetch(`http://22513.arpanetos.lol/posts/${postId}`, {method:'GET', headers: {'Content-Type':'application/json'}});
      if (response.ok) {
        const data  = await response.json()
        setId(data[0].id)
        setTitulo(data[0].title)
        setNombre(data[0].nombre)
        setContenido(data[0].content)
        setTipo(data[0].tipo)
      }
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
    }
  };
  
  useEffect(() => {
    obtenerPostParaEditar();
  }, []); 

  const handleSubmit = async () => {
    try {
      const datos = {
        title: titulo,
        content: contenido,
        nombre: nombre,
        tipo: tipo,
      };
      const response = await fetch(`http://localhost:3000/posts/${postId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datos),
      });
      if (response.ok) {
        window.location.href = "/";
        
      }
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
    }
  };

  return (
    <>
      <Header />
      <main className="contenedor-item seccion-item" style={{background: "rgba(0, 238, 255, 0.689)"}}>
        <form>
          <div style={{ marginBottom: "10px" }}>
            <p>ID: {id}</p>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <p>Titulo:</p>
            <input type="text" name="title" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <p>Nombre:</p>
            <input type="text" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <p>Contenido:</p>
            <textarea name="content" value={contenido} onChange={(e) => setContenido(e.target.value)}></textarea>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <p>Tipo:</p>
            <input type="text" name="tipo" value={tipo} onChange={(e) => setTipo(e.target.value)} />
          </div>
          <Link type="submit" onClick={handleSubmit} className="boton-aqua-block">Guardar cambios</Link>
        </form>
      </main>
      <Footer />
    </>
  );
}

export default PaginaEditar;
