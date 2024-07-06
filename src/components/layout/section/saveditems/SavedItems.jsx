import React, { useEffect, useState } from "react";

import { IoSearch } from "react-icons/io5";
import useSearch from "../../../hooks/useSearch";
import { fetchMealById } from "../../../utils/fetchData";
import { motion } from "framer-motion";
import animateLottie from "../../../lottie/animate.json";
import Lottie from "lottie-react";
import ItemView from "../../../utils/ItemView";
import { MdDelete } from "react-icons/md";
import useSaveDeleteViewLocalStorage from "../../../hooks/useSaveDeleteViewLocalStorage";

const SavedItems = ({ setscountSavedMeal, countSavedMeal }) => {
  const [searchInput, setsearchInput] = useState("");
  const [savedData, setSavedData] = useState([]);
  const [clickedMeal, setclickedMeal] = useState(null);
  const [isAnimate, setAnimate] = useState(null);

  const searchedData = useSearch(savedData.meals, searchInput);
  useEffect(() => {
    setSavedData(useSaveDeleteViewLocalStorage("", "view"));
  }, []);

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

  const remove = (id) => {
    useSaveDeleteViewLocalStorage(id, "delete");
    setSavedData(useSaveDeleteViewLocalStorage("", "view"));
    setscountSavedMeal(!countSavedMeal);
  };
  return (
    <div className="px-4 py-2 w-full h-full bg-slate-100">
      <div className="w-full h-full flex gap-2">
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

        <div className="flex flex-col relative h-full w-full verflow-y-auto gap-2 border-s-2 border-gray-300 px-2 overflow-y-auto">
          <em className="font-thin text-gray-500">
            Note: This items is only saved on your LocalStorage
          </em>
          {clickedMeal === null ? (
            <>
              {searchedData?.map((data, index) => (
                <div
                  key={index}
                  className="flex gap-2 bgSecondColor p-2 rounded-md w-full h-fit items-center justify-between"
                >
                  <div
                    onClick={() => getMealByID(data.idMeal)}
                    className="flex gap-2 cursor-pointer group hover:scale-95 duration-300"
                  >
                    <img
                      src={data.strMealThumb}
                      className="h-[100px] shrink-0 rounded-sm"
                    />
                    <div className="flex flex-col gap-2 group-hover:text-[#973131]">
                      <span className="font-bold text-[20px]">
                        {data.strMeal}
                      </span>
                      <span className="font-thin">
                        Category: {data.strCategory}
                      </span>
                      <span className="font-thin">Area: {data.strArea}</span>
                    </div>
                  </div>
                  <MdDelete
                    onClick={() => remove(data.idMeal)}
                    className="text-[30px] hover:text-red-500 cursor-pointer"
                  />
                </div>
              ))}
            </>
          ) : (
            <>
              <ItemView
                clickedMeal={clickedMeal}
                setclickedMeal={setclickedMeal}
                setAnimate={setAnimate}
                view={true}
              />
            </>
          )}

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
        </div>
      </div>
    </div>
  );
};

export default SavedItems;
