import { Products } from "./components/Products";
import products from "./mocks/products.json";

function App() {
  return (
    <>
      <main className="container m-auto">
        <h1 className="text-3xl font-bold underline text-red-600">
          Hello world!
        </h1>

        <Products products={products.products} />
      </main>
    </>
  );
}

export default App;
