import { MedicineCartListItem } from "components/MedicineCartListItem/MedicineCartListItem";

export const MedicineCartList = ({ medicines, changeAmount }) => {
  return (
    <ul>
      {medicines.map((medicine) => {
        return <MedicineCartListItem medicine={medicine} key={medicine._id} changeAmount={changeAmount} />;
      })}
    </ul>
  );
};
