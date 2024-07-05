import React from "react";
import images from "../../../../../assets/catergoriesImages";
import { Link } from "react-router-dom";
const Item = ({ data }) => {
  return (
    <div>
      <Link
        to={"/" + data.strCategory}
        className="h-[170px] w-[170px] min-w-20 flex flex-col relative cursor-pointer rounded-md duration-300 hover:shadow-slate-500 group"
      >
        <img
          src={
            images[data.strCategory.toLowerCase()] ||
            "path/to/fallbackImage.png"
          }
          className="h-full object-cover rounded-md duration-500  "
        />
        <span className="absolute bg-slate-900 text-center textColor px-2 tracking-wide w-full bottom-0 bg-opacity-50 text-[20px] uppercase font-semibold rounded-b-md">
          {data.strCategory}
        </span>
        <span className="h-full w-full absolute  hidden group-hover:flex bg-black bg-opacity-50 rounded-md duration-300 backdrop-blur-[1px] items-center justify-center textColor tracking-widest text-[20px] font-semibold">
          VISIT
        </span>
      </Link>
    </div>
  );
};

export default Item;
