import { MedicineCartList } from "components/MedicinesCartList/MedicineCartList";
import { useEffect, useState } from "react";
import { STORAGE_KEY } from "services/keys";

export const OrderForm = () => {
  const [medicines, setMedicines] = useState(() => {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY)) ?? [];
  });
  const [totalPrice, setTotalPrice] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    const price = medicines
      .map((medicine) => medicine.price * medicine.amount)
      .reduce((a, b) => a + b, 0);
    setTotalPrice(price);
    console.log(medicines)
  }, [medicines]);

  const handleChangeAmount = () => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(medicines));
    setMedicines([...medicines]);
  };

  return (
    <div>
      <form>
        <label>
          <span>Name: </span>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          <span>Email: </span>
          <input type="email" required />
        </label>
        <label>
          <span>Phone: </span>
          <input type="tel" required />
        </label>
        <label>
          <span>Address: </span>
          <input type="text" required />
        </label>
      </form>
      <MedicineCartList
        medicines={medicines}
        changeAmount={handleChangeAmount}
      />
      <p>Total price: {totalPrice}</p>
      <button type="button">Submit</button>
    </div>
  );
};
