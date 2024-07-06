import React, { useEffect, useState } from "react";
import { FaBowlFood } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useSaveDeleteViewLocalStorage from "../../hooks/useSaveDeleteViewLocalStorage";
const Header = ({ countSavedMeal }) => {
  const nav = [
    { name: "CATEGORIES", path: "/" },
    { name: "YOUR MENU", path: "/saveditems" },
  ];

  const [numberOfData, setnumberOfData] = useState([]);
  useEffect(() => {
    setnumberOfData(useSaveDeleteViewLocalStorage("", "view"));
  }, [countSavedMeal]);

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
        <div className="gap-5 flex ">
          {nav.map((navData, index) => (
            <div key={index} className="flex">
              <Link
                to={navData.path}
                className=" hover:underline  underline-offset-2 font-medium text-[15px] flex items-center"
              >
                {navData.name}
              </Link>
              {navData.name.includes("YOUR MENU") && (
                <div className="ml-1 bg-[#E0A75E] px-2 py-1 rounded-md textColorRed text-[15px]">
                  {numberOfData?.meals?.length}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
