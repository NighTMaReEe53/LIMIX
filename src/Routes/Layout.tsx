import { Outlet } from "react-router";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer";
import Dots from "../Components/Dots";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Dots />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
