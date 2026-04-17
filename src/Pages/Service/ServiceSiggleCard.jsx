import React from "react";
import MainContainer from "../../Container/MainContainer";

const ServiceSiggleCard = ({ serviceCard }) => {
  //   console.log(serviceCard);
  const { serviceName, description, servicesCost, unit, servicesImage } =
    serviceCard;
  return (
    <MainContainer>
      <div className="flexCenter flex-col border-1 border-secondary rounded-xl">
        <figure>
          <img className="w-[400px] h-[220px]" src={servicesImage} alt="" />
        </figure>
        <div className="px-8 py-5">
          <div className="flexLeft flex-col">
            <h2 className="paraHeading">{serviceName}</h2>
            <p className="paragraph3">{description}</p>
          </div>
          <div className="flex items-center justify-center gap-10 py-3">
            <div className="flex items-center justify-start ">
              <h1 className="heading1">{servicesCost}</h1>

              <span>/</span>
              <p>{unit}</p>
            </div>
            <button className="btn-primary">View Details</button>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default ServiceSiggleCard;
