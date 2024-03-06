import axios from "axios";
import { sortByFavorite } from "./sortByFavorite";

axios.defaults.baseURL = "https://medicine-delivery-app.cyclic.app/";

export const getAllMedicines = async () => {
  try {
    const { data } = await axios.get("/api/medicines");
    return data.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getMedicinesByShop = async (shop, filterPrice, filterDate) => {
  let query = `shop=${shop}`;

  if (filterPrice) {
    query += "&sortByPrice=asc";
  }

  if (filterDate) {
    query += "&sortByDate=asc";
  }

  try {
    const { data } = await axios.get(`/api/medicines/search?${query}`);
    const sortedData = sortByFavorite(data.data);
    return sortedData;
  } catch (error) {
    console.log(error.message);
  }
};

export const postOrder = async (order) => {
  try {
    const { data } = await axios.post("/api/orders", order);
    return data.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const changeFavorite = async (id, value) => {
  try {
    const { data } = await axios.patch(`/api/medicines/${id}/favorite`, {favorite: `${value}`});
    return data.data;
  } catch (error) {
    console.log(error.message);
  }
}
