import { useState } from "react";
import { Header } from "./components/Header";
import { Products } from "./components/Products";
import { products as initialProducts } from "./mocks/products.json";
import { Footer } from "./components/Footer";
import { IS_DEVELOPMENT } from "./config";
import { useFilters } from "./hooks/useFilters";
import { Cart } from "./components/Cart";
import { CartProvider } from "./context/cart";

function App() {
  const [products] = useState(initialProducts);

  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(products);

  return (
    <CartProvider>
      <main className="max-w-screen-lg m-auto my-2">
        <Header />

        <Cart />

        <Products products={filteredProducts} />

        {IS_DEVELOPMENT && <Footer />}
      </main>
    </CartProvider>
  );
}

export default App;
