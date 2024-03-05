import { Filters } from "components/Filters/Filters";
import { MedicinesHomeList } from "components/MedicinesHomeList/MedicinesHomeList";

import { Shops } from "components/Shops/Shops";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getMedicinesByShop } from "services/api";
import { STORAGE_KEY } from "services/keys";

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [medicines, setMedicines] = useState([]);
  const shop = searchParams.get("shop");
  const [filterByPrice, setFilterByPrice] = useState(false);
  const [filterByDate, setFilterByDate] = useState(false);
  const [medicinesInCart, setMedicinesInCart] = useState(() => {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY)) ?? [];
  });

  useEffect(() => {
    if (!shop) return;

    const fetchMedicines = async () => {
      const resp = await getMedicinesByShop(shop, filterByPrice, filterByDate);
      setMedicines([...resp]);
    };
    fetchMedicines();
  }, [shop, filterByPrice, filterByDate]);

  const handleChangeShop = (value) => {
    setSearchParams({ shop: value });
  };

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(medicinesInCart));
  }, [medicinesInCart]);

  const handleChangeFilter = (e) => {
    switch (e.target.name) {
      case "price":
        setFilterByPrice(true);
        setFilterByDate(false);
        break;
      case "date":
        setFilterByDate(true);
        setFilterByPrice(false);
        break;
      default:
        return;
    }
  };

  const handleResetFilter = () => {
    setFilterByDate(false);
    setFilterByPrice(false);
  };

  const handleAddToCart = (item) => {
    if (medicinesInCart.some((medicine) => medicine._id === item._id)) {
      return;
    }
    setMedicinesInCart((prevState) => [...prevState, {...item, amount: 1}]);
  };

  return (
    <main>
      <Shops onSelect={handleChangeShop} />
      <Filters
        changeFilter={handleChangeFilter}
        priceFilter={filterByPrice}
        dateFilter={filterByDate}
        resetFilter={handleResetFilter}
      />
      <MedicinesHomeList medicines={medicines} addToCart={handleAddToCart} />
    </main>
  );
};

export default HomePage;
