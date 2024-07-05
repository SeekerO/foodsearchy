import React, { Suspense, useEffect, useState } from "react";
import {
  fetchAllMealCategories,
  fetchListOfAreas,
  fetchListOfIngredients,
} from "../../../utils/fetchData";
import { BiSolidCategory, BiFoodMenu } from "react-icons/bi";
import Item from "./itemCategory/Item";
import { FaMapPin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories_meta_data, setCategories] = useState([]);
  const [country, setCountry] = useState([]);
  const [ingridients, setIngridients] = useState([]);
  useEffect(() => {
    getCategories();
    getCountryList();
    getIngridientsList();
  }, []);

  const getCategories = async () => {
    const data = await fetchAllMealCategories();
    setCategories(data.categories);
  };

  const getCountryList = async () => {
    const data = await fetchListOfAreas();
    setCountry(data.meals);
  };

  const getIngridientsList = async () => {
    const data = await fetchListOfIngredients();
    setIngridients(data.meals);
  };

  return (
    <div className="h-full w-full flex">
      <div className="shadow-md w-full h-full px-4 py-2 flex flex-col bg-slate-100 rounded-md overflow-y-auto">
        <div className="flex mb-2">
          <div className="font-bold text-[#973131] text-[30px] tracking-wider flex gap-1 items-center">
            <BiSolidCategory /> CATEGORIES
          </div>
        </div>
        <div className="flex flex-wrap gap-5">
          <Suspense fallback={"Loading..."}>
            {categories_meta_data?.map((data, index) => (
              <Item data={data} key={index} />
            ))}
          </Suspense>
        </div>
        <div className="flex flex-col mt-4">
          <div className="">
            <span className=" font-bold textColorRed text-[30px] mb-2 flex items-center">
              <FaMapPin /> SEARCH BY COUNTRY
            </span>
          </div>
          <div className="flex-wrap gap-x-10 flex h-fit">
            <Suspense fallback={"Loading..."}>
              {country.map((country, index) => (
                <Link
                  to={"/country?" + country.strArea}
                  key={index}
                  className="textColorRed cursor-pointer hover:underline underline-offset-2 text-lg hover:text-blue-5001"
                >
                  {country.strArea}
                </Link>
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
