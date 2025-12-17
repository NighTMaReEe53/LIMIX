import { Link } from "react-router";

const Dots = () => {
  return (
    <div className="bulltes-nav fixed top-[50%] left-1.5 translate-y-[-50%] z-20 flex flex-col gap-7">
      <Link
        to={"/"}
        className=" flex  items-center"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <span className="w-3 h-3 border-2 absolute rounded-full border-blue-500"></span>
        <span className="second-span transition-opacity left-3.5 absolute text-xs w-14 py-1 text-center rounded-sm text-white font-bold opacity-0 pointer-events-none bg-blue-500">
          Home
        </span>
      </Link>
      <Link
        to={"/about"}
        className=" flex  items-center"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <span className="w-3 h-3 border-2 absolute rounded-full border-sky-500"></span>
        <span className="second-span transition-opacity left-3.5 absolute text-xs w-14 py-1 text-center rounded-sm text-white font-bold opacity-0 pointer-events-none bg-sky-500">
          About
        </span>
      </Link>
      <Link
        to={"/product"}
        className=" flex  items-center"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <span className="w-3 h-3 border-2 absolute rounded-full border-rose-500"></span>
        <span className="second-span transition-opacity left-3.5 absolute text-xs w-14 py-1 text-center rounded-sm text-white font-bold opacity-0 pointer-events-none bg-rose-500">
          Product
        </span>
      </Link>
      <Link
        to={"/download"}
        className=" flex  items-center"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <span className="w-3 h-3 border-2 absolute rounded-full border-indigo-600"></span>
        <span className="second-span transition-opacity left-3.5 absolute text-xs w-14 py-1 text-center rounded-sm text-white font-bold opacity-0 pointer-events-none bg-indigo-600">
          Download
        </span>
      </Link>
      <Link
        to={"/blog"}
        className=" flex  items-center"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <span className="w-3 h-3 border-2 absolute rounded-full border-emerald-500"></span>
        <span className="second-span transition-opacity left-3.5 absolute text-xs w-14 py-1 text-center rounded-sm text-white font-bold opacity-0 pointer-events-none bg-emerald-500">
          Blog
        </span>
      </Link>
      <Link
        to={"/contact"}
        className=" flex  items-center"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <span className="w-3 h-3 border-2 absolute rounded-full border-orange-500"></span>
        <span className="second-span transition-opacity left-3.5 absolute text-xs w-14 py-1 text-center rounded-sm text-white font-bold opacity-0 pointer-events-none bg-orange-500">
          Contact
        </span>
      </Link>
    </div>
  );
};

export default Dots;
