import CartWidget from "../CartWidget/CartWidget";
import "./navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-brand">Tienda de Nutrición</div>
      <ul className="navbar-options">
        <li>
          <a href="#">Frutos Secos</a>
        </li>
        <li>
          <a href="#">Encurtidos</a>
        </li>
      </ul>
      <div className="navbar-cart">
        <CartWidget />
      </div>
    </div>
  );
};

export default NavBar;
