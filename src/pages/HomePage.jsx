import { Filters } from "components/Filters/Filters";
import { MedicinesHomeList } from "components/MedicinesHomeList/MedicinesHomeList";

import { Shops } from "components/Shops/Shops";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getMedicinesByShop } from "services/api";
import { STORAGE_KEY } from "services/keys";
import { toastError, toastSuccess } from "services/toastNotifications";
import { HomePageStyled } from "./HomePage.styled";
import { Loader } from "components/Loader/Loader";

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [medicines, setMedicines] = useState([]);
  const shop = searchParams.get("shop");
  const [filterByPrice, setFilterByPrice] = useState(false);
  const [filterByDate, setFilterByDate] = useState(false);
  const [medicinesInCart, setMedicinesInCart] = useState(() => {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY)) ?? [];
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!shop) return;

    const fetchMedicines = async () => {
      setIsLoading(true);
      const resp = await getMedicinesByShop(shop, filterByPrice, filterByDate);
      setMedicines([...resp]);
      setIsLoading(false);
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
      toastError(`${item.name} already added to cart`);
      return;
    }
    setMedicinesInCart((prevState) => [...prevState, { ...item, amount: 1 }]);
    toastSuccess(`${item.name} added to cart`);
  };

  const handleChangeFavorite = () => {
    setMedicines([...medicines]);
  };

  return (
    <HomePageStyled>
      <Shops onSelect={handleChangeShop} />
      <div className="home-content-wrapper">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Filters
              changeFilter={handleChangeFilter}
              priceFilter={filterByPrice}
              dateFilter={filterByDate}
              resetFilter={handleResetFilter}
            />
            <MedicinesHomeList
              medicines={medicines}
              addToCart={handleAddToCart}
              addRemoveFavorite={handleChangeFavorite}
            />
          </>
        )}
      </div>
    </HomePageStyled>
  );
};

export default HomePage;
