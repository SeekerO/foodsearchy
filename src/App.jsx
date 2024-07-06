import Header from "./components/layout/header/Header";
import MainSection from "./components/layout/section/MainSection";
import Footer from "./components/layout/footer/Footer";
import { useState } from "react";
function App() {
  const [countSavedMeal, setscountSavedMeal] = useState(false);
  console.log(countSavedMeal);
  return (
    <div className="flex flex-col w-screen h-screen  text-black overflow-y-auto overflow-x-hidden">
      <div className="flex w-full  ">
        <Header countSavedMeal={countSavedMeal} />
      </div>
      <section className="flex w-full h-full p-5 overflow-y-auto ">
        <MainSection
          countSavedMeal={countSavedMeal}
          setscountSavedMeal={setscountSavedMeal}
        />
      </section>
      <footer className="flex w-full ">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
