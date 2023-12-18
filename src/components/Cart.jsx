import { useId } from "react";
import { CartIcon } from "./Icons";
import "../styles/cart.css";
import { useCart } from "../hooks/useCart";

export const Cart = () => {
  const cartCheckId = useId();
  const { cart, addCart } = useCart();

  return (
    <>
      <label htmlFor={cartCheckId} className="cart-button">
        <CartIcon />
      </label>
      <input type="checkbox" id={cartCheckId} hidden />

      <aside className="cart">
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <img src={item.thumbnail} alt={item.title} />
              <dir>
                <strong>{item.title}</strong> - ${item.price}
              </dir>

              <footer>
                <small>Qty: {item.quantity}</small>

                <button
                  onClick={() => {
                    addCart(item);
                  }}
                >
                  +
                </button>
              </footer>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};
