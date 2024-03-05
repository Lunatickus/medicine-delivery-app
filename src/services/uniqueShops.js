export const uniqueShops = (data) => {
  const shops = data.map((item) => item.shop);
  const unique = {};
  const result = [];

  for (const shop of shops) {
    unique[shop] = true;
  }

  for (const shop in unique) {
    result.push(shop);
  }

  return result;
};
