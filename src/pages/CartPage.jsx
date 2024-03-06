import { OrderForm } from "components/OrderForm/OrderForm";
import { useState } from "react";
import { STORAGE_KEY } from "services/keys";

const CartPage = () => {
  const [medicines, setMedicines] = useState(() => {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY)) ?? [];
  });

  const hideContent = () => {
    setMedicines([]);
  };

  return (
    <main>
      {medicines.length === 0 ? (
        <h2>Please choose medicine</h2>
      ) : (
        <OrderForm hideContent={hideContent} />
      )}
    </main>
  );
};

export default CartPage;
