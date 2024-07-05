import axios from "axios";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1/";

export async function fetchMealByName(name) {
  try {
    const response = await axios.get(`${BASE_URL}search.php?s=${name}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching meal by name:", error);
    return null;
  }
}

export async function fetchMealsByFirstLetter(letter) {
  try {
    const response = await axios.get(`${BASE_URL}search.php?f=${letter}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching meals by first letter:", error);
    return null;
  }
}

export async function fetchMealById(mealId) {
  try {
    const response = await axios.get(`${BASE_URL}lookup.php?i=${mealId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching meal by ID:", error);
    return null;
  }
}

export async function fetchRandomMeal() {
  try {
    const response = await axios.get(`${BASE_URL}random.php`);
    return response.data;
  } catch (error) {
    console.error("Error fetching random meal:", error);
    return null;
  }
}

export async function fetchRandomSelection() {
  try {
    const response = await axios.get(`${BASE_URL}randomselection.php`);
    return response.data;
  } catch (error) {
    console.error("Error fetching random selection:", error);
    return null;
  }
}

export async function fetchAllMealCategories() {
  try {
    const response = await axios.get(`${BASE_URL}categories.php`);
    return response.data;
  } catch (error) {
    console.error("Error fetching all meal categories:", error);
    return null;
  }
}

export async function fetchLatestMeals() {
  try {
    const response = await axios.get(`${BASE_URL}latest.php`);
    return response.data;
  } catch (error) {
    console.error("Error fetching latest meals:", error);
    return null;
  }
}

export async function fetchListOfCategories() {
  try {
    const response = await axios.get(`${BASE_URL}list.php?c=list`);
    return response.data;
  } catch (error) {
    console.error("Error fetching list of categories:", error);
    return null;
  }
}

export async function fetchListOfAreas() {
  try {
    const response = await axios.get(`${BASE_URL}list.php?a=list`);
    return response.data;
  } catch (error) {
    console.error("Error fetching list of areas:", error);
    return null;
  }
}

export async function fetchListOfIngredients() {
  try {
    const response = await axios.get(`${BASE_URL}list.php?i=list`);
    return response.data;
  } catch (error) {
    console.error("Error fetching list of ingredients:", error);
    return null;
  }
}

export async function fetchMealsByMainIngredient(ingredient) {
  try {
    const response = await axios.get(`${BASE_URL}filter.php?i=${ingredient}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching meals by main ingredient:", error);
    return null;
  }
}

export async function fetchMealsByCategory(category) {
  try {
    const response = await axios.get(`${BASE_URL}filter.php?c=${category}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching meals by category:", error);
    return null;
  }
}

export async function fetchMealsByArea(area) {
  try {
    const response = await axios.get(`${BASE_URL}filter.php?a=${area}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching meals by area:", error);
    return null;
  }
}
