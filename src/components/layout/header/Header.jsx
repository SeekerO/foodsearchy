import React, { useEffect, useState } from "react";
import { FaBowlFood } from "react-icons/fa6";

import NavButtons from "../../utils/NavButtons";
const Header = ({ countSavedMeal }) => {
  return (
    <div className="h-[80px]  w-full bgMainColor textColor items-center flex px-5 justify-between gap-20 shadow-sm shadow-black">
      <div className="">
        <h1 className="flex gap-2 items-center text-[30px] font-semibold tracking-wider">
          <span>
            <FaBowlFood />
          </span>
          FOODSEARCHY
        </h1>
      </div>
      <div className="flex items-center gap-2">
        <div className="gap-5 md:flex hidden ">
          <NavButtons countSavedMeal={countSavedMeal} />
        </div>
      </div>
    </div>
  );
};

export default Header;
