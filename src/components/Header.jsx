import { Filters } from "./Filters";
import { AddToCartIcon } from "./Icons";

export const Header = () => {
  return (
    <header>
      <h1 className="text-3xl font-bold underline text-red-600 text-center flex gap-2 items-center justify-center p-2">
        React Shop! <AddToCartIcon />
      </h1>

      <Filters />
    </header>
  );
};
