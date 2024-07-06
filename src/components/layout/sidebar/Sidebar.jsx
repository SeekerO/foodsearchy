import React from "react";
import NavButtons from "../../utils/NavButtons";
import { motion } from "framer-motion";
const Sidebar = ({ countSavedMeal, isOpen }) => {
  return (
    <motion.div
      initial={!isOpen ? { opacity: 0 } : { opacity: 1 }}
      animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
      className={`w-[200px]  h-full absolute right-0 bgMainColor shadow-lg shadow-black z-30`}
    >
      <div className="textColor px-2 mt-20">
        <NavButtons show="side" countSavedMeal={countSavedMeal} />
      </div>
    </motion.div>
  );
};

export default Sidebar;
