import "./navbar.css";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-brand"><Link to='/'>Tienda de Nutrición</Link></div>
      <ul className="navbar-options">
        <li>
          <Link to="/productos/frutos-secos">Frutos Secos</Link>
        </li>
        <li>
          <Link to="/productos/encurtidos">Encurtidos</Link>
        </li>
      </ul>
      <div className="navbar-cart">
        <CartWidget />
      </div>
    </div>
  );
};

export default NavBar;
