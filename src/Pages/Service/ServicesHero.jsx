import React from "react";
import MainContainer from "../../Container/MainContainer";
import serviceHeroImg from "../../assets/serviceHero-banner photo.jpg";

const ServicesHero = () => {
  return (
    <MainContainer>
      <div className="w-[1240px] h-[500px] relative flex items-center justify-center">
        <div>
          <img className="w-[1240px] h-[500px]" src={serviceHeroImg} alt="" />
        </div>
      </div>
      <div className=" absolute z-2 w-[1240px] h-[500px] top-18 flex flex-col items-center justify-center gap-y-2">
        <h1 className="heading1 font-5xl">Discover Your Perfect Space</h1>
        <p>
          Find the best decoration services for weddings, homes, and corporate
          events.
        </p>
        <div>
          <label className="input w-80 flex items-center justify-center reletive mt-3">
            <input type="search" required />
            <button className="btn-primary absolute right-0">Search</button>
          </label>
        </div>
      </div>
    </MainContainer>
  );
};

export default ServicesHero;
