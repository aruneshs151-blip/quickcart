import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Header = () => {
  const cartData = useCart();
  const cart = cartData?.cart || [];

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/category/Electronics">Electronics</Link>
      <Link to="/category/Fashion">Fashion</Link>
      <Link to="/cart">Cart ({cart.length})</Link>
    </nav>
  );
};

export default Header;