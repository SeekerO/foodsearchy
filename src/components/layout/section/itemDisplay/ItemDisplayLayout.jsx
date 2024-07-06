import React, { Suspense, useEffect, useState } from "react";
import { fetchMealById } from "../../../utils/fetchData";
import { IoSearch } from "react-icons/io5";
import Item from "./itemMeal/Item";
import ItemView from "../../../utils/ItemView";
import useSearch from "../../../hooks/useSearch";
import { motion } from "framer-motion";
import animateLottie from "../../../lottie/animate.json";
import Lottie from "lottie-react";
import useRenderMeals from "../../../hooks/useRenderMeals";

const ItemDisplayLayout = ({ setscountSavedMeal, countSavedMeal }) => {
  const RenderMeals = useRenderMeals();
  const [clickedMeal, setclickedMeal] = useState(null);
  const [searchInput, setsearchInput] = useState("");
  const [isAnimate, setAnimate] = useState(null);
  const searchedData = useSearch(RenderMeals, searchInput);

  const getMealByID = (id) => {
    const getter = async () => {
      const response = await fetchMealById(id);
      setclickedMeal(response.meals[0]);
    };

    getter();
    animate();
  };

  const animate = () => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 2000);
  };

  return (
    <div className="h-full w-full flex ">
      <div className="w-full h-full shadow-md rounded-md bg-slate-100 flex ">
        <div className="h-full w-[300px] rounded-l-md px-2 flex flex-col">
          <h1 className="text-[25px] textColorRed font-bold">MEALS</h1>
          <div className="w-full text-black flex bg-slate-200 p-1 items-center gap-2 rounded-md group focus:shadow-md focus:shadow-black">
            <IoSearch className="text-[30px] ml-2 textColorRed" />
            <input
              onChange={(e) => setsearchInput(e.target.value)}
              value={searchInput}
              type="search"
              placeholder="Search Receipe Here.."
              className="px-2 rounded-md py-2 w-full bg-slate-200 outline-none group-focus:shadow-md  "
            />
          </div>
        </div>
        <div className="h-full w-full flex flex-col border-l-2 px-2 py-2 border-gray-200  ">
          <div
            className={`${
              isAnimate ? "overflow-hidden" : "overflow-y-auto"
            } w-full rounded-r-md flex flex-wrap gap-4 relative`}
          >
            {searchedData?.length !== 0 && isAnimate !== null && (
              <motion.div
                initial={isAnimate ? { scale: 0 } : { scale: 3 }}
                animate={isAnimate ? { scale: 3 } : { scale: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                  borderRadius: "50%",
                  backgroundColor: "#973131",
                  position: "absolute",
                }}
                className="flex justify-center items-center h-full w-full "
              >
                <Lottie
                  className=" w-14  shrink-0 mb-1"
                  animationData={animateLottie}
                  width={1}
                />
              </motion.div>
            )}

            <Suspense fallback={"Loading..."}>
              {clickedMeal === null ? (
                <>
                  {searchedData?.length > 0 ? (
                    <>
                      {searchedData?.map((meal_data, index) => (
                        <Item
                          key={index}
                          data={meal_data}
                          getMealByID={getMealByID}
                          animate={animate}
                        />
                      ))}
                    </>
                  ) : (
                    "No Data"
                  )}
                </>
              ) : (
                <ItemView
                  clickedMeal={clickedMeal}
                  setclickedMeal={setclickedMeal}
                  setAnimate={setAnimate}
                  setscountSavedMeal={setscountSavedMeal}
                  countSavedMeal={countSavedMeal}
                />
              )}
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDisplayLayout;
