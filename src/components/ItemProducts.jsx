import { useCart } from "../hooks/useCart";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons";

export const ItemProducts = ({ product }) => {
  const { addCart, cart, removeProductForId } = useCart();

  const existCart = cart.some((item) => item?.id === product?.id);

  return (
    <li className="bg-zinc-950 p-3 rounded-md flex flex-col items-center gap-2  flex-shrink-0">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="rounded w-full aspect-video block object-cover bg-white"
      />

      <div>
        <strong className="text-xs">{product.title}</strong>
        <span> ${product.price}</span>
      </div>

      <div>
        <button
          className={` px-3 py-2 rounded-md ${
            existCart ? "bg-red-600" : "bg-neutral-800"
          }`}
          onClick={() => {
            existCart ? removeProductForId(product) : addCart(product);
          }}
        >
          {existCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
        </button>
      </div>
    </li>
  );
};
