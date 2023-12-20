import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./Icons";
import "../styles/cart.css";
import { useCart } from "../hooks/useCart";

const ItemCart = ({ product, addToCart, decrementQuantity }) => {
  return (
    <li>
      <img src={product.thumbnail} alt={product.title} />
      <dir>
        <strong>{product.title}</strong> - ${product.price}
      </dir>

      <footer>
        <button className="hover:text-red-500" onClick={decrementQuantity}>
          -
        </button>
        <small>Qty: {product.quantity}</small>

        <button className="hover:text-red-500" onClick={addToCart}>
          +
        </button>
      </footer>
    </li>
  );
};

export const Cart = () => {
  const cartCheckId = useId();
  const { cart, addCart, clearCart, decrementQuantity } = useCart();

  return (
    <>
      <label htmlFor={cartCheckId} className="cart-button">
        <CartIcon />
      </label>
      <input type="checkbox" id={cartCheckId} hidden />

      <aside className="cart">
        <div className="w-full flex justify-between items-center">
          <span>
            Total <strong>$ 0</strong>
          </span>

          <button
            className="px-3 py-2 my-4 rounded-md bg-neutral-800 hover:bg-red-600 transition"
            onClick={() => {
              clearCart();
            }}
          >
            <ClearCartIcon />
          </button>
        </div>

        <ul>
          {cart.map((item) => (
            <ItemCart
              key={item.id}
              product={item}
              addToCart={() => addCart(item)}
              decrementQuantity={() => decrementQuantity(item)}
            />
          ))}
        </ul>
      </aside>
    </>
  );
};
