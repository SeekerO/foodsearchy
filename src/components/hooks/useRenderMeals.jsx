import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import {
  fetchMealsByCategory,
  fetchMealsByArea,
} from "../../components/utils/fetchData";

export default function useRenderMeals() {
  var path = useParams();
  var pathCountry = useLocation();
  const resultPath = pathCountry.search.split("?").join("");
  const [meals, setMeals] = useState([]);

  const getCategoriesByArea = async () => {
    const data = await fetchMealsByArea(resultPath);

    setMeals(data.meals);
  };

  const getCategoriesByMeal = async () => {
    const data = await fetchMealsByCategory(path.id);

    setMeals(data.meals);
  };

  const identifyIfCountry = () => {
    if (path.id === "country") {
      getCategoriesByArea();
    } else {
      getCategoriesByMeal();
    }
  };

  useEffect(() => {
    identifyIfCountry();
  }, []);

  return meals;
}
