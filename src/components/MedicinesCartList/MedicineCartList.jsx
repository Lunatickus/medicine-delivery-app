import { MedicineCartListItem } from "components/MedicineCartListItem/MedicineCartListItem";
import { CartListStyled } from "./MedicineCartList.styled";

export const MedicineCartList = ({ medicines, changeAmount }) => {
  return (
    <CartListStyled>
      {medicines.map((medicine) => {
        return <MedicineCartListItem medicine={medicine} key={medicine._id} changeAmount={changeAmount} />;
      })}
    </CartListStyled>
  );
};
