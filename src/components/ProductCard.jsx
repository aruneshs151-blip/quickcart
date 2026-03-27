import "../styles/ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <h4>₹{product.price}</h4>
      <span>{product.category}</span>
    </div>
  );
}

export default ProductCard;