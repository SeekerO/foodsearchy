import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useSaveDeleteViewLocalStorage from "../../components/hooks/useSaveDeleteViewLocalStorage";

const NavButtons = ({ countSavedMeal, show }) => {
  const nav = [
    { name: "CATEGORIES", path: "/" },
    { name: "YOUR MENU", path: "/saveditems" },
  ];

  const [numberOfData, setnumberOfData] = useState([]);
  useEffect(() => {
    setnumberOfData(useSaveDeleteViewLocalStorage("", "view"));
  }, [countSavedMeal]);

  return (
    <>
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
    </>
  );
};

export default NavButtons;
