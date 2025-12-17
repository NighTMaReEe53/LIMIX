import Lottie from "lottie-react";
import Bubbles from "../../public/json/Bubbles.json";
import MainTitle from "./Tittle/MainTitle";
import { FaStar } from "react-icons/fa6";
import { motion } from "motion/react";

const Review = () => {
  return (
    <section className="relative py-14">
      <img
        src="2.png"
        className="absolute top-0 right-30 -z-30 pointer-events-none w-50 h-50 opacity-5"
        alt=""
      />
      <Lottie
        animationData={Bubbles}
        className="absolute top-0 left-0 w-40 h-40 opacity-45"
      />
      <Lottie
        animationData={Bubbles}
        className="absolute top-0 right-0 w-40 h-40 opacity-45"
      />

      <div className="container mx-auto px-3 lg:px-30">
        <MainTitle
          mainText="Customers Say About LIMIX"
          paraText=""
          text="Our Reviews"
        />
        <div className="content grid grid-cols-1 lg:grid-cols-2 gap-3">
          <motion.div
            initial={{ x: -5, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="box relative shadow-(--shadow) p-3 bg-linear-to-r from-sky-300 via-blue-400 to-blue-500 rounded-md box-hover"
          >
            <h2 className="font-bold text-[17px] mb-2 text-transparent bg-clip-text bg-linear-to-r from-black via-white capitalize to-white animate-gradient">
              LIMIX completely changed how we manage fish tanks.
            </h2>
            <p className="text-white capitalize leading-7">
              From the first day, we noticed a significant improvement in fish
              health and water quality. The AI system monitors every detail with
              impressive accuracy.
            </p>
            <div className="user mt-3 flex items-center gap-2">
              <div className="image p-1 border-2 border-white rounded-full">
                <img
                  src="user-1.jpeg"
                  className="w-12 h-12 object-cover rounded-full"
                  alt=""
                />
              </div>
              <div className="text">
                <h2 className="text-transparent bg-linear-to-r animate-gradient from-black via-white to-black bg-clip-text font-bold text-lg">
                  Mohamed Ali
                </h2>
                <span className="text-white text-[15px]">CEO & Founder</span>
                <div className="stars flex gap-1 items-center mt-1">
                  <FaStar className="text-amber-400" />
                  <FaStar className="text-amber-400" />
                  <FaStar className="text-amber-400" />
                  <FaStar className="text-amber-400" />
                  <FaStar className="text-amber-400" />
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 5, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="box relative shadow-(--shadow) p-3 border-(--borderColor) border-2 rounded-md box-hover"
          >
            <h2 className="font-bold  text-[17px] mb-2 text-transparent bg-clip-text bg-linear-to-r from-black via-blue-600 capitalize to-black animate-gradient">
              A smart and reliable solution for aquaculture{" "}
            </h2>
            <p className="text-(--TextColor) leading-7">
              Real-time analysis and early alerts helped us prevent problems
              happened. It saved us a lot of time and effort. Since using LIMIX,
              fish loss has decreased and productivity has increased noticeably.
            </p>
            <div className="user mt-3 flex items-center gap-2">
              <div className="image p-1 border-2 border-rose-500 rounded-full">
                <img
                  src="user-2.avif"
                  className="w-12 h-12 object-cover rounded-full"
                  alt=""
                />
              </div>
              <div className="text">
                <h2 className="text-transparent animate-gradient bg-linear-to-r from-black via-rose-400 to-rose-500 bg-clip-text font-bold text-lg">
                  Mona Mohamed
                </h2>
                <span className="text-(--TextColor) text-[15px]">
                  CEO & Founder
                </span>
                <div className="stars flex gap-1 items-center mt-1">
                  <FaStar className="text-amber-400" />
                  <FaStar className="text-amber-400" />
                  <FaStar className="text-amber-400" />
                  <FaStar className="text-amber-400" />
                  <FaStar className="text-amber-400" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Review;
