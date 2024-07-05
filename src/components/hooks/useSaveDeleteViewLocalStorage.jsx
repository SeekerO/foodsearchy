export default function useSaveDeleteViewLocalStorage(saveItem, param) {
  // parameters:
  // save = saveItem
  // delete = deleteItem
  // view = viewItem

  const saveItemToLocalStorage = (item) => {
    const existingData = localStorage.getItem("savedItem");
    let savedItems = existingData ? JSON.parse(existingData) : { meals: [] };

    savedItems.meals.push(item);

    localStorage.setItem("savedItem", JSON.stringify(savedItems));
  };

  const deleteItemFromLocalStorage = (item) => {
    const existingData = localStorage.getItem("savedItem");
    if (existingData) {
      let savedItems = JSON.parse(existingData);
      savedItems.meals = savedItems.meals.filter(
        (meal) => meal.idMeal !== item
      );
      localStorage.setItem("savedItem", JSON.stringify(savedItems));
    }
  };

  const viewItemsInLocalStorage = () => {
    const existingData = localStorage.getItem("savedItem");
    return existingData ? JSON.parse(existingData) : { meals: [] };
  };

  if (param === "save") {
    saveItemToLocalStorage(saveItem);
  } else if (param === "delete") {
    deleteItemFromLocalStorage(saveItem);
  } else if (param === "view") {
    return viewItemsInLocalStorage();
  }
}
