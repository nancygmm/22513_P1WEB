import { useState, useEffect } from "react";
import Header from "./Componentes/Header";
import Footer from "./Componentes/Footer";
import { Api } from "../Api";
import { Link } from "react-router-dom";

function PaginaPrincipal() {
  const [datos, setDatos] = useState([]);

  const api = async () => {
    try {
      const info = await Api();
      setDatos(info);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogOut = () => {
    localStorage.removeItem('token')
  } 

  useEffect(() => {
    api();
  }, []);

  const eliminarPost = async (id) => {
    try {
      await fetch(`http://localhost:22513/posts/${id}`, {
        method: "DELETE"
      });
      
      setDatos(prevDatos => prevDatos.filter(post => post.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <div className="cerrar-sesion">
        <Link to={'/admin'} onClick={handleLogOut} className="boton-rojo">Cerrar sesión</Link>
      </div>
      <main className="contenedor-item seccion-item">
        <Link to={'/crear'} className="boton-verde">+ Crear post</Link>
        <div className="table-responsive">
          <table className="items">
            <thead>
              <tr>
                <th>ID</th>
                <th>Titulo</th>
                <th>Nombre</th>
                <th>Contenido</th>
                <th>Tipo</th>
                <th>Fecha creacion</th>
                <th>Acciones</th>
              </tr>
            </thead>

            <tbody>
              {datos.map((post, index) => (
                <tr key={index}>
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>{post.nombre}</td>
                  <td>{post.content}</td>
                  <td>{post.tipo}</td>
                  <td>{post.created_at}</td>
                  <td>
                    <div className="acciones">
                      <button className="boton-rojo-block" onClick={() => eliminarPost(post.id)}>Eliminar</button>
                      <Link to={`/editar/${post.id}`} className="boton-aqua-block">Actualizar</Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default PaginaPrincipal;
