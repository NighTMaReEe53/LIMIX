import { LuBrain } from "react-icons/lu";
import MainTitle from "./Tittle/MainTitle";
import { SiRainmeter } from "react-icons/si";
import { FaTemperatureHalf } from "react-icons/fa6";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { IoFlashOutline } from "react-icons/io5";
import { AiOutlineSafety } from "react-icons/ai";
import Bubbles from "../../public/json/Bubbles.json";
import Lottie from "lottie-react";

import { motion } from "motion/react";

const Good = () => {
  return (
    <section className="good py-14 relative" id="feature">
      <Lottie
        animationData={Bubbles}
        className="absolute top-0 right-0 w-40 h-40 opacity-45"
      />
      <Lottie
        animationData={Bubbles}
        className="absolute top-0 left-0 w-40 h-40 opacity-45"
      />
      <div className="container relative mx-auto px-3 lg:px-30">
        <MainTitle
          text="What distinguishes us"
          mainText="Advanced Features"
          paraText="State-of-the-art technology for comprehensive aquarium ecosystem
        management"
        />

        <div className="content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <motion.div
            initial={{ x: -10, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="box shadow-(--shadow) p-3 border-(--borderColor) border-2 rounded-md box-hover"
          >
            <div className="icon w-15 h-15 bg-linear-to-r  from-blue-400 via-blue-500 to-blue-600 mb-2 flex items-center justify-center text-[#f1f5f9] rounded-md">
              <LuBrain size={35} />
            </div>
            <div className="text">
              <h2 className="font-bold text-xl animate-gradient mb-2 text-transparent bg-clip-text bg-linear-to-r from-black via-blue-600 to-black">
                AI-Powered Analytics
              </h2>
              <p className="text-(--TextColor)">
                Machine learning algorithms analyze water parameters and predict
                maintenance needs before issues arise
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="box box-hover bg-(--boxLinear) p-3 shadow-(--shadow) border-(--borderColor) border-2 rounded-md"
          >
            <div className="icon w-15 h-15 bg-linear-to-r from-cyan-400 via-cyan-500 to-cyan-600 mb-2 flex items-center justify-center text-[#f1f5f9] rounded-md">
              <SiRainmeter size={35} />
            </div>
            <div className="text">
              <h2 className="font-bold animate-gradient text-xl mb-2 text-transparent bg-clip-text bg-linear-to-r from-cyan-600 via-black to-black">
                Real-Time Monitoring
              </h2>
              <p className="text-(--TextColor)">
                Continuous monitoring of pH, salinity, ammonia, nitrite, and
                nitrate levels with instant alerts
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 10, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="box box-hover shadow-(--shadow) p-3 border-(--borderColor) border-2 rounded-md"
          >
            <div className="icon w-15 h-15 bg-linear-to-r from-purple-400 via-purple-500 to-purple-600 mb-2 flex items-center justify-center text-[#f1f5f9] rounded-md">
              <FaTemperatureHalf size={35} />
            </div>
            <div className="text">
              <h2 className="font-bold animate-gradient text-xl mb-2 text-transparent bg-clip-text bg-linear-to-r from-black via-purple-500 to-black">
                Temperature Control
              </h2>
              <p className="text-(--TextColor)">
                Precision temperature regulation with automated heating and
                cooling systems for optimal fish health
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: -10, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="box box-hover shadow-(--shadow) p-3 border-(--borderColor) border-2 rounded-md"
          >
            <div className="icon w-15 h-15 bg-linear-to-r from-rose-400 via-rose-500 to-rose-600 mb-2 flex items-center justify-center text-[#f1f5f9] rounded-md">
              <MdOutlineHealthAndSafety size={35} />
            </div>
            <div className="text">
              <h2 className="font-bold animate-gradient text-xl mb-2 text-transparent bg-clip-text bg-linear-to-r from-rose-500 via-black to-black">
                Health Diagnostics
              </h2>
              <p className="text-(--TextColor)">
                Computer vision technology detects fish behavior patterns and
                identifies potential health issues
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="box box-hover  shadow-(--shadow) p-3 border-(--borderColor) border-2 rounded-md"
          >
            <div className="icon w-15 h-15 bg-linear-to-r from-stone-400 via-stone-500 to-stone-600 mb-2 flex items-center justify-center text-[#f1f5f9] rounded-md">
              <IoFlashOutline size={35} />
            </div>
            <div className="text">
              <h2 className="font-bold animate-gradient text-xl mb-2 text-transparent bg-clip-text bg-linear-to-r from-stone-500 via-black to-black">
                Automated Systems
              </h2>
              <p className="text-(--TextColor)">
                Smart feeding schedules, lighting control, and filtration
                management optimized by AI algorithms
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 10, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="box box-hover shadow-(--shadow) p-3 border-(--borderColor) border-2 rounded-md"
          >
            <div className="icon w-15 h-15 bg-linear-to-r from-indigo-400 via-indigo-500 to-indigo-600 mb-2 flex items-center justify-center text-[#f1f5f9] rounded-md">
              <AiOutlineSafety size={35} />
            </div>
            <div className="text">
              <h2 className="font-bold animate-gradient text-xl mb-2 text-transparent bg-clip-text bg-linear-to-r from-indigo-500 via-black to-black">
                Predictive Maintenance
              </h2>
              <p className="text-(--TextColor)">
                Advanced sensors and data analysis predict equipment failures
                and maintenance requirements
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Good;
