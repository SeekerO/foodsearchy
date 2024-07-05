import React from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { BsSave } from "react-icons/bs";
import { FaRuler } from "react-icons/fa";
import useSaveDeleteViewLocalStorage from "../hooks/useSaveDeleteViewLocalStorage";

const ItemView = ({ clickedMeal, setclickedMeal, setAnimate, view }) => {
  const ingredientsArray = Object.keys(clickedMeal)
    .filter((key) => key.startsWith("strIngredient"))
    .map((key) => clickedMeal[key])
    .filter((ingredient) => ingredient !== null && ingredient !== "");

  const measureArray = Object.keys(clickedMeal)
    .filter((key) => key.startsWith("strMeasure"))
    .map((key) => clickedMeal[key])
    .filter((measurement) => measurement !== null && measurement.trim() !== "");

  const openSource = (href) => {
    if (href !== null || href.trim() !== "") window.open(href, "");
  };

  const videoUrl = clickedMeal.strYoutube;
  const videoId = videoUrl.split("v=")[1];
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  const steps = clickedMeal.strInstructions.split("STEP").filter(Boolean);

  return (
    <div className="h-full overflow-y-auto flex flex-col">
      <div className="w-full justify-between flex">
        <a
          onClick={() => setclickedMeal(null) || setAnimate(null)}
          className="flex items-center mb-5 hover:text-red-500 cursor-pointer"
        >
          <IoChevronBackOutline className="text-[30px]" />
          <span>BACK</span>
        </a>
      </div>
      <div className="flex gap-2">
        <div className="shrink-0">
          <img
            src={clickedMeal.strMealThumb}
            className="w-[130px] rounded-md "
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-bold text-[30px] flex items-center gap-2 textColorRed ">
            <span className=""> {clickedMeal.strMeal}</span>

            {!view && (
              <div
                onClick={() =>
                  useSaveDeleteViewLocalStorage(clickedMeal, "save")
                }
                className="flex items-center font-semibold mb-5 hover:text-blue-500 cursor-pointer mr-5 gap-1 text-[15px] group"
              >
                <BsSave />
                <span className="group-hover:flex hidden">SAVE</span>
              </div>
            )}
          </div>
          <span className="font-normal text-[15px]">
            Category:<em> {clickedMeal.strCategory}</em>
          </span>
          <span className="font-normal text-[15px]">
            Origin: <em> {clickedMeal.strArea}</em>
          </span>
        </div>
      </div>
      <div className="mt-5 flex flex-col gap-2 ">
        <div className="bg-blue-100 p-2 rounded-md">
          <h2 className="font-bold mb-2 textColorRed">INSTRUCTIONS</h2>
          <div className="text-balance text-slate-900 px-2">
            {steps.map((step, index) => (
              <div key={index} className="mt-5">
                {step}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex mt-5 justify-around p-2 bg-indigo-200 text-slate-900 rounded-md cursor-default">
        <div className="flex flex-col w-full gap-1">
          <span className="font-bold textColorRed">INGRIDIENTS</span>
          {ingredientsArray.map((ingredient, index) => (
            <li key={index} className="px-2">
              {ingredient}
            </li>
          ))}
        </div>

        <div className="flex flex-col w-full gap-1">
          <span className="font-bold textColorRed">MEASUREMENT</span>
          {measureArray.map((measurement, index) => (
            <div key={index} className="px-2 flex items-center gap-2">
              <FaRuler />{" "}
              {measurement !== "" && measurement !== null && measurement}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 p-2 flex justify-center items-center w-full bg-slate-300 rounded-md">
        {clickedMeal.strYoutube.trim() !== "" ||
        clickedMeal.strYoutube !== null ? (
          <iframe
            src={embedUrl}
            className="rounded-md h-[415px] w-full"
          ></iframe>
        ) : (
          "NO VIDEO"
        )}
      </div>
      <a className="font-thin text-[10px] mt-2">
        Soruce:{" "}
        <em
          onClick={() => openSource(clickedMeal.strSource)}
          className=" hover:underline hover:text-blue-500 cursor-pointer"
        >
          {clickedMeal.strSource !== null ? clickedMeal.strSource : "No Soruce"}
        </em>
      </a>
    </div>
  );
};

export default ItemView;
