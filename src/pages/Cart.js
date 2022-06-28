import Header from "../components/Header/Header";
import image from "../assets/contacts.jpeg";
import CartDisplay from "../components/СartDisplay/CartDisplay";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <>
      <Header
        title="Your Shopping Cart"
        image={image}>
        Please review items in your cart.
      </Header>

      <CartDisplay actions />

      <Link to="/checkout">Checkout</Link>
    </>
  );
}

export default Cart;