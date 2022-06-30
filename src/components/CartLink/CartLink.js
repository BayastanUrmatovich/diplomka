import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import iconImage from "../../assets/icon.png"
import "./CartLink.css"

export default function CartLink() {
  const number = useSelector(store => {
    return Object.values(store.cart.items).reduce((sum, number) => sum + number, 0);
  });

  return (
    <NavLink to="/cart">
      <div>{number}</div>

      <img className="cart-icons" src={iconImage} alt="png" />
    </NavLink>
  );
}