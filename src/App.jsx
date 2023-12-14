import { useState } from "react";
import { Header } from "./components/Header";
import { Products } from "./components/Products";
import { products as initialProducts } from "./mocks/products.json";
import { Footer } from "./components/Footer";
import { IS_DEVELOPMENT } from "./config";
import { useFilters } from "./hooks/useFilters";

function App() {
  const [products] = useState(initialProducts);

  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(products);

  return (
    <>
      <main className="container m-auto my-2">
        <Header />

        <Products products={filteredProducts} />

        {IS_DEVELOPMENT && <Footer />}
      </main>
    </>
  );
}

export default App;
