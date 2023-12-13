import { useState } from "react";
import { Header } from "./components/Header";
import { Products } from "./components/Products";
import { products as initialProducts } from "./mocks/products.json";
import { Footer } from "./components/Footer";
import { IS_DEVELOPMENT } from "./config";

function useFilters() {
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  });

  const filterProducts = (products = []) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };

  return {
    filterProducts,
    setFilters,
    filters,
  };
}

function App() {
  const [products] = useState(initialProducts);

  const { filterProducts, setFilters, filters } = useFilters();

  const filteredProducts = filterProducts(products);

  return (
    <>
      <main className="container m-auto my-2">
        <Header changeFilters={setFilters} />

        <Products products={filteredProducts} />

        {IS_DEVELOPMENT && <Footer filters={filters} />}
      </main>
    </>
  );
}

export default App;
