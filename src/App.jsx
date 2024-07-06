import Header from "./components/layout/header/Header";
import MainSection from "./components/layout/section/MainSection";
import Footer from "./components/layout/footer/Footer";
import { useState } from "react";
import { Turn as Hamburger } from "hamburger-react";
import Sidebar from "./components/layout/sidebar/Sidebar";
function App() {
  const [countSavedMeal, setscountSavedMeal] = useState(false);
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="flex flex-col w-screen h-screen  text-black overflow-y-auto overflow-x-hidden">
      <div className="flex w-full  ">
        <Header countSavedMeal={countSavedMeal} />

        <div className="md:hidden flex  w-full items-end justify-end mt-5 px-2 fixed z-50">
          <Hamburger toggled={isOpen} toggle={setOpen} color="#F5E7B2" />
        </div>
      </div>
      <section className="flex w-full h-full p-5 overflow-y-auto ">
        <MainSection
          countSavedMeal={countSavedMeal}
          setscountSavedMeal={setscountSavedMeal}
        />
      </section>
      {isOpen && <Sidebar countSavedMeal={countSavedMeal} isOpen={isOpen} />}
      <footer className="flex w-full ">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
