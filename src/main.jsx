import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes} from "react-router-dom"; 
import PaginaPrincipal from "./PaginaPrincipal";
import PaginaCrear from "./PaginaCrear";
import PaginaEditar from "./PaginaEditar";
import Login from "./Login";
import CrearUsuario from "./CrearUsuario";
import InicioSesion from "./InicioSesion";

const root = ReactDOM.createRoot(document.getElementById("root"));

const auth = localStorage.getItem('token')

if (auth===null){
  console.log('es null')
} else {
  console.log('no es null')
}

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={auth===null ? <InicioSesion/> : <PaginaPrincipal/>}/>
      <Route path="/crear" element={auth===null ? <InicioSesion/> : <PaginaCrear/>}/>
      <Route path="/editar/:postId" element={auth===null ? <InicioSesion/> : <PaginaEditar />}/>
      <Route path="/admin" element={<Login/>}/>
      <Route path="/usuario" element={auth===null ? <InicioSesion/> : <CrearUsuario/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);