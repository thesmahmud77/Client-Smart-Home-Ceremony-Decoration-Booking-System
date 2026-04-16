import React from "react";
import MainContainer from "../../Container/MainContainer";
import { FiSearch } from "react-icons/fi";
import { AiFillAlert } from "react-icons/ai";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { MdOutlinePayment } from "react-icons/md";

export default function Home2nd() {
  return (
    <div className="bg-secondary w-full">
      <MainContainer>
        <div className="flex flex-col items-center justify-center mt-30 py-20">
          <h1 className="heading1">How StyleDecor Works</h1>
          <p className="paragraph1">
            Your dream space is just four simple steps away.
          </p>
          <div className="mt-10 flex items-center justify-center gap-3">
            <div className="bg-white flex items-center justify-center flex-col w-70 h-60 text-center px-5 py-10 rounded-xl">
              <div className="bg-primary px-2 py-2 w-12 h-12 flex items-center justify-center rounded-xl text-white">
                <FiSearch />
              </div>
              <h3 className="paraHeading mt-5">1. Browse Packages</h3>
              <p>
                Explore our diverse decoration options tailored for any event or
                home.
              </p>
            </div>
            {/* Card Divider */}
            <div className="bg-white flex items-center justify-center flex-col w-70 h-60 text-center px-5 py-10 rounded-xl">
              <div className="bg-primary px-2 py-2 w-12 h-12 flex items-center justify-center rounded-xl text-white">
                <BsFillCalendarDateFill />
              </div>
              <h3 className="paraHeading mt-5">2. Pick Date & Time</h3>
              <p>Select when and where you need the decoration setup.</p>
            </div>
            {/* Card Divider */}
            <div className="bg-white flex items-center justify-center flex-col w-70 h-60 text-center px-5 py-10 rounded-xl">
              <div className="bg-primary px-2 py-2 w-12 h-12 flex items-center justify-center rounded-xl text-white">
                <MdOutlinePayment />
              </div>
              <h3 className="paraHeading mt-5">3. Make Payment</h3>
              <p>Securely pay online to confirm your booking immediately.</p>
            </div>
            {/* Card Divider */}
            <div className="bg-white flex items-center justify-center flex-col w-70 h-60 text-center px-5 py-10 rounded-xl">
              <div className="bg-primary px-2 py-2 w-12 h-12 flex items-center justify-center rounded-xl text-white">
                <AiFillAlert />
              </div>
              <h3 className="paraHeading mt-5">4. We Decorate</h3>
              <p>Our experts arrive and transform your space flawlessly.</p>
            </div>
            {/* Card Divider */}
          </div>
        </div>
      </MainContainer>
    </div>
  );
}
