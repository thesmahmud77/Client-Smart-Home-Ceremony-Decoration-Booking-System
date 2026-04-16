import React from "react";
import MainContainer from "../../Container/MainContainer";
import image1 from "../../assets/image1.png";

export default function Home3rd() {
  return (
    <MainContainer>
      <div className="flex items-center justify-center flex-col mt-20">
        <h1 className="heading1">Our Signature Packages</h1>
        <p className="paragraph1">
          Explore our premium decoration packages tailored for every occasion
          and space.
        </p>
        <div>
          <div className="flex items-center justify-center">
            <div>
              <img src={image1} alt="" />
            </div>
            <div>
              <h1></h1>
            </div>
          </div>
        </div>
      </div>
    </MainContainer>
  );
}
