import { MedicineCartList } from "components/MedicinesCartList/MedicineCartList";
import { useEffect, useState } from "react";

import { postOrder } from "services/api";
import { STORAGE_KEY } from "services/keys";
import { toastError, toastSuccess } from "services/toastNotifications";
import { OrderFormStyled } from "./OrderForm.styled";

export const OrderForm = ({ hideContent }) => {
  const [medicines, setMedicines] = useState(() => {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY)) ?? [];
  });
  const [totalPrice, setTotalPrice] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    const price = medicines
      .map((medicine) => medicine.price * medicine.amount)
      .reduce((a, b) => a + b, 0);
    setTotalPrice(price);
  }, [medicines]);

  const handleChangeAmount = () => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(medicines));
    setMedicines([...medicines]);
  };

  const handleSubmitOrder = () => {
    if (!name) {
      toastError("Name is required field");
      return;
    }

    if (!email) {
      toastError("Email is required field");
      return;
    }

    if (!phone) {
      toastError("Phone is required field");
      return;
    }

    if (!address) {
      toastError("Address is required field");
      return;
    }

    postOrder({ name, email, phone, address, medicines, totalPrice });
    setMedicines([]);
    window.localStorage.removeItem(STORAGE_KEY);
    hideContent();
    toastSuccess("Thanks for your order");
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
  };

  return (
    <OrderFormStyled>
      <div className="order-form-wrapper">
        <form className="order-form">
          <label className="order-form-label">
            <span>Name: </span>
            <input
              type="text"
              name="name"
              className="order-form-input"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className="order-form-label">
            <span>Email: </span>
            <input
              type="email"
              name="email"
              className="order-form-input"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="order-form-label">
            <span>Phone: </span>
            <input
              type="tel"
              name="phone"
              className="order-form-input"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>
          <label className="order-form-label">
            <span>Address: </span>
            <input
              type="text"
              name="address"
              className="order-form-input"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </label>
        </form>
        <MedicineCartList
          medicines={medicines}
          changeAmount={handleChangeAmount}
        />
      </div>
      <div className="order-btn-wrapper">
        <p className="order-total-price">Total price: {totalPrice}</p>
        <button
          className="order-submit-btn"
          type="button"
          onClick={handleSubmitOrder}
        >
          Submit
        </button>
      </div>
    </OrderFormStyled>
  );
};
