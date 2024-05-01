import titulo from '../Imagenes/titleGF.webp'

function Header() {
    return (
      <header>
        <div className="contenedor">
          <div className="barra">
            <img src={titulo} alt="Logo" /> 
          </div>
        </div>
      </header>
    );
  }

export default Header