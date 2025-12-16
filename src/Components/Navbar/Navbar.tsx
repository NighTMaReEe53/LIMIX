import { Link } from "react-router";
import Nav_Links from "./Nav_Links";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import Lottie from "lottie-react";
import CatchFish from "../../../public/json/dolphin.json";

const Navbar = () => {
  const [active, setActive] = useState(false);

  return (
    <nav className="lg:overflow-hidden ">
      <div className="container relative mx-auto px-3 lg:px-30 h-18 flex items-center justify-between">
        <Link to={"/"} className="flex items-center gap-2">
          <img src="logo.png" className="w-12.5 h-12.5" alt="" />
          <h2 className="font-bold text-[20px] bg-clip-text bg-linear-to-r from-black via-sky-500 to-black text-transparent animate-gradient">
            Limix Aqucalature
          </h2>
        </Link>
        <Lottie animationData={CatchFish} className="w-17.5 h-17.5" />
        <div
          className="icon block lg:hidden"
          onClick={() => setActive(!active)}
        >
          <CiMenuFries
            size={27}
            color="#404040"
            className="cursor-pointer font-bold"
          />
        </div>
        {active && (
          <div
            onClick={(e) => {
              setActive(!active);
              e.stopPropagation();
            }}
            className={`overlay bg-[#0000003b] fixed top-0 left-0 ${
              active ? "left-0" : "-left-12/12"
            } w-screen h-screen z-10 backdrop-blur-xs transition-all delay-150 cursor-pointer lg:hidden `}
          ></div>
        )}
        {active && (
          <span
            className={`fixed top-8 right-3 z-40 lg:hidden ${
              !active
                ? "opacity-0 pointer-events-none"
                : "opacity-100 pointer-events-auto"
            } transition-opacity decoration-1`}
            onClick={() => setActive(!active)}
          >
            <IoIosClose size={40} color="#f05" className="cursor-pointer" />{" "}
          </span>
        )}
        <Nav_Links show={active} />
      </div>
    </nav>
  );
};

export default Navbar;
