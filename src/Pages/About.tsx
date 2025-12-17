import { RiRobot2Line } from "react-icons/ri";
import { motion } from "motion/react";
import { AiOutlinePython } from "react-icons/ai";
import { FaBullseye, FaChartBar, FaEye, FaThinkPeaks } from "react-icons/fa6";
import Lottie from "lottie-react";
import about from "../../public/json/about.json";
import MainTitle from "../Components/Tittle/MainTitle";
import { MdOutlineShowChart } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { FiAward, FiUsers } from "react-icons/fi";
import Bubbles from "../../public/json/Bubbles.json";
import { IoIosArrowDropdown } from "react-icons/io";
import Water from "../../public/json/water.json";
import Review from "../Components/Review";

const About = () => {
  return (
    <>
      <section className="about relative">
        <Lottie
          animationData={Bubbles}
          className="absolute top-0 left-0 w-40 h-40 opacity-45"
        />
        <Lottie
          animationData={Bubbles}
          className="absolute top-0 right-0 w-40 h-40 opacity-45"
        />
        <div className="overlay w-44 h-44 bg-blue-500 absolute top-0 left-0 rounded-full -z-30 blur-[200px]"></div>
        <div className="container mx-auto px-3 lg:px-30">
          <div className="height flex items-center relative">
            <div className="content grid grid-cols-1 lg:grid-cols-2 gap-3">
              <div className="text text-center lg:text-start order-2 lg:order-0">
                <motion.p
                  initial={{ y: -10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  className="pill mb-3 w-fit mx-auto md:mx-0 rounded-full flex items-center gap-1 p-2"
                >
                  <span className="w-1.5 h-1.5 block rounded-full dot"></span>
                  <span className="text-[13px]  relative font-bold bg-linear-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent ">
                    About Us
                  </span>
                </motion.p>
                <motion.h2
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="font-bold text-6xl lg:text-7xl my-3 lg:leading-20 text-transparent bg-clip-text bg-linear-to-r from-black animate-gradient via-teal-500 to-teal-500"
                >
                  About Limix Aquaculture
                </motion.h2>
                <motion.p
                  initial={{ y: -10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-(--TextColor) mb-3 capitalize"
                >
                  We're on a mission to revolutionize aquaculture through
                  intelligent technology, sustainable practices, and data-driven
                  innovation.
                </motion.p>
                <div className="info flex items-center lg:justify-start justify-center gap-3">
                  <motion.div
                    initial={{ opacity: 0, x: -5 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="icon w-12 h-12 bg-linear-to-r from-indigo-400 via-indigo-500 to-indigo-600 rounded-md flex items-center justify-center text-white"
                  >
                    <RiRobot2Line size={25} />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="icon w-12 h-12 bg-linear-to-r from-violet-400 via-violet-500 to-violet-600 rounded-md flex items-center justify-center text-white"
                  >
                    <AiOutlinePython size={25} />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 5 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="icon w-12 h-12 bg-linear-to-r from-teal-400 via-teal-500 to-teal-600 rounded-md flex items-center justify-center text-white"
                  >
                    <FaChartBar size={23} />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="icon w-12 h-12 bg-linear-to-r from-rose-400 via-rose-500 to-rose-600 rounded-md flex items-center justify-center text-white"
                  >
                    <FaThinkPeaks size={23} />
                  </motion.div>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <Lottie
                  animationData={about}
                  className="w-full h-50 md:h-70 lg:h-100"
                />
              </motion.div>
            </div>
            <motion.a
              className=" cursor-pointer absolute bottom-10 animate-bounce left-[50%] translate-x-[-50%]"
              href="#know"
              title="Know More About Us"
            >
              <IoIosArrowDropdown size={30} />
            </motion.a>
          </div>
          <div
            className="grid grid-cols-1 lg:grid-cols-2 py-14 gap-3 relative"
            id="know"
          >
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-blue-500 blur-[200px]"></div>
            <Lottie
              animationData={Bubbles}
              className="absolute top-0 left-0 w-40 h-40 opacity-45"
            />
            <Lottie
              animationData={Bubbles}
              className="absolute top-0 right-0 w-40 h-40 opacity-45"
            />
            <div className="relative shadow-(--shadow) p-3 border-(--borderColor) border-2 rounded-md box-hover">
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="relative image-shadow"
              >
                <img
                  src="about.jpg"
                  className="w-full h-full rounded-md transition "
                  alt=""
                />
              </motion.div>
            </div>
            <div className="text">
              <motion.p
                initial={{ y: -10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                className="pill mb-3 w-fit mx-auto md:mx-0 rounded-full flex items-center gap-1 p-2"
              >
                <span className="w-1.5 h-1.5 block rounded-full dot"></span>
                <span className="text-[13px]  relative font-bold bg-linear-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent ">
                  We Made
                </span>
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="font-bold text-3xl md:text-5xl capitalize animate-gradient text-center md:text-start md:leading-15 text-transparent bg-clip-text bg-linear-to-r from-black via-blue-500 to-black mb-3"
              >
                Transforming the Future of Fish Farming
              </motion.h2>
              <ul className="flex flex-col gap-3">
                <motion.li
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-(--TextColor) capitalize list-inside text-[14px] text-center lg:text-start"
                >
                  Limix Aquaculture was founded with a vision to address the
                  growing challenges in the aquaculture industry. As global
                  demand for seafood continues to rise, traditional fish farming
                  methods struggle to keep pace while maintaining sustainability
                  and profitability.
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-(--TextColor) capitalize list-inside text-[14px] text-center lg:text-start"
                >
                  Our platform combines cutting-edge artificial intelligence,
                  IoT sensor networks, and automation technology to create a
                  comprehensive solution that empowers fish farmers to optimize
                  their operations, reduce waste, and maximize yields.
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-(--TextColor) capitalize list-inside text-[14px] text-center lg:text-start"
                >
                  From small-scale aquariums to large commercial fish farms,
                  Limix provides real-time monitoring, predictive analytics, and
                  automated control systems that ensure optimal conditions for
                  fish health and growth.
                </motion.li>
              </ul>
            </div>
          </div>
          <div className="core py-14 relative">
            <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-blue-500 blur-[200px]"></div>

            <Lottie
              animationData={Bubbles}
              className="absolute top-0 left-0 w-40 h-40 opacity-45"
            />
            <Lottie
              animationData={Bubbles}
              className="absolute top-0 right-0 w-40 h-40 opacity-45"
            />

            <MainTitle
              text="Core"
              mainText="Our Core Values"
              paraText="The principles that guide everything we do"
              active={true}
            />
            <div className="content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              <motion.div
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                className="box shadow-(--shadow) p-3 border-(--borderColor) border-2 rounded-md box-hover"
              >
                <div className="icon w-15 h-15 bg-linear-to-r  from-blue-400 via-blue-500 to-blue-600 mb-2 flex items-center justify-center text-[#f1f5f9] rounded-md">
                  <MdOutlineShowChart size={35} />
                </div>
                <div className="text">
                  <h2 className="font-bold text-xl mb-2 text-transparent animate-gradient bg-clip-text bg-linear-to-r from-black via-blue-600 to-black">
                    Innovation
                  </h2>
                  <p className="text-(--TextColor)">
                    Constantly pushing boundaries with AI and IoT to create
                    cutting-edge solutions
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ y: -10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="box shadow-(--shadow) p-3  rounded-md box-hover bg-linear-to-r from-rose-400 via-rose-500 to-rose-600"
              >
                <div className="icon w-15 h-15  border-2 border-white mb-2 flex items-center justify-center text-white rounded-md">
                  <BiWorld size={35} />
                </div>
                <div className="text">
                  <h2 className="font-bold text-xl mb-2 text-transparent animate-gradient bg-clip-text bg-linear-to-r from-black via-white to-black">
                    Sustainability
                  </h2>
                  <p className="text-white">
                    Committed to eco-friendly practices that protect our oceans
                    and environment
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ x: 10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="box shadow-(--shadow) p-3 border-(--borderColor) border-2 rounded-md box-hover"
              >
                <div className="icon w-15 h-15 bg-linear-to-r  from-teal-400 via-teal-500 to-teal-600 mb-2 flex items-center justify-center text-[#f1f5f9] rounded-md">
                  <FiUsers size={35} />
                </div>
                <div className="text">
                  <h2 className="font-bold text-xl mb-2 text-transparent animate-gradient bg-clip-text bg-linear-to-r from-black via-teal-600 to-black">
                    Partnership
                  </h2>
                  <p className="text-(--TextColor)">
                    Working closely with farmers to understand and solve their
                    unique challenges
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="box shadow-(--shadow) p-3 bg-linear-to-r from-orange-400 via-orange-500 to-orange-600 rounded-md"
              >
                <div className="icon w-15 h-15 bg-linear-to-r  mb-2 flex items-center justify-center text-white border-2 border-white rounded-md">
                  <FiAward size={35} />
                </div>
                <div className="text">
                  <h2 className="font-bold text-xl mb-2 text-transparent animate-gradient bg-clip-text bg-linear-to-r from-black via-white to-black">
                    Excellence
                  </h2>
                  <p className="text-white">
                    Delivering world-class products and support that exceed
                    expectations
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="box shadow-(--shadow) p-3 border-(--borderColor) border-2 rounded-md box-hover"
              >
                <div className="icon w-15 h-15 bg-linear-to-r  from-violet-400 via-violet-500 to-violet-600 mb-2 flex items-center justify-center text-[#f1f5f9] rounded-md">
                  <FaEye size={35} />
                </div>
                <div className="text">
                  <h2 className="font-bold text-xl mb-2 text-transparent animate-gradient bg-clip-text bg-linear-to-r from-black via-violet-600 to-black">
                    Transparency
                  </h2>
                  <p className="text-(--TextColor)">
                    Maintaining open communication and honest relationships with
                    all stakeholders
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ x: 10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                className="box shadow-(--shadow) p-3 bg-linear-to-r from-cyan-400 via-cyan-500 to-cyan-500 rounded-md "
              >
                <div className="icon w-15 h-15 bg-linear-to-r  border-2 border-white mb-2 flex items-center justify-center text-white rounded-md">
                  <FaBullseye size={35} />
                </div>
                <div className="text">
                  <h2 className="font-bold text-xl mb-2 text-transparent animate-gradient bg-clip-text bg-linear-to-r from-black via-white to-black">
                    Precision
                  </h2>
                  <p className="text-white">
                    Using data and analytics to drive accurate, informed
                    decision-making
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <Review />
        <div className="container mx-auto px-3 lg:px-30">
          <div className="team py-14 relative">
            <Lottie
              animationData={Water}
              className="absolute top-0 right-0 w-40 h-40 opacity-45 -z-20"
            />
            <Lottie
              animationData={Bubbles}
              className="absolute top-0 left-0 w-50 h-50 opacity-45 -z-20"
            />
            <Lottie
              animationData={Water}
              className="absolute bottom-0 left-0 w-40 h-40 opacity-30 -z-20"
            />
            <MainTitle
              text="Our Team"
              mainText="Meet Our Team"
              paraText="Experts in aquaculture, AI, and sustainable technology"
            />
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="image  lg:w-187.5 lg:h-120 shadow-(--shadow) p-3 border-(--borderColor) border-2 rounded-md box-hover mx-auto flex"
            >
              <div className="image-team relative before:absolute before:w-full before:h-full w-full before:rounded-md before:transition before:top-0 before:left-0  ">
                <img
                  src="team.jpg"
                  className="w-full object-cover h-full rounded-md pointer-events-none transition"
                  alt=""
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
