import { Outlet } from "react-router";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer";
import Dots from "../Components/Dots";
import Loader from "../../public/json/loader.json";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";

const Layout = () => {
  const [active, setActive] = useState(true);

  const OverFlowBody = () => {
    if (active) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setActive(false);
    }, 3000);
    OverFlowBody();
  }, [active]);

  return (
    <>
      <div
        className={`loader fixed top-0 left-0 w-full h-full transition-opacity z-99999 bg-black ${
          active ? "opacity-100 pointer-events-none" : "opacity-0 pointer-events-none"
        }`}
      >
        <Lottie animationData={Loader} className="w-full h-full" />
      </div>
      <Navbar />
      <Dots />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
