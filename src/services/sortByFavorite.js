export function sortByFavorite(objects) {
  objects.sort((a, b) => {
    if (a.favorite === b.favorite) {
      return 0;
    }
    if (a.favorite) {
      return -1;
    }
    return 1;
  });
  return objects;
}
