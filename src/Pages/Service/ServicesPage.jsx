import React from "react";
import Navbar from "../../Components/Navbar";
import MainContainer from "../../Container/MainContainer";
import ServicesHero from "./ServicesHero";
import ServiceCardWrapper from "./ServiceCardWrapper";

const ServicesPage = () => {
  return (
    <MainContainer>
      <Navbar></Navbar>
      <ServicesHero></ServicesHero>
      <ServiceCardWrapper></ServiceCardWrapper>
    </MainContainer>
  );
};

export default ServicesPage;
