import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

function Card({ review }) {
  return (
    <div className="flex flex-col md:relative bg-black">
      <div className="absolute top-[-7rem] z-[10] mx-auto">
        <img
          className="w-[140px] h-[140px] aspect-square rounded-full z-20"
          src={review.image}
          alt=""
        />
        <div className="w-[140px] h-[140px] bg-[#22] rounded-full absolute top-[-6px] z-[-10] left-[10px]"></div>
      </div>

      <div className="text-center mt-7">
        <p className="tracking-wider font-bold text-2xl capitalize text-white">
          {review.name}
        </p>
        <p className="text-white text-sm uppercase">{review.job} </p>
      </div>

      <div className="text-gray-400 mx-auto mt-5">
        <FaQuoteLeft />
      </div>

      <div className="text-center mt-4 text-white">{review.text}</div>

      <div className="text-white mx-auto mt-5">
        <FaQuoteRight />
      </div>
    </div>
  );
}

export default Card;
