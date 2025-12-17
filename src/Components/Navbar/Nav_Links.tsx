import { useState } from "react";
import { AiOutlineProduct } from "react-icons/ai";
import { CiPhone, CiUser } from "react-icons/ci";
import { GrBlog } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineDownload } from "react-icons/md";
import { Link } from "react-router";

interface IShow {
  show: boolean;
}

const Nav_Links = ({ show }: IShow) => {
  const [active, setActive] = useState<
    "home" | "about" | "contact" | "blog" | "product" | "download"
  >("home");

  return (
    <ul
      onClick={(e) => e.stopPropagation()}
      className={` nav-links flex items-center gap-5 delay-200 lg:delay-[0px] fixed lg:relative top-0 lg:top-0 flex-col lg:flex-row -right-12/12 w-[75%] md:w-[45%] lg:w-auto h-screen bg-linear-to-r lg:bg-transparent justify-center transition-all ${
        show ? "right-0 lg:right-0 show" : "-right-12/12 lg:right-0"
      } z-30`}
    >
      <li>
        <Link
          onClick={() => setActive("home")}
          to={"/"}
          className={` text-[35px]  lg:text-[17px] relative  font-medium flex items-center gap-1 
          before:w-1.75 before:h-1.75 
          before:-right-3.5 before:absolute before:hidden
          lg:before:block before:rounded-full before:bg-linear-to-r before:from-sky-500 before:via-blue-500 before:to-blue-600 ${
            active == "home" ? "opacity-100" : "opacity-50"
          }`}
        >
          <IoHomeOutline />
          Home
        </Link>
      </li>
      <li>
        <Link
          onClick={() => setActive("about")}
          to={"/about"}
          className={`text-[35px]  lg:text-[17px] relative  font-medium flex items-center gap-1 
          before:w-1.75 before:h-1.75 ${
            active == "about" ? "opacity-100" : "opacity-50"
          }  before:hidden lg:before:block
          before:-right-3.5 before:absolute
           before:rounded-full before:bg-linear-to-r before:from-sky-500 before:via-blue-500 before:to-blue-600`}
        >
          <CiUser />
          About
        </Link>
      </li>
      <li>
        <Link
          onClick={() => setActive("product")}
          to={"/product"}
          className={` text-[35px]  lg:text-[17px] relative  font-medium flex items-center gap-1 
          before:w-1.75 before:h-1.75 ${
            active == "product" ? "opacity-100" : "opacity-50"
          } before:hidden lg:before:block
          before:-right-3.5 before:absolute before:rounded-full before:bg-linear-to-r
           before:from-sky-500 before:via-blue-500 before:to-blue-600`}
        >
          <AiOutlineProduct />
          Product
        </Link>
      </li>
      <li>
        <Link
          to={"/blog"}
          onClick={() => setActive("blog")}
          className={` text-[35px]  lg:text-[17px] relative  font-medium flex items-center gap-1 
          before:w-1.75 before:h-1.75 before:hidden lg:before:block
          before:-right-3.5 before:absolute before:rounded-full 
          before:bg-linear-to-r before:from-sky-500 before:via-blue-500 before:to-blue-600 ${
            active == "blog" ? "opacity-100" : "opacity-50"
          }`}
        >
          <GrBlog />
          Blog
        </Link>
      </li>
      <li>
        <Link
          to={"/download"}
          onClick={() => setActive("download")}
          className={` text-[35px]  lg:text-[17px] relative  font-medium flex items-center gap-1 
          before:w-1.75 before:h-1.75 before:hidden lg:before:block
          before:-right-3.5 before:absolute before:rounded-full 
          before:bg-linear-to-r before:from-sky-500 before:via-blue-500 before:to-blue-600 ${
            active == "download" ? "opacity-100" : "opacity-50"
          }`}
        >
          <MdOutlineDownload  />
          Download
        </Link>
      </li>
      <li>
        <Link
          onClick={() => setActive("contact")}
          to={"/contact"}
          className={` text-[35px]  lg:text-[17px] font-medium flex items-center gap-1 ${
            active == "contact" ? "opacity-100" : "opacity-50"
          }`}
        >
          <CiPhone />
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default Nav_Links;
