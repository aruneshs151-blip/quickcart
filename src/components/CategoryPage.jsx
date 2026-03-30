import { useParams } from "react-router-dom";
import products from "../data/products";
import ProductCard from "./ProductCard";

const CategoryPage = () => {
  const { category } = useParams();

  const filteredProducts = products.filter(
    (p) => p.category === category
  );

  return (
    <div>
      <h2>{category} Products</h2>

      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p>No products in this category</p>
      )}
    </div>
  );
};

export default CategoryPage;