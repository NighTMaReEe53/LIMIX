import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Layout from "./Layout";
import Contact from "../Pages/Contact";
import Blog from "../Pages/Blog";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog />} />
      </Route>
    </>
  )
);
