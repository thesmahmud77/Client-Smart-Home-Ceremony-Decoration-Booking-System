import React from "react";
import MainContainer from "../../Container/MainContainer";
import image1 from "../../assets/image1.png";
import { MdFileDownloadDone } from "react-icons/md";

export default function Home3rd() {
  return (
    <MainContainer>
      <div className="flex items-center justify-center flex-col mt-20">
        <h1 className="heading1">Our Signature Packages</h1>
        <p className="paragraph1">
          Explore our premium decoration packages tailored for every occasion
          and space.
        </p>
        <div className="mt-20">
          <div className="flex items-center justify-center gap-10">
            <div>
              <img src={image1} alt="" />
            </div>
            <div>
              <p className=" text-center bg-secondary text-black font-bold px-5 py-2 w-45 rounded-2xl mt-5">
                Wedding Decor
              </p>
              <h1 className="heading1 mt-10">Premium Wedding Setup</h1>
              <p className="paragraph1 mt-10">
                Make your special day unforgettable with our comprehensive
                wedding decoration package. We handle everything from the
                entrance arch and floral walkways to the main stage and dining
                aesthetics.
              </p>
              <div className="flex items-center justify-start bg-secondary px-5 py-5 gap-15 rounded-xl mt-10">
                <div>
                  <p className="paraHeading">Starting from</p>
                  <h1 className="heading1 text-primary">45,000</h1>
                </div>

                <div>
                  <p className="flex items-center justify-start gap-3 text-black text-paragraph2 font-bold">
                    <MdFileDownloadDone className="text-primary" />
                    Stage & Floral Design
                  </p>
                  <p className="flex items-center justify-start gap-3 text-black text-paragraph2 font-bold">
                    <MdFileDownloadDone className="text-primary" /> Ambient
                    Lighting Setup
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainContainer>
  );
}
