import { CiSquareCheck } from "react-icons/ci";
import MainTitle from "./Tittle/MainTitle";
import { MdDownload } from "react-icons/md";
import { FaRegEye } from "react-icons/fa6";
import Lottie from "lottie-react";
import Bubbles from "../../public/json/Bubbles.json";
import { motion } from "motion/react";
import { Link } from "react-router";

const Application = () => {
  return (
    <section className="py-14 relative">
      <Lottie
        animationData={Bubbles}
        className="absolute top-0 right-0 w-40 h-40 opacity-45"
      />
      <img
        src="Fishs.png"
        className="w-62.5 absolute bottom-0 right-0 pointer-events-none opacity-10 -z-20"
        alt=""
      />
      <div
        className="absolute top-0 left-0 blur-[200px] w-38 h-38
       rounded-full bg-blue-500 -z-10"
      ></div>
      <div className="container mx-auto px-3 lg:px-30">
        <MainTitle
          mainText="Limix Mobile Application"
          paraText="Manage your entire fish farm from the palm of your hand! Our mobile app gives you full control."
          text="Applcation Limix"
        />
        <div className="content grid grid-cols-1 lg:grid-cols-2 gap-3 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="image"
          >
            <img src="app.png" alt="" />
          </motion.div>
          <div className="text">
            <motion.li
              initial={{ x: -10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="flex items-center gap-1 list-none mb-3"
            >
              <div className="icon w-8 h-8 bg-linear-to-r from-emerald-400 via-emerald-500 to-emerald-600 flex items-center justify-center rounded-full animate-gradient text-white">
                <CiSquareCheck size={20} />
              </div>
              <p className="text-lg text-transparent bg-clip-text animate-gradient bg-linear-to-r from-black via-indigo-500 to-black font-bold capitalize">
                Monitor Water Quality
              </p>
            </motion.li>
            <motion.li
              initial={{ x: 10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-1 list-none mb-3"
            >
              <div className="icon w-8 h-8 bg-linear-to-r from-emerald-400 via-emerald-500 to-emerald-600 flex items-center justify-center rounded-full animate-gradient text-white">
                <CiSquareCheck size={20} />
              </div>
              <p className="text-lg text-transparent animate-gradient bg-clip-text bg-linear-to-r from-rose-500 via-black to-black font-bold capitalize">
                Get Smart Insights
              </p>
            </motion.li>
            <motion.li
              initial={{ x: -10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-1 list-none mb-3"
            >
              <div className="icon w-8 h-8 bg-linear-to-r from-emerald-400 via-emerald-500 to-emerald-600 flex items-center justify-center rounded-full animate-gradient text-white">
                <CiSquareCheck size={20} />
              </div>
              <p className="text-lg animate-gradient text-transparent bg-clip-text bg-linear-to-r from-black via-black to-emerald-500 font-bold capitalize">
                Control Devices Remotely
              </p>
            </motion.li>
            <motion.li
              initial={{ x: 10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-1 list-none mb-3"
            >
              <div className="icon w-8 h-8 bg-linear-to-r from-emerald-400 via-emerald-500 to-emerald-600 flex items-center justify-center rounded-full animate-gradient text-white">
                <CiSquareCheck size={20} />
              </div>
              <p className="text-lg text-transparent bg-clip-text animate-gradient bg-linear-to-r from-black via-sky-500 to-black font-bold capitalize">
                Cloud Synchronization
              </p>
            </motion.li>

            <div className="btns flex flex-col md:flex-row  items-center justify-center lg:justify-start gap-1 mb-2">
              <Link
                to={"/download"}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="flex items-center gap-1 text-[15px] w-full justify-center text-[#f2f2f2] cursor-pointer rounded-md p-2  main-btn"
              >
                <MdDownload size={20} />
                Download Application
              </Link>
              <Link
                to={"/download"}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className=" flex items-center gap-1 text-[15px] w-full justify-center  cursor-pointer rounded-md p-2 secondary-btn"
              >
                <FaRegEye size={18} />
                Explore Application
              </Link>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="diagram  pt-14"
      >
        <img src="diagram.png" alt="" />
      </motion.div>
    </section>
  );
};

export default Application;
