import Application from "../Components/Application";
import Articels from "../Components/Articels";
import Choose from "../Components/Choose";
import Dots from "../Components/Dots";
import Footer from "../Components/Footer";
import Good from "../Components/Good";
import Landing from "../Components/Landing";
import Navbar from "../Components/Navbar/Navbar";
import Review from "../Components/Review";
import fish from "../../public/json/loader.json";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";

const Home = () => {
  const [active, setIsActive] = useState(true);

  const OverBody = () => {
    if (active) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setIsActive(false);
    }, 3000);
    OverBody();
  }, [active]);

  return (
    <>
      <div
        className={`loader fixed top-0 left-0 w-full h-screen bg-black transition after:w-35 after:h-35 after:bg-blue-500 after:absolute after:bottom-0 after:right-0 after:rounded-full after:blur-[150px] before:w-35 before:blur-[150px] before:h-35 before:bg-blue-500 before:absolute before:top-0 before:left-0 before:rounded-full ${
          !active && "opacity-0 pointer-events-none"
        }`}
      >
        <Lottie animationData={fish} className="w-full h-full" />
      </div>
      <div
        className={`${
          active ? "opacity-0 top-70" : "opacity-100 top-0"
        } transition duration-100`}
      >
        <Navbar />
        <Landing />
        <Good />
        <Choose />
        <Application />
        <Dots />
        <Articels />
        <Review />
        <Footer />
      </div>
    </>
  );
};

export default Home;
