import { useId, useState } from "react";

export const Filters = ({ onChange }) => {
  const [range, setRange] = useState(0);
  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleChangeMinPrice = (e) => {
    setRange(e.target.value);
    onChange((prevState) => ({ ...prevState, minPrice: e.target.value }));
  };

  const handleChangeCategory = (e) => {
    onChange((prevState) => ({ ...prevState, category: e.target.value }));
  };

  return (
    <section className="flex justify-between p-4 text-base font-bold max-w-2xl m-auto flex-wrap gap-1">
      <div className="flex gap-4">
        <label htmlFor={minPriceFilterId}>Precio a partir de:</label>
        <input
          type="range"
          id={minPriceFilterId}
          min={0}
          max={1000}
          onChange={handleChangeMinPrice}
        />
        <span>${range}</span>
      </div>

      <div className="flex gap-4">
        <label htmlFor={categoryFilterId}>Categoría</label>
        <select
          id={categoryFilterId}
          className="bg-stone-600"
          onChange={handleChangeCategory}
        >
          <option value="all">Todas</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Celulares</option>
        </select>
      </div>
    </section>
  );
};
