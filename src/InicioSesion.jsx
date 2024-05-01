import { Link } from "react-router-dom";
import Header from "./Componentes/Header";
import Footer from "./Componentes/Footer";

function InicioSesion() {
  return (
    <>
      <Header />
      <main className="contenedor-item seccion-item">
        <div className="mensaje">
          <p>Necesitas iniciar sesión</p>
          <Link to={"/admin"} className="boton-verde">
            Regresar al Inicio
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default InicioSesion;