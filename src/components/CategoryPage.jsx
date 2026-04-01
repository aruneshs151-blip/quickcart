import { useParams } from "react-router-dom";
import products from "../data/products";
import ProductCard from "./ProductCard";

const CategoryPage = () => {
  const { category } = useParams();

  const filtered = products.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div>
      <h2>{category}</h2>

      {filtered.length > 0 ? (
        filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
};

export default CategoryPage;