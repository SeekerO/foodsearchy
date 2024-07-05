import Header from "./components/layout/header/Header";
import MainSection from "./components/layout/section/MainSection";
import Footer from "./components/layout/footer/Footer";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="flex flex-col w-screen h-screen  text-black overflow-y-auto overflow-x-hidden">
      <div className="flex w-full  ">
        <Header />
      </div>
      <section className="flex w-full h-full p-5 overflow-y-auto ">
        <MainSection />
      </section>
      <footer className="flex w-full ">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
