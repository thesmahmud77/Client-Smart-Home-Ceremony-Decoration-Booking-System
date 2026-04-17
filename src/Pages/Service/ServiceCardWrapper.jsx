import React from "react";
import { useLoaderData } from "react-router";
import MainContainer from "../../Container/MainContainer";
import ServiceSiggleCard from "./ServiceSiggleCard";

const ServiceCardWrapper = () => {
  const servicesCards = useLoaderData();
  //   console.log("Services Card:", servicesCards);
  return (
    <MainContainer>
      <div className="grid grid-cols-3 gap-10">
        {servicesCards.map((serviceCard) => (
          <ServiceSiggleCard
            key={serviceCard._id}
            serviceCard={serviceCard}
          ></ServiceSiggleCard>
        ))}
      </div>
    </MainContainer>
  );
};

export default ServiceCardWrapper;
