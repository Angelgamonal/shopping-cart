import { ItemProducts } from "./ItemProducts";

export const Products = ({ products = [] }) => {
  return (
    <ul
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "1em",
        margin: "1em",
      }}
    >
      {products.slice(0, 12).map((product) => (
        <ItemProducts product={product} key={product.id} />
      ))}
    </ul>
  );
};
