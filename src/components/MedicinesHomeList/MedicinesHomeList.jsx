import { MedicinesHomeListItem } from "components/MedicinesHomeListItem/MedicinesHomeListItem";
import { HomeListStyled } from "./MedicinesHomeList.styled";

export const MedicinesHomeList = ({
  medicines,
  addToCart,
  addRemoveFavorite,
}) => {
  return (
    <HomeListStyled>
      {medicines.map((medicine) => {
        return (
          <MedicinesHomeListItem
            key={medicine._id}
            medicine={medicine}
            addToCart={addToCart}
            addRemoveFavorite={addRemoveFavorite}
          />
        );
      })}
    </HomeListStyled>
  );
};
