import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "../Pages/HomePage/Home";
import ServicesPage from "../Pages/Service/ServicesPage";
import Aboutpage from "../Pages/About/Aboutpage";
import Contact from "../Pages/Contact/Contact";
import UserDeshboard from "../Deshboard/UserDeshboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/service",
    element: <ServicesPage></ServicesPage>,
  },
  {
    path: "/about",
    element: <Aboutpage></Aboutpage>,
  },
  {
    path: "/contact",
    element: <Contact></Contact>,
  },
  {
    path: "/user-deshboard",
    element: <UserDeshboard></UserDeshboard>,
  },
]);
