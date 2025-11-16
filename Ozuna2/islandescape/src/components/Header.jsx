
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="browser-bar"></div>
      <nav className="nav-menu">
        <Link to="/">Inicio</Link>      
        <Link to="/historia">Historia</Link>        
        <Link to="/descargar">Descargar</Link>        
        <Link to="/comunidad">Comunidad</Link>     
        <Link to="/contacto">Contacto</Link>        
        <Link to="/acerca">Acerca de Nosotros</Link>        

         </nav>
    </header>
  );
}

export default Header;