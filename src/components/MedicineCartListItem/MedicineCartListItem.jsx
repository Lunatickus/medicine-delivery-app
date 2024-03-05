import { useState } from "react";

export const MedicineCartListItem = ({ medicine, changeAmount }) => {
  const { image, name, price, amount } = medicine;
  const [totalPrice, setTotalPrice] = useState(price);

  const handleAmountChange = (e) => {
    setTotalPrice(e.target.value * price);
    medicine.amount = e.target.value;
    changeAmount()
  };

  return (
    <div>
      <img src={image} alt="medicine" />
      <p>{name}</p>
      <p>Price: {totalPrice}</p>
      <input
        type="number"
        min="1"
        max="10"
        value={amount}
        onChange={handleAmountChange}
      />
    </div>
  );
};
