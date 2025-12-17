import { AiOutlineProduct } from "react-icons/ai";
import { CiPhone, CiUser } from "react-icons/ci";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { GrBlog } from "react-icons/gr";
import { IoIosArrowForward } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineAlternateEmail, MdOutlineDownload } from "react-icons/md";
import { SlSocialLinkedin } from "react-icons/sl";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="pt-10 pb-5 bg-black relative">
      <div className="absolute w-25 h-25 bg-linear-to-r from-blue-500 via-blue-400 to-teal-500 top-0 left-0 rounded-full blur-[100px]"></div>
      <div className="absolute w-25 h-25 bg-linear-to-r from-blue-500 to-teal-500 bottom-0 right-0 rounded-full blur-[100px]"></div>
      <div className="container mx-auto px-3 lg:px-30">
        <div className="content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="info">
            <Link to={"/"} className="flex items-center gap-2">
              <img src="logo.png" className="w-12.5 h-12.5" alt="" />
              <h2 className="font-bold text-[20px] bg-clip-text bg-linear-to-r from-white via-sky-500 to-white text-transparent animate-gradient">
                Limix Aqucalature
              </h2>
            </Link>
            <p className="text-(--TextColor) capitalize mt-2">
              Limix completely changed how we manage fish tanks
            </p>
            <span className="flex items-center gap-2 text-white my-3">
              <CiPhone size={25} className="text-blue-500 -top-1 relative" />
              Phone : +20 1022 095 896
            </span>
            <span className="flex items-center gap-2 text-white">
              <MdOutlineAlternateEmail
                size={25}
                className="text-rose-500 -top-1 relative"
              />
              Email : limix@gmail.com
            </span>
            <div className="social-links flex items-center gap-4 mt-4">
              <li className="w-12 opacity-50 transition cursor-pointer h-12 list-none flex items-center justify-center rounded-sm bg-linear-to-r from-indigo-400 via-indigo-500 to-indigo-600 text-white">
                <FaFacebookF size={25} />
              </li>
              <li className="w-12 opacity-50 transition cursor-pointer h-12 list-none flex items-center justify-center rounded-sm bg-linear-to-r from-violet-400 via-violet-500 to-violet-600 text-white">
                <FaInstagram size={25} />
              </li>
              <li className="w-12 opacity-50 transition cursor-pointer h-12 list-none flex items-center justify-center rounded-sm bg-linear-to-r from-blue-400 via-blue-500 to-blue-600 text-white">
                <SlSocialLinkedin size={25} />
              </li>
              <li className="w-12 opacity-50 transition cursor-pointer h-12 list-none flex items-center justify-center rounded-sm bg-linear-to-r from-sky-400 via-sky-500 to-sky-600 text-white">
                <FaXTwitter size={25} />
              </li>
            </div>
          </div>
          <div className="our-links mt-2.5">
            <h2 className="font-bold text-transparent text-lg mb-2 bg-linear-to-r bg-clip-text from-white via-blue-400 to-blue-500">
              Our Links
            </h2>
            <ul className="flex flex-col gap-3">
              <li className="">
                <Link
                  to={"/"}
                  className="flex items-center gap-2 text-white"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  <IoHomeOutline size={20} className="text-blue-500" />
                  <IoIosArrowForward size={17} />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/about"}
                  className="flex items-center gap-2 text-[#f1f5f9]"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  <CiUser size={20} className="text-blue-500" />
                  <IoIosArrowForward size={17} />
                  About
                </Link>
              </li>
              <li>
                <Link
                  to={"/product"}
                  className="flex items-center gap-2 text-[#f1f5f9]"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  <AiOutlineProduct size={20} className="text-blue-500" />
                  <IoIosArrowForward size={17} />
                  Product
                </Link>
              </li>
              <li>
                <Link
                  to={"/download"}
                  className="flex items-center gap-2 text-[#f1f5f9]"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  <MdOutlineDownload size={20} className="text-blue-500" />
                  <IoIosArrowForward size={17} />
                  Download
                </Link>
              </li>
              <li>
                <Link
                  to={"/blog"}
                  className="flex items-center gap-2 text-[#f1f5f9]"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  <GrBlog size={20} className="text-blue-500" />
                  <IoIosArrowForward size={17} />
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to={"/contact"}
                  className="flex items-center gap-2 text-[#f1f5f9]"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  <CiPhone size={20} className="text-blue-500" />
                  <IoIosArrowForward size={17} />
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="ournews mt-2.5">
            <h2 className="font-bold text-transparent text-lg mb-2 bg-linear-to-r bg-clip-text from-teal-400 via-teal-500 to-white">
              Our Newsletter
            </h2>
            <p className="text-(--TextColor)">
              Subscribe to our newsletter and receive the latest news about our
              products and services!
            </p>
            <div className="relative mt-3">
              <label
                htmlFor="subscribe "
                className="absolute top-[50%] translate-y-[-50%] right-0 w-31.25 p-1 text-white bg-linear-to-r from-indigo-400 via-indigo-500 to-indigo-600 cursor-pointer z-10 font-medium h-full flex items-center justify-center rounded-sm "
              >
                Subscribe
              </label>
              <input
                type="text"
                className="py-3 w-full bg-[#FFF1] rounded-sm text-white caret-blue-500 font-medium text-xs border-none outline-none px-3"
              />
            </div>
          </div>
        </div>
        <p className="pt-5 border-t-2 border-[#FFF1] mt-10 text-center text-white">
          © Copyright{" "}
          <span className="font-bold text-[15px] md:text-lg text-transparent bg-clip-text bg-linear-to-r from-white via-blue-400 to-blue-500 animate-bounce inline-flex">
            {" "}
            Limix Aqucalature
          </span>{" "}
          All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
