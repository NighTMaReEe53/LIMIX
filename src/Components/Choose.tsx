import { FiTv } from "react-icons/fi";
import MainTitle from "./Tittle/MainTitle";
import { FaRegChartBar } from "react-icons/fa6";
import Lottie from "lottie-react";
import Bubbles from "../../public/json/Bubbles.json";
import { CiCircleCheck } from "react-icons/ci";
import { motion } from "motion/react";

const Choose = () => {
  return (
    <section className="py-14 relative" id="choose">
      <Lottie
        animationData={Bubbles}
        className="absolute top-0 left-0 w-40 h-40 opacity-45"
      />
      <Lottie
        animationData={Bubbles}
        className="absolute top-0 right-0 w-40 h-40 opacity-45"
      />
      <div className="absolute w-20 h-20 top-0 right-0 bg-blue-500 blur-[100px] rounded-full -z-10"></div>
      <div className="container relative mx-auto px-3 lg:px-30">
        <MainTitle
          mainText="Why Choose Our Products"
          paraText="Empower your farm with intelligent technologies built to enhance performance, reduce operating costs, and eliminate unnecessary risks. Our integrated system combines IoT, automation."
          text="Why Choose Us"
          active={true}
        />
        <div className="content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <motion.div
            initial={{ x: -10, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="box relative shadow-(--shadow) p-3 border-(--borderColor) border-2 rounded-md box-hover"
          >
            <div className="icon absolute -top-3 -right-2 w-12 text-[#f1f5f9] flex items-center justify-center h-12 rounded-full bg-linear-to-l from-indigo-400 via-indigo-500 to-black animate-gradient">
              <FiTv size={23} />
            </div>
            <div className="text ">
              <h2 className="font-bold text-xl mb-2 text-transparent bg-clip-text bg-linear-to-r from-black via-indigo-600 to-black animate-gradient">
                Smart Management
              </h2>
              <p className="text-(--TextColor)">
                Monitor and control your farm in real-time with intelligent
                sensors and automated systems that reduce manual work
              </p>
              <ul className="mt-3 flex flex-col gap-2">
                <li className="flex items-center gap-1">
                  <CiCircleCheck size={20} />
                  <span className="text-[14px] text-(--TextColor)">
                    Multi-site management
                  </span>
                </li>
                <li className="flex items-center gap-1">
                  <CiCircleCheck size={20} />
                  <span className="text-[14px] text-(--TextColor)">
                    Automated workflows
                  </span>
                </li>
                <li className="flex items-center gap-1">
                  <CiCircleCheck size={20} />
                  <span className="text-[14px] text-(--TextColor)">
                    Mobile & web access
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="box relative bg-linear-to-r from-green-400 via-green-600 to-green-500 shadow-(--shadow) mt-0 lg:mt-5 p-3 border-(--borderColor) border-2 rounded-md box-hover"
          >
            <div className="icon absolute -top-3 -right-2 w-12 text-[#f1f5f9] flex items-center justify-center h-12 rounded-full bg-linear-to-l from-green-400 via-green-500 to-green-600 animate-gradient">
              <FaRegChartBar size={23} />
            </div>
            <div className="text ">
              <h2 className="font-bold text-xl mb-2 text-transparent bg-clip-text bg-linear-to-r from-white via-black to-white animate-gradient">
                Data-Driven Insights
              </h2>
              <p className="text-[#FFF]">
                Make informed decisions using advanced analytics that help
                optimize feeding, water quality, and energy usage
              </p>
              <ul className="mt-3 flex flex-col gap-2">
                <li className="flex items-center gap-1">
                  <CiCircleCheck size={20} color="#FFF" />
                  <span className="text-[14px] text-white">
                    Real-Time Analytics
                  </span>
                </li>
                <li className="flex items-center gap-1">
                  <CiCircleCheck size={20} color="#FFF" />
                  <span className="text-[14px] text-white">
                    Predictive Modeling
                  </span>
                </li>
                <li className="flex items-center gap-1">
                  <CiCircleCheck size={20} color="#FFF" />
                  <span className="text-[14px] text-white">
                    Performance Reports
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 5, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="box relative shadow-(--shadow) p-3 border-(--borderColor) border-2 rounded-md box-hover"
          >
            <div className="icon absolute -top-3 -right-2 w-12 text-[#f1f5f9] flex items-center justify-center h-12 rounded-full bg-linear-to-l from-rose-400 via-rose-500 to-black animate-gradient">
              <FiTv size={23} />
            </div>
            <div className="text ">
              <h2 className="font-bold text-xl mb-2 text-transparent bg-clip-text bg-linear-to-r from-black via-rose-600 to-black animate-gradient">
                Sustainable Growth
              </h2>
              <p className="text-(--TextColor)">
                Increase production while protecting the environment through
                eco-friendly and resource-efficient farming practices.
              </p>
              <ul className="mt-3 flex flex-col gap-2">
                <li className="flex items-center gap-1">
                  <CiCircleCheck size={20} />
                  <span className="text-[14px] text-(--TextColor)">
                    Resource Optimization
                  </span>
                </li>
                <li className="flex items-center gap-1">
                  <CiCircleCheck size={20} />
                  <span className="text-[14px] text-(--TextColor)">
                    Waste Reduction
                  </span>
                </li>
                <li className="flex items-center gap-1">
                  <CiCircleCheck size={20} />
                  <span className="text-[14px] text-(--TextColor)">
                    Eco-Friendly Practices
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
