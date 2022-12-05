import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../data/products";
import ItemDetails from "../ItemDetails/ItemDetails";
import { ClipLoader } from "react-spinners";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    let product;
    let promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });
    promise.then((products) => {
      product = products.find(
        (product) => product.id.toString() === id.toString()
      );
      setLoading(false);
      setItem(product);
    });
  }, [id]);
  return (
    <>
      {loading ? (
        <div style={{width: '400px', margin: '50px auto', textAlign: 'center'}}>
          <ClipLoader color="#ffffff" />
        </div>
      ) : (
        <ItemDetails item={item} />
      )}
    </>
  );
};

export default ItemDetailContainer;
