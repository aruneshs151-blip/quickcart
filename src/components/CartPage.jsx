import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cart } = useCart();

  if (cart.length === 0) return <h2>Cart is empty</h2>;

  return (
    <div>
      <h2>Your Cart</h2>

      {cart.map((item) => (
        <div key={item.id}>
          <h4>{item.name}</h4>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}
    </div>
  );
};

export default CartPage;