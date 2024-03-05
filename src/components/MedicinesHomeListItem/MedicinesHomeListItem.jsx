export const MedicinesHomeListItem = ({ medicine, addToCart }) => {
    const {image, name, price} = medicine
  return (
    <div>
      <img src={image} alt="medicine" />
      <p>{name}</p>
      <p>{price}</p>
      <button type="button" onClick={() => addToCart(medicine)}>Add to cart</button>
    </div>
  );
};
