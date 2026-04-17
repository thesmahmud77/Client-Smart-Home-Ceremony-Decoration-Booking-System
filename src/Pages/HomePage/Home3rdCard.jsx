import React from "react";
import { MdFileDownloadDone } from "react-icons/md";

const Home3rdCard = ({ homeRecentCard, index }) => {
  // console.log(homeRecentCard);
  const {
    serviceName,
    description,
    servicesCost,
    unit,
    eventDate,
    createdByEmail,
    servicesImage,
  } = homeRecentCard;
  return (
    <div>
      <div
        className={`flex flex-col justify-center gap-10 ${
          index === 1 ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <div>
          <img className="w-300 h-150 rounded-2xl" src={servicesImage} alt="" />
        </div>
        <div>
          <p className=" text-center bg-secondary text-black font-bold px-5 py-2 w-45 rounded-2xl mt-5">
            {unit}
          </p>
          <h1 className="heading1 mt-10">{serviceName}</h1>
          <p className="paragraph1 mt-10">{description}</p>
          <div className="flex items-center justify-start bg-secondary px-5 py-5 gap-15 rounded-xl mt-10">
            <div>
              <p className="paraHeading">Starting from</p>
              <h1 className="heading1 text-primary">{servicesCost}</h1>
            </div>

            <div>
              <p className="flex items-center justify-start gap-3 text-black text-paragraph2 font-bold">
                <MdFileDownloadDone className="text-primary" />
                {eventDate}
              </p>
              <p className="flex items-center justify-start gap-3 text-black text-paragraph2 font-bold">
                <MdFileDownloadDone className="text-primary" /> {createdByEmail}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home3rdCard;
