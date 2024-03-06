import { useEffect, useState } from "react";
import { getAllMedicines } from "services/api";
import { uniqueShops } from "services/uniqueShops";
import { ShopsStyled } from "./Shops.styled";
import { Loader } from "components/Loader/Loader";

export const Shops = ({ onSelect }) => {
  const [shops, setShops] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchShops = async () => {
      setIsLoading(true);
      const resp = await getAllMedicines();
      const medicineShops = uniqueShops(resp);
      setShops(medicineShops);
      setIsLoading(false);
    };
    fetchShops();
  }, []);

  const handleChangeValue = (e) => {
    onSelect(e.target.value);
  };

  return (
    <ShopsStyled>
      <p className="shops-title">Shops:</p>
      {isLoading ? (
        <Loader />
      ) : (
        <select
          className="shops-select"
          name="shop"
          size="5"
          onChange={handleChangeValue}
        >
          {shops.map((shop) => {
            return (
              <option className="shops-option" key={shop} value={shop}>
                {shop}
              </option>
            );
          })}
        </select>
      )}
    </ShopsStyled>
  );
};
