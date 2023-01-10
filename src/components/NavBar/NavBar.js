import "./navbar.css";
import { useContext } from "react";
import { CartContex } from "../../context/CartProvider";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  const { totalProducts } = useContext(CartContex);
  return (
    <div className="navbar">
      <div className="navbar-brand">
        <Link to="/">Tienda de Nutrición</Link>
      </div>
      <ul className="navbar-options">
        <li>
          <Link to="/productos">Productos</Link>
        </li>
        <li>
          <Link to="/productos/frutos-secos">Frutos Secos</Link>
        </li>
        <li>
          <Link to="/productos/encurtidos">Encurtidos</Link>
        </li>
      </ul>
      {totalProducts() !== 0 && (
        <div className="navbar-cart">
          <CartWidget />
        </div>
      )}
    </div>
  );
};

export default NavBar;
