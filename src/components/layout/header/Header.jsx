import React from "react";
import { FaBowlFood } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Header = () => {
  const nav = [
    { name: "CATEGORIES", path: "/" },
    { name: "YOUR MENU", path: "/saveditems" },
  ];
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
            <Link
              key={index}
              to={navData.path}
              className=" hover:underline  underline-offset-2 font-medium text-[15px]"
            >
              {navData.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
