import "../styles/ProductCard.css";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const cartData = useCart();
  const addToCart = cartData?.addToCart;

  if (!product) return null;

  return (
    <div className="card">
      <img src={product.image || ""} alt={product.name || "product"} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <h4>₹{product.price}</h4>
      <span>{product.category}</span>

      <button onClick={() => addToCart && addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;