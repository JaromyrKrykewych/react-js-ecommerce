import "./cart.css";

const InputGroup = ({ type, name, label, value, onChange }) => {
  return (
    <div className="input-group">
      <label htmlFor={name}>{label}: </label>
      <input type={type} name={name} value={value} onChange={onChange} />
    </div>
  );
};

const CartBuyer = ({ buyer, setBuyer, handleSubmit }) => {
  const changeValueHandler = (e) => {
    const { value, name } = e.target;
    setBuyer({ ...buyer, [name]: value });
  };
  return (
    <div>
      <h2 className="buyer-title">Ingresá tus datos para confirmar la orden de compra</h2>
      <form onSubmit={handleSubmit} className="cart-buyer">
        <InputGroup
          type="text"
          name="name"
          label={"Nombre"}
          value={buyer.name}
          onChange={changeValueHandler}
        />
        <InputGroup
          type="number"
          name="phone"
          label={"Número"}
          value={buyer.phone}
          onChange={changeValueHandler}
        />
        <InputGroup
          type="email"
          name="email"
          label={"Email"}
          value={buyer.email}
          onChange={changeValueHandler}
        />
        <InputGroup
          type="address"
          name="address"
          label={"Dirección"}
          value={buyer.address}
          onChange={changeValueHandler}
        />
        <button>Finalizar compra</button>
      </form>
    </div>
  );
};

export default CartBuyer;
