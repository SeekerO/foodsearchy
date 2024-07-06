import Router from "../../router/router";
import { Suspense } from "react";
import { ring2 } from "ldrs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
ring2.register();

// Default values shown

const MainSection = ({ countSavedMeal, setscountSavedMeal }) => {
  return (
    <div className="h-full w-full bg-slate-200 flex">
      <Suspense
        fallback={
          <div className="h-full w-full items-center justify-center flex">
            <l-ring-2
              size="40"
              stroke="5"
              stroke-length="0.25"
              bg-opacity="0.1"
              speed="0.8"
              color="#973131"
            ></l-ring-2>
          </div>
        }
      >
        <Router
          countSavedMeal={countSavedMeal}
          setscountSavedMeal={setscountSavedMeal}
        />
      </Suspense>
      <ToastContainer />
    </div>
  );
};

export default MainSection;
