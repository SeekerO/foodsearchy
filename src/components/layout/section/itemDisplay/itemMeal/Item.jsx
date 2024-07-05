import React, { useEffect } from "react";

const Item = ({ data, getMealByID }) => {
  useEffect(() => {}, []);
  return (
    <div
      onClick={() => getMealByID(data.idMeal)}
      className=" w-[150px] flex flex-col shadow-md p-2 rounded-md group cursor-pointer"
    >
      <img src={data.strMealThumb} className="object-cover w-full rounded-md" />
      <span className="text-pretty  font-semibold cursor-pointer group-hover:underline group-hover:text-[#973131]">
        {data.strMeal}
      </span>
    </div>
  );
};

export default Item;
