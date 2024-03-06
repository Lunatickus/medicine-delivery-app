import { FiltersFormStyled } from "./Filters.styled";

export const Filters = ({
  changeFilter,
  priceFilter,
  dateFilter,
  resetFilter,
}) => {
  return (
    <FiltersFormStyled>
      <label>
        <input
          type="radio"
          onChange={changeFilter}
          name="price"
          checked={priceFilter}
        />
        <span>Sort by price</span>
      </label>
      <label>
        <input
          type="radio"
          onChange={changeFilter}
          name="date"
          checked={dateFilter}
        />
        <span>Sort by date added</span>
      </label>
      <button type="button" onClick={resetFilter}>
        Reset filter
      </button>
    </FiltersFormStyled>
  );
};
