import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./Icons";
import "../styles/cart.css";
import { useCart } from "../hooks/useCart";

const ItemCart = ({ product, addToCart }) => {
  return (
    <li>
      <img src={product.thumbnail} alt={product.title} />
      <dir>
        <strong>{product.title}</strong> - ${product.price}
      </dir>

      <footer>
        <small>Qty: {product.quantity}</small>

        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  );
};

export const Cart = () => {
  const cartCheckId = useId();
  const { cart, addCart, clearCart } = useCart();

  return (
    <>
      <label htmlFor={cartCheckId} className="cart-button">
        <CartIcon />
      </label>
      <input type="checkbox" id={cartCheckId} hidden />

      <aside className="cart">
        <ul>
          {cart.map((item) => (
            <ItemCart
              key={item.id}
              product={item}
              addToCart={() => addCart(item)}
            />
          ))}
        </ul>

        <button
          className="px-3 py-2 rounded-md bg-neutral-800"
          onClick={() => {
            clearCart();
          }}
        >
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
};
