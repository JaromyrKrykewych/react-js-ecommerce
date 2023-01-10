import "./itemlistcontainer.css";
import { useEffect, useState } from "react";
import ItemListFilter from "../ItemListFilter/ItemListFilter";
import { ClipLoader } from "react-spinners";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const db = getFirestore()

    const itemsCollection = collection(db, 'products')

    getDocs(itemsCollection).then(snapshot => {
      const items = snapshot.docs.map((item) => ({
        id: item.id,
        ...item.data()
      }))
      setItems(items)
      setLoading(false)
    })
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
