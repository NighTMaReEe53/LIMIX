import Lottie from "lottie-react";
import MainTitle from "./Tittle/MainTitle";
import Bubbles from "../../public/json/Bubbles.json";
import { FaRegEye } from "react-icons/fa6";
import { motion } from "motion/react";
const Articels = () => {
  return (
    <section className="articles py-14 relative">
      <div className="overlay absolute w-75 h-75 bg-blue-500 rounded-full left-[50%] translate-x-[-50%] top-0 -z-30 blur-[300px]"></div>
      <Lottie
        animationData={Bubbles}
        className="absolute top-0 right-0 w-40 h-40 opacity-45"
      />
      <Lottie
        animationData={Bubbles}
        className="absolute top-0 left-0 w-40 h-40 opacity-45"
      />
      <div className="container mx-auto px-3 lg:px-30">
        <MainTitle
          mainText="LIMIX Articels"
          paraText="Popular Articels For This Weak"
          text="Our Articels"
          active={true}
        />
        <div className="content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -5 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="box box-hover bg-(--boxLinear) p-3 shadow-(--shadow) border-(--borderColor) border-2 rounded-md"
          >
            <div className="image">
              <img
                src="blog-1.webp"
                className="object-cover rounded-md mb-3 h-50 w-full"
                alt=""
              />
            </div>
            <div className="text">
              <h2 className="font-bold text-[15px] animate-gradient mb-2 text-transparent bg-clip-text bg-linear-to-r from-black via-indigo-500 to-black">
                Smart Water Monitoring in Modern Fish Farms
              </h2>
              <p className="text-(--TextColor)">
                Efficient water management is key to successful aquaculture.
                With smart sensors and cloud-based analytics, farmers can now
                track pH, oxygen, and temperature levels in real-time to
                maintain optimal fish health.
              </p>
              <button className=" flex items-center mt-2 w-full justify-center gap-1 text-[15px]  cursor-pointer rounded-md p-2 bg-linear-to-r bg-sky-300 via-sky-400 to-sky-500 text-white">
                <FaRegEye size={18} />
                Read More
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="box box-hover bg-(--boxLinear) p-3 shadow-(--shadow) border-(--borderColor) border-2 rounded-md"
          >
            <div className="before:absolute before:top-0 before:left-0 relative before:w-full before:rounded-md before:h-full before:bg-[#0008] before:transition-all">
              <img
                src="blog-2.webp"
                className="object-cover rounded-md mb-3 h-50 w-full"
                alt=""
              />
            </div>
            <div className="text">
              <h2 className="font-bold animate-gradient text-[15px] mb-2 text-transparent bg-clip-text bg-linear-to-r from-orange-500 via-black to-black">
                Smart Water Monitoring in Modern Fish Farms
              </h2>
              <p className="text-(--TextColor)">
                Efficient water management is key to successful aquaculture.
                With smart sensors and cloud-based analytics, farmers can now
                track pH, oxygen, and temperature levels in real-time to
                maintain optimal fish health.
              </p>
              <button className=" flex items-center gap-1 w-full mt-2 justify-center text-[15px]  cursor-pointer rounded-md p-2 secondary-btn">
                <FaRegEye size={18} />
                Read More
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 5 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="box box-hover bg-(--boxLinear) p-3 shadow-(--shadow) border-(--borderColor) border-2 rounded-md"
          >
            <div className="before:absolute before:top-0 before:left-0 relative before:w-full before:h-full before:rounded-md before:bg-[#0008] before:transition-all">
              <img
                src="blog-3.webp"
                className="object-cover rounded-md mb-3 h-50 w-full"
                alt=""
              />
            </div>
            <div className="text">
              <h2 className="font-bold animate-gradient text-[15px] mb-2 text-transparent bg-clip-text bg-linear-to-r from-black via-black to-purple-500">
                Smart Water Monitoring in Modern Fish Farms
              </h2>
              <p className="text-(--TextColor)">
                Efficient water management is key to successful aquaculture.
                With smart sensors and cloud-based analytics, farmers can now
                track pH, oxygen, and temperature levels in real-time to
                maintain optimal fish health.
              </p>
              <button className=" flex items-center gap-1 w-full mt-2 justify-center text-[15px]  cursor-pointer rounded-md p-2 secondary-btn">
                <FaRegEye size={18} />
                Read More
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -5 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="box box-hover bg-(--boxLinear) p-3 shadow-(--shadow) border-(--borderColor) border-2 rounded-md"
          >
            <div className="before:absolute before:top-0 before:left-0 relative before:w-full before:rounded-md before:h-full before:bg-[#0008] before:transition-all">
              <img
                src="blog-4.webp"
                className="object-cover rounded-md mb-3 h-50 w-full"
                alt=""
              />
            </div>
            <div className="text">
              <h2 className="font-bold animate-gradient text-[15px] mb-2 text-transparent bg-clip-text bg-linear-to-r from-black via-cyan-500 to-black">
                Smart Water Monitoring in Modern Fish Farms
              </h2>
              <p className="text-(--TextColor)">
                Efficient water management is key to successful aquaculture.
                With smart sensors and cloud-based analytics, farmers can now
                track pH, oxygen, and temperature levels in real-time to
                maintain optimal fish health.
              </p>
              <button className=" flex items-center gap-1 w-full mt-2 justify-center text-[15px]  cursor-pointer rounded-md p-2 secondary-btn">
                <FaRegEye size={18} />
                Read More
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="box box-hover bg-(--boxLinear) p-3 shadow-(--shadow) border-(--borderColor) border-2 rounded-md"
          >
            <div className="before:absolute before:top-0 before:left-0 relative before:rounded-md before:w-full before:h-full before:bg-[#0008] before:transition-all">
              <img
                src="blog-5.webp"
                className="object-cover rounded-md mb-3 h-50 w-full"
                alt=""
              />
            </div>
            <div className="text">
              <h2 className="font-bold animate-gradient text-[15px] mb-2 text-transparent bg-clip-text bg-linear-to-r from-rose-500 via-black to-black">
                Smart Water Monitoring in Modern Fish Farms
              </h2>
              <p className="text-(--TextColor)">
                Efficient water management is key to successful aquaculture.
                With smart sensors and cloud-based analytics, farmers can now
                track pH, oxygen, and temperature levels in real-time to
                maintain optimal fish health.
              </p>
              <button className=" flex items-center gap-1 w-full mt-2 justify-center text-[15px]  cursor-pointer rounded-md p-2 secondary-btn">
                <FaRegEye size={18} />
                Read More
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 5 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="box box-hover bg-(--boxLinear) p-3 shadow-(--shadow) border-(--borderColor) border-2 rounded-md"
          >
            <div className="before:absolute before:top-0 before:left-0 relative before:rounded-md before:w-full before:h-full before:bg-[#0008] before:transition-all">
              <img
                src="blog-6.webp"
                className="object-cover rounded-md mb-3 h-50 w-full"
                alt=""
              />
            </div>
            <div className="text">
              <h2 className="font-bold animate-gradient text-[15px] mb-2 text-transparent bg-clip-text bg-linear-to-r from-black via-black to-teal-500">
                Smart Water Monitoring in Modern Fish Farms
              </h2>
              <p className="text-(--TextColor)">
                Efficient water management is key to successful aquaculture.
                With smart sensors and cloud-based analytics, farmers can now
                track pH, oxygen, and temperature levels in real-time to
                maintain optimal fish health.
              </p>
              <button className=" flex items-center gap-1 w-full mt-2 justify-center text-[15px]  cursor-pointer rounded-md p-2 secondary-btn">
                <FaRegEye size={18} />
                Read More
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Articels;
