import React from "react";
import image2 from "../../assets/image2.png";
import { IoPlaySharp } from "react-icons/io5";
import { FaRegCalendarCheck } from "react-icons/fa";

const Homehero = () => {
  return (
    <div>
      <section className="bg-[#FCFBF9] flex items-center justify-between gap-10 mt-10">
        <div>
          <h1 className="font-bold text-7xl px-y-50">
            Transform Your Space Into a Dream
          </h1>
          <p className="mt-2 text-xl">
            Professional home & ceremony decoration services <br /> — booked
            online in minutes.
          </p>
          <div className="flex items-center justify-start my-10 gap-8">
            <button className="btn-primary">Book Decoration Service</button>
            <button className="btn-secondary flex item-center justify-center gap-2">
              <IoPlaySharp className="mt-1" />
              Book Watch Showreel
            </button>
          </div>
          <div className="flex items-center justify-start gap-3 mt-20">
            <div className="border-2 border-secondary-content px-5 py-2 rounded-xl">
              <h1 className="font-bold text-2xl">500+</h1>
              <p>Projects Completed</p>
            </div>
            <div className="border-2 border-secondary-content px-5 py-2 rounded-xl">
              <h1 className="font-bold text-2xl">49/5</h1>
              <p>Average Rating</p>
            </div>
            <div className="border-2 border-secondary-content px-5 py-2 rounded-xl">
              <h1 className="font-bold text-2xl">50+</h1>
              <p>Expert Decorators</p>
            </div>
          </div>
        </div>
        <div className="relative bg-green-600">
          <div>
            <img className="w-300 h-210" src={image2} alt="" />
          </div>
          <div className="flex items-center justify-center gap-3 bg-primary w-70 h-20 text-white rounded-[6px] absolute bottom-10 -left-15 ">
            <div className="bg-secondary w-10 h-10 flex items-center justify-center rounded-4xl text-black">
              <FaRegCalendarCheck />
            </div>
            <div>
              <h3 className="font-bold">Easy Booking</h3>
              <p>Secure your date today</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homehero;
