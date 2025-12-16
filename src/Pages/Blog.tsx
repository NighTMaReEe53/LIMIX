import Lottie from "lottie-react";
import { motion } from "motion/react";
import Robot from "../../public/json/Run.json";
import { FaBook, FaBookOpenReader } from "react-icons/fa6";
import { FaPenAlt } from "react-icons/fa";
import Bubbles from "../../public/json/Bubbles.json";
import Water from "../../public/json/water.json";
import Read from "../../public/json/Read.json";
import { CiBookmarkCheck } from "react-icons/ci";
import Articels from "../Components/Articels";

const Blog = () => {
  return (
    <section className="blog relative">
      <div className="absolute bottom-0 left-0 -z-30 blur-[300px] w-72 h-72 bg-blue-500 rounded-full"></div>

      <Lottie
        animationData={Bubbles}
        className="absolute top-0 left-0 w-40 h-40 opacity-45"
      />
      <Lottie
        animationData={Water}
        className="absolute top-0 right-0 w-40 h-40 opacity-45"
      />

      <div className="absolute top-0 left-0 -z-30 blur-[300px] w-72 h-72 bg-blue-500 rounded-full"></div>
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
                  Limix Blog's
                </span>
              </motion.p>
              <motion.h2
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="font-bold text-3xl leading-10 lg:text-5xl my-3 lg:leading-17 text-transparent bg-clip-text bg-linear-to-r from-black animate-gradient via-purple-500 to-purple-500"
              >
                LIMIX Blog – The Future of Smart Aquariums with AI{" "}
              </motion.h2>
              <motion.p
                initial={{ y: -10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-(--TextColor) mb-3 capitalize"
              >
                At LIMIX, we believe that fish care should be simple,
                intelligent, and accessible for everyone. That’s why we combine
                artificial intelligence with modern aquarium technology to help
                you monitor water quality, fish health, feeding schedules, and
                overall tank conditions—automatically and accurately.{" "}
              </motion.p>
              <div className="flex gap-2 items-center justify-center lg:justify-start">
                <motion.div
                  initial={{ opacity: 0, x: -5 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="icon w-12 h-12 bg-linear-to-r from-indigo-400 via-indigo-500 to-indigo-600 rounded-md flex items-center justify-center text-white"
                >
                  <FaBook size={20} />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="icon w-12 h-12 bg-linear-to-r from-rose-400 via-rose-500 to-rose-600 rounded-md flex items-center justify-center text-white"
                >
                  <FaPenAlt size={20} />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 5 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="icon w-12 h-12 bg-linear-to-r from-purple-400 via-purple-500 to-purple-600 rounded-md flex items-center justify-center text-white"
                >
                  <FaBookOpenReader size={20} />
                </motion.div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Lottie
                animationData={Robot}
                className=" w-full h-66 lg:h-auto "
              />
            </motion.div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 items-center py-14 relative">
          <div className="absolute w-50 h-50 top-0 right-0 bg-blue-500 rounded-full blur-[200px] -z-20"></div>

          <Lottie
            animationData={Bubbles}
            className="absolute top-0 left-0 w-40 h-40 opacity-45"
          />
          <Lottie
            animationData={Bubbles}
            className="absolute top-0 right-0 w-40 h-40 opacity-45"
          />
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <span className="absolute blur-sm top-[50%] translate-y-[-50%] bg-linear-to-r from-blue-400 via-blue-500 to-blue-600 left-[50%] translate-x-[-50%] w-85 h-85 rounded-full "></span>
            <Lottie animationData={Read} className="w-full h-100" />
          </motion.div>

          <div className="text">
            <motion.p
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="pill mb-3 w-fit mx-auto md:mx-0 rounded-full flex items-center gap-1 p-2"
            >
              <span className="w-1.5 h-1.5 block rounded-full dot"></span>
              <span className="text-[13px]  relative font-bold bg-linear-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent ">
                Limix Blog's
              </span>
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="font-bold  text-2xl animate-gradient text-center lg:text-start md:text-4xl text-transparent bg-clip-text from-black via-rose-500 to-black bg-linear-to-r mb-3"
            >
              What You’ll Find on Our Blog
            </motion.h2>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-1 items-center">
                <CiBookmarkCheck size={25} className="text-teal-600" />
                <motion.span
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="font-medium capitalize text-[13px] md:text-[16px] text-transparent bg-clip-text bg-linear-to-r from-black via-teal-500 to-black"
                >
                  How AI-powered fish tanks work and why they matter
                </motion.span>
              </li>
              <li className="flex gap-1 items-center">
                <CiBookmarkCheck size={25} className="text-teal-600" />
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="font-medium capitalize text-[13px] md:text-[16px] text-transparent bg-clip-text bg-linear-to-r from-indigo-500 via-black to-black"
                >
                  Smart tips for maintaining a healthy aquarium environment
                </motion.span>
              </li>
              <li className="flex gap-1 items-center">
                <CiBookmarkCheck size={25} className="text-teal-600" />
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="font-medium capitalize text-[13px] md:text-[16px] text-transparent bg-clip-text bg-linear-to-r from-black via-black to-orange-500"
                >
                  Insights into fish behavior analysis using artificial
                  intelligence
                </motion.span>
              </li>
              <li className="flex gap-1 items-center">
                <CiBookmarkCheck size={25} className="text-teal-600" />
                <motion.span
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="font-medium capitalize text-[13px] md:text-[16px] text-transparent bg-clip-text bg-linear-to-r from-rose-500 via-black to-cyan-500"
                >
                  Innovations in automated feeding and water monitoring{" "}
                </motion.span>
              </li>
              <li className="flex gap-1 items-center">
                <CiBookmarkCheck size={25} className="text-teal-600" />
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                  className="font-medium capitalize text-[13px] md:text-[16px] text-transparent bg-clip-text bg-linear-to-r from-sky-500 via-sky-600 to-black"
                >
                  Best practices for beginners and professional aquarists alike{" "}
                </motion.span>
              </li>
              <li className="flex gap-1 items-center">
                <CiBookmarkCheck className="text-teal-600 text-[40px]" />
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                  className="font-medium capitalize text-[11px] md:text-[15px] text-transparent bg-clip-text bg-linear-to-r from-black via-indigo-500 to-black"
                >
                  Stay connected with LIMIX, and explore how artificial
                  intelligence is transforming the way we care for fish—one
                </motion.span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Articels />
    </section>
  );
};

export default Blog;
