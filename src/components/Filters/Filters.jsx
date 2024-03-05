export const Filters = ({
  changeFilter,
  priceFilter,
  dateFilter,
  resetFilter,
}) => {
  return (
    <form>
      <label>
        <span>Sort by price</span>
        <input type="radio" onChange={changeFilter} name="price" checked={priceFilter} />
      </label>
      <label>
        <span>Sort by date added</span>
        <input type="radio" onChange={changeFilter} name="date" checked={dateFilter} />
      </label>
      <button type="button" onClick={resetFilter}>Reset filter</button>
    </form>
  );
};
