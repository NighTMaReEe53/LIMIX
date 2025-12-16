import { FaRegEye } from "react-icons/fa";
import { MdDownload } from "react-icons/md";

import fish from "../../public/json/dashboard.json";
import Lottie from "lottie-react";
import { IoIosArrowDropdown } from "react-icons/io";

import { motion } from "motion/react";
import { Link } from "react-router";

const Landing = () => {
  return (
    <section className="landing-page flex items-center relative">
      <div className="container mx-auto px-3 lg:px-30">
        <div className="flex items-center justify-between flex-col lg:flex-row">
          <div className="text basis-[60%] text-center lg:text-start">
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="pill mb-3 w-fit mx-auto lg:mx-0 rounded-full flex items-center gap-1 p-2"
            >
              <span className="w-1.5 h-1.5 block rounded-full dot"></span>
              <span className="text-xs relative font-bold bg-linear-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent ">
                Turn Your Farm into the Future
              </span>
            </motion.p>
            <motion.h2
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-bold text-4xl md:text-7xl lg:text-5xl leading-15 md:leading-24 lg:leading-15 mb-3 bg-clip-text animate-gradient text-transparent bg-linear-to-r from-blue-400 via-cyan-700 to-black "
            >
              Bring Intelligence and Automation to Your Aquaculture Farm
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-[15px] text-(--TextColor) capitalize mb-3"
            >
              Transform Your Fish Farm with Smart Aquaculture Technology
            </motion.p>
            <div className="btns flex items-center justify-center lg:justify-start gap-1 mb-2">
              <Link
                to={"/download"}
                className="flex items-center gap-1 text-[15px] text-[#f2f2f2] cursor-pointer rounded-md p-2  main-btn"
              >
                <MdDownload size={20} />
                Download
              </Link>
              <motion.a
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className=" flex items-center gap-1 text-[15px]  cursor-pointer rounded-md p-2 secondary-btn"
                href="#feature"
              >
                <FaRegEye size={18} />
                Explore Feature
              </motion.a>
            </div>
            <div className="flex gap-1 items-center mt-4">
              <motion.p
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                className="pill mb-3 w-fit mx-auto lg:mx-0 rounded-md flex items-center gap-1 p-2"
              >
                <span className="w-1.5 h-1.5 block rounded-full dot"></span>
                <span className="text-xs relative font-bold bg-linear-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent ">
                  Machine Learning
                </span>
              </motion.p>
              <motion.p
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="pill mb-3 w-fit mx-auto lg:mx-0 rounded-md flex items-center gap-1 p-2"
              >
                <span className="w-1.5 h-1.5 block rounded-full dot"></span>
                <span className="text-xs relative font-bold bg-linear-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent ">
                  Python
                </span>
              </motion.p>
              <motion.p
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="pill mb-3 w-fit mx-auto lg:mx-0 rounded-md flex items-center gap-1 p-2"
              >
                <span className="w-1.5 h-1.5 block rounded-full dot"></span>
                <span className="text-xs relative font-bold bg-linear-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent ">
                  Sensor's
                </span>
              </motion.p>
              <motion.p
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="pill mb-3 w-fit mx-auto lg:mx-0 rounded-md flex items-center gap-1 p-2"
              >
                <span className="w-1.5 h-1.5 block rounded-full dot"></span>
                <span className="text-xs relative font-bold bg-linear-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent ">
                  Team Work
                </span>
              </motion.p>
            </div>
          </div>
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex-1 "
          >
            <Lottie
              animationData={fish}
              loop
              className="w-87.5 h-87.5 md:w-125
          md:h-125"
            />
          </motion.div>
          <a
            href="#feature"
            className="absolute bottom-5 left-[50%] translate-x-[-50%] animate-bounce cursor-pointer"
          >
            <IoIosArrowDropdown size={30} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Landing;
