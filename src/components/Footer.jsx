import { useFilters } from "../hooks/useFilters";

export const Footer = () => {
  const { filters } = useFilters();

  return (
    <footer
      className="fixed left-4 bottom-4 text-left py-2 px-6 rounded-3xl opacity-95"
      style={{ background: "rgba(0,0,0, .7)", backdropFilter: "blur(8px)" }}
    >
      {JSON.stringify(filters, null, 2)}

      {/* <h4 className="m-0 flex">
        Prueba Tecnica * -
        <span className="text-sm text-cyan-600 opacity-80"> @midudev</span>
      </h4>

      <h5 className="m-0 flex">Shopping Cart con useContext & useReducer</h5> */}
    </footer>
  );
};
