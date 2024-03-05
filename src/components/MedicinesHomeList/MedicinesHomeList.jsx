import { MedicinesHomeListItem } from "components/MedicinesHomeListItem/MedicinesHomeListItem";


export const MedicinesHomeList = ({ medicines, addToCart }) => {
  return (
    <ul>
      {medicines.map((medicine) => {
        return <MedicinesHomeListItem key={medicine._id} medicine={medicine} addToCart={addToCart} />;
      })}
    </ul>
  );
};
