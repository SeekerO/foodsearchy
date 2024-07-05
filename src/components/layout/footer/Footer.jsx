import React from "react";

const Footer = () => {
  return (
    <div className="h-[30px] text-[10px] w-full sticky bgMainColor textColor px-4 items-center flex gap-1 font-thin">
      © 2024
      <a
        onClick={() => window.open("https://www.seekerportfolio.site/home", "")}
        className="hover:underline hover:text-blue-500 cursor-pointer"
      >
        SeekerDev
      </a>
      . All Rights Reserved. <span></span>
    </div>
  );
};

export default Footer;
