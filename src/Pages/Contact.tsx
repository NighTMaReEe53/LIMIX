import Lottie from "lottie-react";
import Animation from "../../public/json/Contact.json";
import {
  FaFacebookF,
  FaInstagram,
  FaRegMessage,
  FaRegUser,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { BsFillSendFill } from "react-icons/bs";
import Bubbles from "../../public/json/Bubbles.json";
import Water from "../../public/json/water.json";
import { TiSocialLinkedin } from "react-icons/ti";
import { motion } from "motion/react";

const Contact = () => {
  return (
    <section className="contact py-14 relative">
      <div className="absolute w-50 h-50 rounded-full top-0 right-0 bg-blue-500 blur-[300px] -z-20"></div>
      <Lottie
        animationData={Bubbles}
        className="absolute top-0 right-0 w-40 h-40 opacity-45 -z-30"
      />
      <Lottie
        animationData={Bubbles}
        className="absolute top-0 left-0 w-40 h-40 opacity-45 -z-30"
      />
      <Lottie
        animationData={Water}
        className="absolute bottom-0 left-0 w-40 h-40 opacity-45 -z-30"
      />

      <div className="container relative mx-auto px-3 lg:px-30">
        <motion.p
          initial={{ y: -10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="pill mb-3 w-fit mx-auto md:mx-0 rounded-full flex items-center gap-1 p-2 lg:hidden"
        >
          <span className="w-1.5 h-1.5 block rounded-full dot"></span>
          <span className="text-[13px]  relative font-bold bg-linear-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent ">
            Contact Us
          </span>
        </motion.p>
        <div className="content grid grid-cols-1 lg:grid-cols-3 gap-3 items-center">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Lottie animationData={Animation} />
          </motion.div>
          <form action="" onSubmit={(e) => e.preventDefault()}>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex flex-col gap-2 mb-3"
            >
              <label
                htmlFor="userName"
                className="font-bold text-lg bg-clip-text flex items-center gap-1 text-transparent bg-linear-to-r from-blue-500 via-black to-black"
              >
                <FaRegUser
                  className="text-(--HeadingColor) opacity-40"
                  size={20}
                />
                userName
              </label>
              <input
                type="text"
                placeholder="Your Name !!?"
                className="p-2 shadow-(--shadow) outline-none border-(--borderColor) border-2 rounded-md"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col gap-2 mb-3"
            >
              <label
                htmlFor="email"
                className="font-bold flex items-center gap-1 text-lg bg-clip-text text-transparent bg-linear-to-r from-rose-500 via-black to-black"
              >
                <MdAlternateEmail
                  className="text-(--HeadingColor) opacity-40"
                  size={20}
                />
                Email
              </label>
              <input
                type="email"
                placeholder="Your Email !!?"
                className="p-2 shadow-(--shadow) outline-none border-(--borderColor) border-2 rounded-md"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-2 mb-3"
            >
              <label
                htmlFor="message"
                className="font-bold text-lg flex items-center gap-1 bg-clip-text text-transparent bg-linear-to-r from-teal-500 via-black to-black"
              >
                <FaRegMessage
                  className="text-(--HeadingColor) opacity-40"
                  size={20}
                />
                Your Message
              </label>
              <textarea
                placeholder="Your Message To LIMIX"
                className="p-2 shadow-(--shadow) outline-none border-(--borderColor) border-2 rounded-md resize-none 
                h-37.5"
              ></textarea>
              <motion.button
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="p-2 flex items-center gap-1 justify-center bg-linear-to-r from-indigo-400 via-indigo-500 to-indigo-600 rounded-md text-white font-bold cursor-pointer text-lg btn-hover transition animate-gradient "
              >
                <BsFillSendFill size={20} />
                Send
              </motion.button>
            </motion.div>
          </form>
          <div className="social-icons flex items-center gap-3">
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-(--HeadingColor) opacity-40 font-bold"
            >
              Or
            </motion.span>
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 0.5, x: 0 }}
              transition={{ delay: 0.2 }}
              className="icon opacity-50 transition w-14 h-14 bg-linear-to-r from-teal-400 via-teal-500 to-teal-600 text-white cursor-pointer flex items-center justify-center rounded-md"
            >
              <FaWhatsapp size={30} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 0.5, y: 0 }}
              transition={{ delay: 0.4 }}
              className="icon opacity-50 transition w-14 h-14 bg-linear-to-r from-indigo-400 via-indigo-500 to-indigo-600 text-white cursor-pointer flex items-center justify-center rounded-md"
            >
              <FaFacebookF size={30} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 0.5, x: 0 }}
              transition={{ delay: 0.6 }}
              className="icon opacity-50 transition w-14 h-14 bg-linear-to-r from-blue-400 via-blue-500 to-blue-600 text-white cursor-pointer flex items-center justify-center rounded-md"
            >
              <TiSocialLinkedin size={30} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 0.5, y: 0 }}
              transition={{ delay: 0.8 }}
              className="icon opacity-50 transition w-14 h-14 bg-linear-to-r from-stone-400 via-stone-500 to-stone-600 text-white cursor-pointer flex items-center justify-center rounded-md"
            >
              <FaXTwitter size={30} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 0.5, x: 0 }}
              transition={{ delay: 1 }}
              className="icon opacity-50 transition w-14 h-14 bg-linear-to-r from-violet-400 via-violet-500 to-violet-600 text-white cursor-pointer flex items-center justify-center rounded-md"
            >
              <FaInstagram size={30} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
