import "./itemlistcontainer.css";
import { useEffect, useState } from "react";
import { products } from "../../data/products";
import ItemListFilter from "../ItemListFilter/ItemListFilter";
import { ClipLoader } from "react-spinners";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });
    promise.then((products) => {
      setLoading(false);
      setItems(products);
    });
  }, []);

  return (
    <div className="item-list-container">
      {loading ? (
        <div
          style={{ width: "400px", margin: "50px auto", textAlign: "center" }}
        >
          <ClipLoader color="#ffffff" />
        </div>
      ) : (
        <ItemListFilter items={items} />
      )}
    </div>
  );
};

export default ItemListContainer;
