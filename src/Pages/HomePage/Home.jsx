import React from "react";
import Navbar from "../../Components/Navbar";
import { IoPlaySharp } from "react-icons/io5";
import { FaRegCalendarCheck } from "react-icons/fa";
import MainContainer from "../../Container/MainContainer";
import Home2nd from "./Home2nd";
import Home3rd from "./Home3rd";
import Homehero from "./Homehero";

const Home = () => {
  return (
    <MainContainer>
      <Navbar></Navbar>
      <Homehero></Homehero>
      <Home2nd></Home2nd>
      <Home3rd></Home3rd>
    </MainContainer>
  );
};

export default Home;
