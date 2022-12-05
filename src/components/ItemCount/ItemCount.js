import { useEffect } from "react";
import { useState } from "react";
import "./itemcount.css";

const ItemCount = ({ stockValue }) => {
  const [contador, setContador] = useState(0);
  const [stock, setStock] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setStock(stockValue);
    }, 2000);
  }, [stockValue]);

  const plusItem = () => {
    if (stock > 0) {
      setContador(contador + 1);
      setStock(stock - 1);
    }
  };
  const minusItem = () => {
    if (contador !== 0) {
      setContador(contador - 1);
      setStock(stock + 1);
    }
  };
  const handleValue = (e) => setContador(e.target.value);
  return (
    <form className="item-count" onSubmit={(e) => e.preventDefault()}>
      <button onClick={minusItem}>-</button>
      <input
        type="number"
        onChange={handleValue}
        placeholder={contador}
        max={stockValue}
      />
      <button onClick={plusItem}>+</button>
    </form>
  );
};

export default ItemCount;
