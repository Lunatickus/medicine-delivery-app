import { changeFavorite } from "services/api";
import { HomeListItemStyled } from "./MedicineHomeListItem.styled";
import { ReactComponent as UnpaintedHeart } from "../../icons/unpainted-heart.svg";
import { ReactComponent as PainedHeart } from "../../icons/painted-heart.svg";

export const MedicinesHomeListItem = ({
  medicine,
  addToCart,
  addRemoveFavorite,
}) => {
  const { image, name, price, favorite, _id } = medicine;

  const handleChangeFavorite = () => {
    changeFavorite(_id, !favorite);
    medicine.favorite = !favorite;
    addRemoveFavorite();
  };

  return (
    <HomeListItemStyled>
      <img src={image} alt="medicine" className="item-image" />
      <div className="item-description-wrapper">
        <p>{name}</p>
        <p>Price: {price}</p>
      </div>
      <button
          className="item-favorite-btn"
          type="button"
          onClick={handleChangeFavorite}
        >
          {favorite ? <PainedHeart /> : <UnpaintedHeart />}
        </button>
      <button className="item-button" type="button" onClick={() => addToCart(medicine)}>
        Add to cart
      </button>
    </HomeListItemStyled>
  );
};
