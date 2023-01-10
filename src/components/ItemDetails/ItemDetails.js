import "./itemdetails.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { CartContex } from "../../context/CartProvider";

const ItemDetails = ({ item }) => {
  const [isItemAdded, setIsItemAdded] = useState(false);
  const navigate = useNavigate();
  const { addItem } = useContext(CartContex);
  const { img, name, precioxkilo, stockxkilo } = item;

  const previousPath = () => {
    navigate(-1)
  }

  const addItemToCart = (quantity) => {
    setIsItemAdded(true);
    addItem(item, quantity);
  };
  return (
    <div className="item-detail">
      <div className="item-info">
        <img src={img} alt="" loading="lazy" />
      </div>
      <div className="item-options">
        <h3>{name}</h3>
        <h4>AR${precioxkilo} xKg</h4>
        <span>Disponible: {stockxkilo}Kg</span>
        {isItemAdded ? (
          <div className="button-group">
            <Link to={'/carrito'}><button>Ir a Carrito</button></Link>
            <button onClick={previousPath}>Volver</button>
          </div>
        ) : (
          <ItemCount stockValue={stockxkilo} onAdd={addItemToCart} />
        )}
      </div>
    </div>
  );
};

export default ItemDetails;
