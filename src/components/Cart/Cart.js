import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useContext, useState } from "react";
import { CartContex } from "../../context/CartProvider";
import "./cart.css";
import EmptyCart from "./EmptyCart";
import CartItems from "./CartItems";
import CartBuyer from "./CartBuyer";

const Cart = () => {
  const { cart, totalPrice, clear } = useContext(CartContex);
  const [confirmProducts, setConfirmProducts] = useState(false);
  const [buyer, setBuyer] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const order = {
    buyer: buyer,
    items: cart,
    total: totalPrice(),
  };

  const processBuyer = () => {
    setConfirmProducts(true);
  };

  const buyHandle = () => {
    const db = getFirestore();
    const orderCollections = collection(db, "orders");
    addDoc(orderCollections, order).then((snapshot) =>
      console.log(snapshot.id)
    );
    clear();
  };

  if (cart.length === 0) {
    return <EmptyCart />;
  }

  if (!confirmProducts) {
    return (
      <CartItems
        items={cart}
        totalPrice={totalPrice}
        buttonHandle={processBuyer}
        cleanCart={clear}
      />
    );
  }

  return (
    <div className="cart">
      <CartBuyer buyer={buyer} setBuyer={setBuyer} handleSubmit={buyHandle} />
    </div>
  );
};

export default Cart;
