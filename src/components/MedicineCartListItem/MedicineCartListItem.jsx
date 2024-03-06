import { useState } from "react";
import { CartListItemStyled } from "./MedicineCartListItem.styled";

export const MedicineCartListItem = ({ medicine, changeAmount }) => {
  const { image, name, price, amount } = medicine;
  const [totalPrice, setTotalPrice] = useState(price);

  const handleAmountChange = (e) => {
    setTotalPrice(e.target.value * price);
    medicine.amount = e.target.value;
    changeAmount();
  };

  return (
    <CartListItemStyled>
      <img src={image} alt="medicine" className="cart-list-item" />
      <div className="item-content-wrapper">
        <p className="item-title">{name}</p>
        <p className="item-price">Price: {totalPrice}</p>
        <input
          type="number"
          min="1"
          max="10"
          className="item-amount"
          value={amount}
          onChange={handleAmountChange}
        />
      </div>
    </CartListItemStyled>
  );
};
