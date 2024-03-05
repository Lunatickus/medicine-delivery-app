import { useEffect, useState } from "react";
import { getAllMedicines } from "services/api";
import { uniqueShops } from "services/uniqueShops";

export const Shops = ({onSelect}) => {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    const fetchShops = async () => {
      const resp = await getAllMedicines();
      const medicineShops = uniqueShops(resp);
      setShops(medicineShops);
    };
    fetchShops();
  }, []);

  const handleChangeValue = (e) => {
    onSelect(e.target.value);
  };

  return (
    <div>
      <p>Shops:</p>
      <select name="shop" size="5" onChange={handleChangeValue}>
        {shops.map((shop) => {
          return (
            <option key={shop} value={shop}>
              {shop}
            </option>
          );
        })}
      </select>
    </div>
  );
};
