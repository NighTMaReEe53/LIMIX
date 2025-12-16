interface IText {
  text: string;
  mainText: string;
  paraText: string;
  active?: boolean;
}

import { motion } from "motion/react";

const MainTitle = ({ text, mainText, paraText, active = false }: IText) => {
  return (
    <div className="main-title text-center md:text-start mb-6">
      <motion.p
        initial={{ y: -10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="pill mb-3 w-fit mx-auto md:mx-0 rounded-full flex items-center gap-1 p-2"
      >
        <span className="w-1.5 h-1.5 block rounded-full dot"></span>
        <span className="text-[13px] capitalize relative font-bold bg-linear-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent ">
          {text}
        </span>
      </motion.p>
      <motion.h2
        initial={{ x: -10, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className={`font-bold text-2xl md:text-5xl mb-3 text-transparent bg-clip-text bg-linear-to-r animate-gradient ${
          active
            ? "from-black via-teal-400 to-teal-500"
            : "from-black via-blue-600 to-sky-500"
        }`}
      >
        {mainText}
      </motion.h2>
      <motion.p
        initial={{ x: 10, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-[16px] text-(--TextColor) capitalize text-xs leading-6"
      >
        {paraText}
      </motion.p>
    </div>
  );
};

export default MainTitle;
