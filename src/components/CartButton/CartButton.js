import { useDispatch } from "react-redux";
import { add } from "../../redux/cartSlice";
import "../css/Auth.module.css"

export default function CartButton({ productId }) {
  const dispatch = useDispatch();

  function onAddToCart() {
    dispatch(add(productId));
  }

  return (
    <button className="CartButton" onClick={onAddToCart}>Add to card</button>
  );
}