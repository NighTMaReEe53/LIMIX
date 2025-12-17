import { motion } from "motion/react";
import { FaShippingFast } from "react-icons/fa";
import fish from "../../public/json/Fishs.json";
import Lottie from "lottie-react";
import { MdSettingsApplications, MdShoppingCart } from "react-icons/md";
import { RiRobot3Fill } from "react-icons/ri";
import { IoIosArrowDropdown, IoIosArrowForward } from "react-icons/io";
import { FaStar, FaWhatsapp } from "react-icons/fa6";
import { CiSquareCheck } from "react-icons/ci";
import Bubbles from "../../public/json/Bubbles.json";
import Water from "../../public/json/water.json";
import Choose from "../Components/Choose";

const Product = () => {
  return (
    <section className="relative">
      <div className="absolute top-0 left-0 bg-blue-500 w-40 h-40 rounded-full -z-30 blur-[150px]"></div>
      <Lottie
        animationData={Bubbles}
        className="absolute top-0 left-0 w-40 h-40 opacity-45"
      />
      <Lottie
        animationData={Water}
        className="absolute top-0 right-0 w-40 h-40 opacity-45"
      />

      <div className="container mx-auto px-3 lg:px-30">
        <div className="height flex items-center relative">
          <div className="content grid grid-cols-1 lg:grid-cols-2 gap-3 items-center">
            <div className="text text-center lg:text-start order-2 lg:order-0">
              <motion.p
                initial={{ y: -10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                className="pill mb-3 w-fit mx-auto md:mx-0 rounded-full flex items-center gap-1 p-2"
              >
                <span className="w-1.5 h-1.5 block rounded-full dot"></span>
                <span className="text-[13px]  relative font-bold bg-linear-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent ">
                  Limix Product
                </span>
              </motion.p>
              <motion.h2
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="font-bold text-3xl leading-10 lg:text-5xl my-3 lg:leading-17 text-transparent bg-clip-text bg-linear-to-r from-black animate-gradient via-blue-500 to-blue-600"
              >
                LIMIX Smart Floating Water Monitoring Platform
              </motion.h2>
              <motion.p
                initial={{ y: -10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-(--TextColor) mb-3 capitalize"
              >
                The LIMIX Floating platform is an intelligent all in one
                solution for water quality monitoring powered by Artificial
                Intelligence (AI).
              </motion.p>
              <div className="flex gap-2 items-center justify-center lg:justify-start">
                <motion.div
                  initial={{ opacity: 0, x: -5 }}
                  whileInView={{ opacity: 0.5, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="icon w-12 h-12 bg-linear-to-r mobile-icon transition from-teal-400 via-teal-500 to-teal-600 rounded-md flex items-center justify-center text-white"
                >
                  <MdShoppingCart size={20} />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  whileInView={{ opacity: 0.5, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="icon w-12 h-12 bg-linear-to-r mobile-icon transition from-indigo-400 via-indigo-500 to-indigo-600 rounded-md flex items-center justify-center text-white"
                >
                  <RiRobot3Fill size={20} />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 5 }}
                  whileInView={{ opacity: 0.5, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="icon w-12 h-12 bg-linear-to-r mobile-icon transition from-rose-400 via-rose-500 to-rose-600 rounded-md flex items-center justify-center text-white"
                >
                  <FaShippingFast size={20} />
                </motion.div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Lottie
                animationData={fish}
                className=" w-full h-66 lg:h-auto "
              />
            </motion.div>
          </div>
          <a
            href="#choose"
            className="absolute bottom-5 left-[50%] translate-x-[-50%] animate-bounce cursor-pointer"
          >
            <IoIosArrowDropdown size={30} />
          </a>
        </div>
      </div>
      <Choose />
      <div className="container mx-auto px-3 lg:px-30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-3 py-14 items-center relative">
          <div className="absolute top-0 left-0 bg-blue-500 rounded-full w-50 h-50 -z-40 blur-[200px]"></div>
          <Lottie
            animationData={Bubbles}
            className="absolute top-0 left-0 w-40 h-40 opacity-45"
          />
          <Lottie
            animationData={Bubbles}
            className="absolute top-0 right-0 w-40 h-40 opacity-45"
          />

          <motion.div
            initial={{ opacity: 0, x: 5 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="image relative"
          >
            <span className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] w-70 h-70 lg:w-90 lg:h-90 bg-linear-to-r from-indigo-300 via-indigo-400 to-indigo-500 rounded-full -z-20 blur-sm"></span>
            <img src="project-2.png" className="animate-bounce" alt="" />
          </motion.div>

          <div className="text">
            <motion.p
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="pill mb-3 w-fit mx-auto md:mx-0 rounded-full flex items-center gap-1 p-2"
            >
              <span className="w-1.5 h-1.5 block rounded-full dot"></span>
              <span className="text-[13px]  relative font-bold bg-linear-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent ">
                First Limix Product
              </span>
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="mb-3 text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-black via-indigo-600 to-black animate-gradient"
            >
              Smart Floating Water Monitoring
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-(--TextColor) capitalize"
            >
              A smart floating designed for water monitoring and analysis, ideal
              for use in lakes, reservoirs, fish farms, and calm water
              environment
            </motion.p>
            <ul className="flex flex-col gap-2 my-3">
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex gap-1 items-center mb-2"
              >
                <FaStar className="text-amber-400" size={20} />
                <p className="font-medium text-[16px] text-transparent bg-clip-text bg-linear-to-r animate-gradient from-black via-orange-600 to-black">
                  Stable Floating design with Dual Pontoons
                </p>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex gap-1 items-center mb-2"
              >
                <FaStar className="text-amber-400" size={20} />
                <p className="font-medium text-[16px] text-transparent bg-clip-text bg-linear-to-r animate-gradient from-blue-500 via-black to-black">
                  3D Printed Structure Made From PETG, Resistant To Moisture
                </p>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex gap-1 items-center mb-2"
              >
                <FaStar className="text-amber-400" size={20} />
                <p className="font-medium text-[16px] text-transparent bg-clip-text bg-linear-to-r animate-gradient from-black via-black to-violet-600">
                  Sealed Electronics Enclosure For Protecting Internal.
                </p>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex gap-1 items-center mb-2"
              >
                <FaStar className="text-amber-400" size={20} />
                <p className="font-medium text-[16px] text-transparent bg-clip-text bg-linear-to-r animate-gradient from-black via-rose-600 to-black">
                  Wirless Antenna For Remote Data Transmission
                </p>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="flex gap-1 items-center mb-3"
              >
                <FaStar className="text-amber-400" size={20} />
                <p className="font-medium text-[16px] text-transparent bg-clip-text bg-linear-to-r animate-gradient from-sky-600 via-black to-black">
                  Suitable For Research, Agricultural And Environmental.
                </p>
              </motion.li>
            </ul>
            <ul className="flex flex-col gap-2">
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="flex gap-1 font-bold mb-2 text-[16px] items-center text-transparent bg-clip-text bg-linear-to-r from-black via-indigo-600 to-black animate-gradient"
              >
                <MdSettingsApplications size={25} color="#1f1f1f" />
                Applications
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
                className="flex gap-1 font-bold text-[16px] items-center text-transparent bg-clip-text bg-linear-to-r from-black via-blue-600 to-black animate-gradient"
              >
                <CiSquareCheck size={25} className="text-teal-600" />
                Water Quality Monitoring
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
                className="flex gap-1 font-bold text-[16px] items-center text-transparent bg-clip-text bg-linear-to-r from-rose-600 via-black to-black animate-gradient"
              >
                <CiSquareCheck size={25} className="text-teal-600" />
                Aquaculture And Fish Farms
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 }}
                className="flex gap-1 font-bold text-[16px] items-center text-transparent bg-clip-text bg-linear-to-r from-black via-black to-teal-600 animate-gradient"
              >
                <CiSquareCheck size={25} className="text-teal-600" />
                Aquaculture And Fish Farms
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.8 }}
                className="flex gap-1 font-bold text-[16px] items-center text-transparent bg-clip-text bg-linear-to-r from-black via-purple-600 to-black animate-gradient"
              >
                <CiSquareCheck size={25} className="text-teal-600" />
                Smart Water Monitoring Solution's
              </motion.li>
            </ul>
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.6 }}
              className="mt-3 font-bold text-transparent bg-clip-text bg-linear-to-r animate-gradient from-black via-blue-600 to-black flex items-center gap-1"
            >
              Contact Us To Buy It
              <IoIosArrowForward size={25} color="#1f1f1f" />
              <div className="icon w-10 h-10 cursor-pointer mobile-icon transition rounded-md bg-linear-to-r from-teal-400 via-teal-500 to-teal-600 text-white flex items-center justify-center">
                <FaWhatsapp size={22} />
              </div>
            </motion.div>
          </div>
        </div>
        {/* End */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-3 py-14 items-center relative">
          <div className="absolute top-0 right-0 bg-blue-500 rounded-full w-50 h-50 -z-40 blur-[200px]"></div>
          <Lottie
            animationData={Bubbles}
            className="absolute top-0 left-0 w-40 h-40 opacity-45"
          />
          <Lottie
            animationData={Bubbles}
            className="absolute top-0 right-0 w-40 h-40 opacity-45"
          />

          <div className="text order-2 lg:order-0">
            <motion.p
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="pill mb-3 w-fit mx-auto md:mx-0 rounded-full flex items-center gap-1 p-2"
            >
              <span className="w-1.5 h-1.5 block rounded-full dot"></span>
              <span className="text-[13px]  relative font-bold bg-linear-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent ">
                Second Limix Product
              </span>
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="mb-3 text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-black via-indigo-600 to-black animate-gradient"
            >
              Smart Floating Water Monitoring
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-(--TextColor) capitalize"
            >
              A smart floating designed for water monitoring and analysis, ideal
              for use in lakes, reservoirs, fish farms, and calm water
              environment
            </motion.p>
            <ul className="flex flex-col gap-2 my-3">
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex gap-1 items-center mb-2"
              >
                <FaStar className="text-amber-400" size={20} />
                <p className="font-medium text-[16px] text-transparent bg-clip-text bg-linear-to-r animate-gradient from-black via-orange-600 to-black">
                  Stable Floating design with Dual Pontoons
                </p>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex gap-1 items-center mb-2"
              >
                <FaStar className="text-amber-400" size={20} />
                <p className="font-medium text-[16px] text-transparent bg-clip-text bg-linear-to-r animate-gradient from-blue-500 via-black to-black">
                  3D Printed Structure Made From PETG, Resistant To Moisture
                </p>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex gap-1 items-center mb-2"
              >
                <FaStar className="text-amber-400" size={20} />
                <p className="font-medium text-[16px] text-transparent bg-clip-text bg-linear-to-r animate-gradient from-black via-black to-violet-600">
                  Sealed Electronics Enclosure For Protecting Internal.
                </p>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex gap-1 items-center mb-2"
              >
                <FaStar className="text-amber-400" size={20} />
                <p className="font-medium text-[16px] text-transparent bg-clip-text bg-linear-to-r animate-gradient from-black via-rose-600 to-black">
                  Wirless Antenna For Remote Data Transmission
                </p>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="flex gap-1 items-center mb-3"
              >
                <FaStar className="text-amber-400" size={20} />
                <p className="font-medium text-[16px] text-transparent bg-clip-text bg-linear-to-r animate-gradient from-sky-600 via-black to-black">
                  Suitable For Research, Agricultural And Environmental.
                </p>
              </motion.li>
            </ul>
            <ul className="flex flex-col gap-2">
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="flex gap-1 font-bold mb-2 text-[16px] items-center text-transparent bg-clip-text bg-linear-to-r from-black via-indigo-600 to-black animate-gradient"
              >
                <MdSettingsApplications size={25} color="#1f1f1f" />
                Applications
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
                className="flex gap-1 font-bold text-[16px] items-center text-transparent bg-clip-text bg-linear-to-r from-black via-blue-600 to-black animate-gradient"
              >
                <CiSquareCheck size={25} className="text-teal-600" />
                Water Quality Monitoring
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
                className="flex gap-1 font-bold text-[16px] items-center text-transparent bg-clip-text bg-linear-to-r from-rose-600 via-black to-black animate-gradient"
              >
                <CiSquareCheck size={25} className="text-teal-600" />
                Aquaculture And Fish Farms
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 }}
                className="flex gap-1 font-bold text-[16px] items-center text-transparent bg-clip-text bg-linear-to-r from-black via-black to-teal-600 animate-gradient"
              >
                <CiSquareCheck size={25} className="text-teal-600" />
                Aquaculture And Fish Farms
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.8 }}
                className="flex gap-1 font-bold text-[16px] items-center text-transparent bg-clip-text bg-linear-to-r from-black via-purple-600 to-black animate-gradient"
              >
                <CiSquareCheck size={25} className="text-teal-600" />
                Smart Water Monitoring Solution's
              </motion.li>
            </ul>
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.6 }}
              className="mt-3 font-bold text-transparent bg-clip-text bg-linear-to-r animate-gradient from-black via-blue-600 to-black flex items-center gap-1"
            >
              Contact Us To Buy It
              <IoIosArrowForward size={25} color="#1f1f1f" />
              <div className="icon w-10 h-10 cursor-pointer mobile-icon transition rounded-md bg-linear-to-r from-teal-400 via-teal-500 to-teal-600 text-white flex items-center justify-center">
                <FaWhatsapp size={22} />
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 5 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="image relative"
          >
            <span className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] w-70 h-70 lg:w-90 lg:h-90 bg-linear-to-r from-rose-300 via-rose-400 to-rose-500 rounded-full -z-20 blur-sm"></span>
            <img src="project-1.png" className="animate-bounce" alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Product;
