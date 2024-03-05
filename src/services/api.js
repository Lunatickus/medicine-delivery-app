import axios from "axios";

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
    return data.data;
  } catch (error) {
    console.log(error.message);
  }
};
