import React from "react";
import MainContainer from "../../Container/MainContainer";
import { MdFileDownloadDone } from "react-icons/md";
import Home3rdCard from "./Home3rdCard";

export default function Home3rd({ homeLoader }) {
  return (
    <MainContainer>
      <div className="flex items-center justify-center flex-col mt-20">
        <h1 className="heading1">Our Signature Packages</h1>
        <p className="paragraph1">
          Explore our premium decoration packages tailored for every occasion
          and space.
        </p>
        <div className="flex items-center flex-col gap-20 mt-10">
          {homeLoader.map((homeRecentCard, index) => (
            <Home3rdCard
              key={homeRecentCard._id}
              homeRecentCard={homeRecentCard}
              index={index}
            ></Home3rdCard>
          ))}
        </div>
      </div>
    </MainContainer>
  );
}
