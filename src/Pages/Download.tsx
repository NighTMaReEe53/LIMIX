import { motion } from "motion/react";
import { FaAppStoreIos } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { IoFish, IoLogoAndroid, IoPieChartSharp } from "react-icons/io5";
import Animation from "../../public/json/App.json";
import Lottie from "lottie-react";
import Animation2 from "../../public/json/Check.json";
import { FaHandHoldingWater } from "react-icons/fa";
import { RiRobot3Fill } from "react-icons/ri";
import Bubbles from "../../public/json/Bubbles.json";
import DownloadAnaimation from "../../public/json/Download.json";
import { CiBookmarkCheck } from "react-icons/ci";
import Good from "../Components/Good";

const Download = () => {
  return (
    <section className="download relative">
      <Lottie
        animationData={Bubbles}
        className="absolute top-0 left-0 w-40 h-40 opacity-45"
      />
      <Lottie
        animationData={Bubbles}
        className="absolute top-0 right-0 w-40 h-40 opacity-45"
      />
      <div className="absolute top-0 left-0 bg-blue-500 w-50 h-50 rounded-full -z-30 blur-[300px]"></div>

      <div className="container mx-auto px-3 lg:px-30">
        <div className="height flex items-center relative py-14">
          <div className="content grid grid-cols-1 lg:grid-cols-2 gap-3">
            <div className="text text-center lg:text-start order-2 lg:order-0">
              <motion.p
                initial={{ y: -10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                className="pill mb-3 w-fit mx-auto md:mx-0 rounded-full flex items-center gap-1 p-2"
              >
                <span className="w-1.5 h-1.5 block rounded-full dot"></span>
                <span className="text-[13px]  relative font-bold bg-linear-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent ">
                  Limix Application
                </span>
              </motion.p>
              <motion.h2
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="font-bold text-3xl lg:text-7xl my-3 lg:leading-20 text-transparent bg-clip-text bg-linear-to-r from-black animate-gradient via-indigo-500 to-indigo-600"
              >
                Your Smart Companion For Aquaculture Intelligence
              </motion.h2>
              <motion.p
                initial={{ y: -10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-(--TextColor) mb-3 capitalize"
              >
                Welcome to the official LIMIX download center. Here you can find
                all the tools, applications, and resources needed to manage your
                AI-powered smart aquarium.{" "}
              </motion.p>
              <div className="info flex items-center lg:justify-start justify-center gap-3">
                <motion.h2
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-1 font-bold text-transparent bg-clip-text bg-linear-to-r from-black via-blue-500 to-black"
                >
                  Download For
                  <IoIosArrowForward size={20} color="#333" />
                </motion.h2>
                <motion.button
                  initial={{ opacity: 0, x: -5 }}
                  whileInView={{ opacity: 0.5, x: 0 }}
                  transition={{ delay: 0.2 }}
                  title="Download For Android"
                  className="icon w-12 h-12 cursor-pointer opacity-50 bg-linear-to-r mobile-icon transition from-indigo-400 via-indigo-500 to-indigo-600 rounded-md flex items-center justify-center text-white"
                >
                  <IoLogoAndroid size={25} />
                </motion.button>
                <motion.button
                  initial={{ opacity: 0, y: -5 }}
                  whileInView={{ opacity: 0.5, y: 0 }}
                  transition={{ delay: 0.4 }}
                  title="Download For IOS"
                  className="icon w-12 h-12 cursor-pointer opacity-50 mobile-icon transition bg-linear-to-r from-rose-400 via-rose-500 to-rose-600 rounded-md flex items-center justify-center text-white"
                >
                  <FaAppStoreIos size={25} />
                </motion.button>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Lottie
                animationData={Animation}
                className="w-full h-80 lg:h-auto"
              />
            </motion.div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 py-14 items-center relative">
          <div className="absolute top-0 right-0 bg-blue-60 w-100 h-60 rounded-full -z-30 blur-[100px]"></div>

          <Lottie
            animationData={Bubbles}
            className="absolute top-0 left-0 w-40 h-40 opacity-45"
          />
          <Lottie
            animationData={Bubbles}
            className="absolute top-0 right-0 w-40 h-40 opacity-45"
          />

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Lottie
              animationData={Animation2}
              className="w-full h-80 lg:h-auto"
            />
          </motion.div>
          <div className="text">
            <motion.p
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="pill mb-3 w-fit mx-auto md:mx-0 rounded-full flex items-center gap-1 p-2"
            >
              <span className="w-1.5 h-1.5 block rounded-full dot"></span>
              <span className="text-[13px]  relative font-bold bg-linear-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent ">
                Key Feature's
              </span>
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="font-bold  text-xl animate-gradient text-center lg:text-start md:text-4xl text-transparent bg-clip-text from-black via-blue-500 to-black bg-linear-to-r mb-3"
            >
              Why Farmers & Engineers Choose LIMIX
            </motion.h2>
            <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="box shadow-(--shadow) p-3 border-(--borderColor) border-2 rounded-md box-hover"
              >
                <div className="icon w-15 h-15 bg-linear-to-r  from-indigo-400 via-indigo-500 to-indigo-600 mb-2 flex items-center justify-center text-[#f1f5f9] rounded-md">
                  <FaHandHoldingWater size={35} />
                </div>
                <h2 className="font-bold text-xl animate-gradient mb-2 text-transparent bg-clip-text bg-linear-to-r from-black via-indigo-600 to-black">
                  Live Water Monitoring
                </h2>
                <p className="text-(--TextColor) capitalize">
                  Track pH, Dissolved Oxygen (DO), Temperature, Ammonia,
                  Salinity, And Turbidity In Real Time
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="box shadow-(--shadow) p-3  bg-linear-to-r from-teal-400 via-teal-500 to-teal-600  rounded-md "
              >
                <div className="icon w-15 h-15 border-2 mb-2 flex items-center justify-center text-[#f1f5f9] rounded-md">
                  <RiRobot3Fill size={35} />
                </div>
                <h2 className="font-bold text-xl animate-gradient mb-2 text-transparent bg-clip-text bg-linear-to-r from-black via-white to-black">
                  AI Risk Prediction
                </h2>
                <p className="text-[#f1f5f9] capitalize">
                  Get Early warnings before oxygen drops, ammonia spikes, or
                  fish stress occurs
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="box shadow-(--shadow) p-3 bg-linear-to-r from-purple-400 via-purple-500 to-purple-600  rounded-md "
              >
                <div className="icon w-15 h-15 bg-linear-to-r  border-2 mb-2 flex items-center justify-center text-[#f1f5f9] rounded-md">
                  <IoPieChartSharp size={35} />
                </div>
                <h2 className="font-bold text-xl animate-gradient mb-2 text-transparent bg-clip-text bg-linear-to-r from-black via-white to-black">
                  Visual Dashboards
                </h2>
                <p className="text-[#f1f5f9] capitalize">
                  Clear Chart's, Color-Coded Status, And Easy-To-Read
                  Indicators.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="box shadow-(--shadow) p-3 border-(--borderColor) border-2 rounded-md box-hover"
              >
                <div className="icon w-15 h-15 bg-linear-to-r  from-rose-400 via-rose-500 to-rose-600 mb-2 flex items-center justify-center text-[#f1f5f9] rounded-md">
                  <IoFish size={35} />
                </div>
                <h2 className="font-bold text-xl animate-gradient mb-2 text-transparent bg-clip-text bg-linear-to-r from-black via-rose-600 to-black">
                  Fish Activity Insights
                </h2>
                <p className="text-(--TextColor) capitalize">
                  AI-Powered Fish Counting, Sizing, And Behavior Analysis Using
                  Computer Vision.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 py-14 items-center relative">
          <div className="absolute bottom-0 left-0 bg-blue-60 w-60 h-60 rounded-full -z-30 blur-[100px]"></div>

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
                Limix Powered By Intelligence
              </span>
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="font-bold  text-[20px] animate-gradient text-center animate-gradient lg:text-start md:text-3xl text-transparent bg-clip-text from-black via-cyan-500 to-black bg-linear-to-r mb-3"
            >
              Built With Ai Designed For Real Farm's
            </motion.h2>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-1 items-center">
                <CiBookmarkCheck size={25} className="text-teal-600" />
                <motion.span
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="font-medium capitalize text-[13px] md:text-[16px] animate-gradient text-transparent bg-clip-text bg-linear-to-r from-black via-teal-500 to-black"
                >
                  Limix Uses Advanced Algorithms To
                </motion.span>
              </li>
              <li className="flex gap-1 items-center">
                <CiBookmarkCheck size={25} className="text-teal-600" />
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="font-medium capitalize text-lg animate-gradient text-transparent bg-clip-text bg-linear-to-r from-indigo-500 via-black to-black"
                >
                  1. Detect Abnormal Water Behavior
                </motion.span>
              </li>
              <li className="flex gap-1 items-center">
                <CiBookmarkCheck size={25} className="text-teal-600" />
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="font-medium capitalize text-lg text-transparent animate-gradient bg-clip-text bg-linear-to-r from-black via-black to-orange-500"
                >
                  2. Predict Future Risks
                </motion.span>
              </li>
              <li className="flex gap-1 items-center">
                <CiBookmarkCheck size={25} className="text-teal-600" />
                <motion.span
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="font-medium capitalize text-lg animate-gradient text-transparent bg-clip-text bg-linear-to-r from-rose-500 via-black to-cyan-500"
                >
                  3. Recommend Optimal Actions
                </motion.span>
              </li>
              <li className="flex gap-1 items-center">
                <CiBookmarkCheck size={25} className="text-teal-600" />
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                  className="font-medium capitalize text-lg animate-gradient text-transparent bg-clip-text bg-linear-to-r from-sky-500 via-sky-600 to-black"
                >
                  4. Improve Fedding Efficiency
                </motion.span>
              </li>
              <li className="flex gap-1 items-center">
                <CiBookmarkCheck size={25} className="text-teal-600" />
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 }}
                  className="font-medium capitalize text-lg text-transparent animate-gradient bg-clip-text bg-linear-to-r from-black via-violet-500 to-black"
                >
                  5. Reduce Fish Mortality
                </motion.span>
              </li>
              <li className="flex gap-1 items-center">
                <CiBookmarkCheck size={25} className="text-teal-600" />
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4 }}
                  className="font-medium capitalize flex items-center gap-1 text-[15px] md:text-lg animate-gradient text-transparent bg-clip-text bg-linear-to-r from-blue-500 via-blue-600 to-black"
                >
                  6. From Raw Sensor Data{" "}
                  <IoIosArrowForward size={15} color="#000" /> To Smart
                  Decisions
                </motion.span>
              </li>
            </ul>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Lottie animationData={DownloadAnaimation} />
          </motion.div>
        </div>
      </div>
      <Good />
    </section>
  );
};

export default Download;
