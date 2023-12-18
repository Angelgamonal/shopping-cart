import { useCart } from "../hooks/useCart";
import { AddToCartIcon } from "./Icons";

export const Products = ({ products = [] }) => {
  const { addCart } = useCart();

  return (
    <ul
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "1em",
        margin: "1em",
      }}
    >
      {products.slice(0, 10).map((product) => (
        <li
          key={product.id}
          className="bg-zinc-950 p-3 rounded-md flex flex-col items-center gap-2  flex-shrink-0"
        >
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
              className="bg-neutral-800 px-3 py-2 rounded-md"
              onClick={() => {
                addCart(product);
              }}
            >
              <AddToCartIcon />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};
